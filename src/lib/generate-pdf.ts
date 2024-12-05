import path from "path";
import { PDFDocument, StandardFonts, rgb, PDFPage, PDFFont, PageSizes } from "pdf-lib";
import type NetRollCall from "../data/net-roll-call.json";
import { date } from "./date";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";

interface Size {
  width: number;
  height: number;
}

interface RollCallPDFOptions {
  margin?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    center?: number;
    headerBottom?: number;
    dateBottom?: number;
  };
  fontSize?: {
    title?: number;
    date?: number;
    tableHeader?: number;
    tableRow?: number;
  };
  font: PDFFont;
  fontBold: PDFFont;
}

export class RollCallPDF {
  private margin: Required<RollCallPDFOptions["margin"]>;
  private fontSize: Required<RollCallPDFOptions["fontSize"]>;
  private font: RollCallPDFOptions["font"];
  private fontBold: RollCallPDFOptions["fontBold"];
  private _page: PDFPage;
  private pageSize: ReturnType<PDFPage["getSize"]>;
  private pageCount = 1;

  private set page(p: PDFPage) {
    this._page = p;
    this.pageSize = p.getSize();
  }
  private get page(): PDFPage {
    return this._page;
  }

  constructor(
    private doc: PDFDocument,
    private rollCall: typeof NetRollCall,
    {
      margin: {
        top = 0,
        right = 0,
        bottom = 0,
        left = 0,
        headerBottom = 0,
        dateBottom = 0,
        center = 0,
      },
      fontSize: { title = 0, date = 0, tableHeader = 0, tableRow = 0 },
      font,
      fontBold,
    }: RollCallPDFOptions,
  ) {
    this.margin = { top, right, bottom, left, headerBottom, center, dateBottom };
    this.fontSize = { title, date, tableHeader, tableRow };

    this.font = font;
    this.fontBold = fontBold;

    this.page = this.doc.addPage(PageSizes.Letter);
  }

  // Width of city column
  private cityColWidth = 0;
  // Width of callsign column
  private callsignColWidth = 0;
  // Width of individual check box cells
  private checkColWidth = 0;
  // Width of Name column
  private nameColWidth = 0;
  // Number of check box cells
  private checkCols = 4;
  // Total width of all check columns
  private totalCheckColWidth = 0;
  // Total column width
  private columnWidth = 0;
  // Cell padding
  private padding = 2;
  // Border size for checkboxes
  private checkBoxBorderSize = 1;
  // Roster Row height
  private rowHeight = 1;

  async generate() {
    this.page.moveTo(0, this.pageSize.height);

    this.header();

    this.subheader();

    this.list();

    this.setMetadata();

    // Serialize the PDFDocument to bytes (a Uint8Array)
    await this.write();
  }

  private header(): Size {
    const title = "Montana Traffic Net Roll Call";
    const font = this.fontBold;

    const size = {
      width: font.widthOfTextAtSize(title, this.fontSize.title),
      height: font.heightAtSize(this.fontSize.title),
    };

    this.page.moveDown(size.height + this.margin.top);

    this.page.drawText(title, {
      x: (this.pageSize.width - size.width) / 2,
      // y: pageSize.height - this.margin.top,
      size: this.fontSize.title,
      font,
      color: rgb(0, 0, 0),
    });

    this.page.moveDown(this.margin.headerBottom);

    return size;
  }

  private subheader() {
    const sub = date(this.rollCall.posted_date).tz("GMT").format("MMMM DD, YYYY");
    const font = this.font;

    const size = {
      width: font.widthOfTextAtSize(sub, this.fontSize.date),
      height: font.heightAtSize(this.fontSize.date),
    };

    this.page.moveDown(size.height);
    this.page.drawText(sub, {
      x: (this.pageSize.width - size.width) / 2,
      size: this.fontSize.date,
      font,
      color: rgb(0, 0, 0),
    });

    this.page.moveDown(this.margin.dateBottom);
  }

