export class Base<T extends any> {
  static basePath = [".", "src", "data"];

  protected name = "none";

  async get(): Promise<T | undefined> {
    const fs = await (await import("fs")).promises;
    const path = await import("path");
    const filePath = path.join(...Base.basePath, this.name + ".json");
    console.log("Getting: ", filePath);

    try {
      const contents = await fs.readFile(filePath);
      return JSON.parse(contents.toString("utf-8"));
    } catch (e) {
      console.error(`Failed to read ${filePath}`, e);
      return undefined;
    }
  }

  async write(data: T): Promise<boolean> {
    const fs = await (await import("fs")).promises;
    const path = await import("path");
    const filePath = path.join(...Base.basePath, this.name + ".json");
    console.log("Writing to: ", filePath);

    try {
      await fs.writeFile(filePath, JSON.stringify(data, null, 2), {
        encoding: "utf8",
      });
      return true;
    } catch (e) {
      console.error(`Failed to write ${filePath}`, e);
      return false;
    }
  }
}
