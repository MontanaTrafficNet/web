import { Base } from "./base";
import type * as NetControlStations from "../../data/net-control-stations.json";

export class ControlStations extends Base<typeof NetControlStations> {
  protected override name = "net-control-stations";
}