  private list() {
    const currentPosition = this.page.getPosition();

    this.page.moveTo(this.margin.left, currentPosition.y);

    this.rowHeight = this.font.heightAtSize(this.fontSize.tableRow) + 2 * this.padding;
    this.columnWidth =
      (this.pageSize.width - (this.margin.left + this.margin.right + this.margin.center)) / 2;
    this.cityColWidth = 0.4 * this.columnWidth;
    this.callsignColWidth = this.font.widthOfTextAtSize("MMMMMM", this.fontSize.tableRow);
    this.checkColWidth = this.rowHeight;
    this.checkCols = 4;
    this.totalCheckColWidth = this.checkCols * this.checkColWidth;
    this.nameColWidth =
      this.columnWidth -
      (this.cityColWidth + this.callsignColWidth + this.totalCheckColWidth + this.padding);

    // How many rows will fit
    let rows = 0;

    const reCalcRows = () => {
      // How much height is left on the page
      const remainingHeight = this.page.getPosition().y - this.margin.bottom;
      // Add one to calc to consider the header
      // TODO... not sure why I'm having to add one row to actually fill up my desired space
      rows = Math.floor(remainingHeight / (this.rowHeight + 1)) + 1;
    };
    reCalcRows();

    let row = 1;
    let column = 1;
    let previousCity = "";

    for (const [city, members] of Object.entries(this.rollCall.members)) {
      // If we are starting a new city, make sure there's enough room for the
      // whole city to fit, if not, fill in the remaining space in the column
      // and continue on the next column
      if (city !== previousCity && rows - row - members.length + 1 < 0) {
        while (row <= rows) {
          this.row(row, column, "", { callsign: "", name: "" });
          row++;
        }
      }

      for (const member of members) {
        if (row > rows && column === 1) {
          this.page.moveRight(this.columnWidth + this.margin.center);
          this.page.moveUp(this.rowHeight * (rows + 1));
          column++;
          row = 1;
        } else if (row > rows && column === 2) {
          this.createNewPage();
          reCalcRows();
          column = 1;
          row = 1;
        }

        if (row === 1) {
          this.headerRow();
          previousCity = "";
        }

        this.row(row, column, city === previousCity ? "" : city, member);
        previousCity = city;

        row++;
      }
    }

    // Fill in empty space
    // TODO: fold this into the above "normal" section
    while (column <= 2) {
      while (row <= rows) {
        if (row === 1) {
          this.headerRow();
        }
        this.row(row, column, "", { callsign: "", name: "" });
        row++;
      }

      this.page.moveRight(this.columnWidth + this.margin.center);
      this.page.moveUp(this.rowHeight * (rows + 1));
      column++;
      row = 1;
    }
  }

  private createNewPage() {
    const page = this.doc.addPage(PageSizes.Letter);
    this.page = page;
    this.pageCount++;

    const titleSize = 10;
    const subSize = 8;

    const title = "Montana Traffic Net Roll Call";
    const sub = "page " + this.pageCount;

    this.page.moveTo(
      this.margin.left,
      this.pageSize.height - this.margin.top - this.font.heightAtSize(titleSize),
    );

    this.page.drawText(title, {
      x: (this.pageSize.width - this.font.widthOfTextAtSize(title, titleSize)) / 2,
      size: titleSize,
      font: this.fontBold,
      color: rgb(0, 0, 0),
    });

    this.page.moveDown(this.font.heightAtSize(subSize) + 2);

    this.page.drawText(sub, {
      x: (this.pageSize.width - this.font.widthOfTextAtSize(sub, subSize)) / 2,
      size: subSize,
      font: this.font,
      color: rgb(0, 0, 0),
    });

    this.page.moveDown(this.margin.dateBottom);
  }

