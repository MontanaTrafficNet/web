import { Base } from "./base";
import type * as NetRollCall from "../../data/net-roll-call.json";

export class RollCall extends Base<typeof NetRollCall> {
  protected override name = "net-roll-call";
}
