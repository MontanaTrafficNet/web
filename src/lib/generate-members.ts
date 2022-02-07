import { RollCallPDF } from "./generate-pdf";

function generate() {
  RollCallPDF.generate().catch((e) => {
    console.log("Failed to generate members pdf", e);
  });
}

generate();