  private headerRow() {
    const bgColor = rgb(0.74, 0.74, 0.74);
    const page = this.page;

    page.moveDown(this.rowHeight);

    // TODO: why doesn't this align with the boxes properly...
    // adding 0.3 to force it for now
    page.drawRectangle({
      width: this.columnWidth + 0.3,
      height: this.rowHeight,
      color: bgColor,
    });

    // City
    page.moveUp(this.padding);
    page.moveRight(this.padding);
    page.drawText("City", {
      size: this.fontSize.tableRow,
      font: this.fontBold,
      color: rgb(0, 0, 0),
    });
    page.moveRight(this.cityColWidth);

    // Callsign
    page.drawText("Callsign", {
      size: this.fontSize.tableRow,
      font: this.fontBold,
      color: rgb(0, 0, 0),
    });
    page.moveRight(this.callsignColWidth);

    // Name
    page.drawText("Name", {
      size: this.fontSize.tableRow,
      font: this.fontBold,
      color: rgb(0, 0, 0),
    });
    page.moveRight(this.nameColWidth);

    page.moveDown(this.padding);

    page.moveLeft(this.columnWidth - this.totalCheckColWidth);
  }

  private row(
    row: number,
    _column: number,
    city: string,
    member: { callsign: string; name: string },
  ) {
    const bgColor = row % 2 ? rgb(1, 1, 1) : rgb(0.95, 0.95, 0.95);
    const page = this.page;

    page.moveDown(this.rowHeight);

    page.drawRectangle({
      width: this.columnWidth,
      height: this.rowHeight,
      color: bgColor,
    });

    // City
    page.moveUp(this.padding);
    page.moveRight(this.padding);
    page.drawText(city, {
      size: this.fontSize.tableRow,
      font: this.font,
      color: rgb(0, 0, 0),
    });
    page.moveRight(this.cityColWidth);

    // Callsign
    page.drawText(member.callsign, {
      size: this.fontSize.tableRow,
      font: this.font,
      color: rgb(0, 0, 0),
    });
    page.moveRight(this.callsignColWidth);

    // Name
    page.drawText(member.name, {
      size: this.fontSize.tableRow,
      font: this.font,
      color: rgb(0, 0, 0),
    });
    page.moveRight(this.nameColWidth);

    page.moveDown(this.padding);

    // Boxes
    for (const _ of Array.from({ length: this.checkCols }, (_, i) => i)) {
      page.drawSquare({
        size: this.checkColWidth,
        borderColor: rgb(0.68, 0.68, 0.68),
        borderWidth: this.checkBoxBorderSize / 2,
      });
      page.moveRight(this.checkColWidth);
    }
    // ... boxes

    page.moveLeft(this.columnWidth);
  }

  private async write() {
    const pdfBytes = await this.doc.save();

    console.log("write to fs");
    const fs = (await import("fs")).promises;
    const path = await import("path");

    await fs.writeFile(path.normalize(path.join("./static/", "members.pdf")), pdfBytes);
  }

  private setMetadata(): void {
    this.doc.setTitle("Montana Traffic Net Roll Call");
    this.doc.setAuthor("Montana Traffic Net");
    this.doc.setSubject("Roll Call for the Montana Traffic Net");
    this.doc.setKeywords(["ham", "radio", "amateur", "montana", "roll", "call"]);
    this.doc.setCreator("MontanaTrafficNet.com");
  }

  static async generate() {
    const filePath = path.join(
      path.dirname(fileURLToPath(import.meta.url)),
      "..",
      "data",
      "net-roll-call.json",
    );
    console.log("Getting: ", filePath);

    const contents = await fs.readFile(filePath);
    const rollCall = JSON.parse(contents.toString("utf-8")) as typeof NetRollCall;

    const doc = await PDFDocument.create();
    const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
    const font = await doc.embedFont(StandardFonts.Helvetica);
    const pdf = new RollCallPDF(doc, rollCall, {
      margin: {
        top: 15,
        bottom: 0,
        left: 20,
        right: 20,
        center: 40,
        headerBottom: 10,
        dateBottom: 15,
      },
      fontSize: {
        title: 20,
        date: 11,
        tableHeader: 12,
        tableRow: 9,
      },
      font,
      fontBold,
    });
    await pdf.generate();
  }
}
