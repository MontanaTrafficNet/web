import { Base } from "./base";
import type * as NetReport from "../../data/net-report.json";

export class Report extends Base<typeof NetReport> {
  protected override name = "net-report";
}
