import { Handler } from "@netlify/functions";
import { ControlStations } from "../src/lib/data/control-stations";
import { Report } from "../src/lib/data/report";
import { RollCall } from "../src/lib/data/roll-call";

const handler: Handler = async (event, context) => {
  const { user } = context.clientContext ?? {};
  if (!user) {
    return { statusCode: 401 };
  }

  const controlStationsService = new ControlStations();
  const reportService = new Report();
  const rollCallService = new RollCall();

  const [controlStations, report, rollCall] = await Promise.all([
    controlStationsService.get(),
    reportService.get(),
    rollCallService.get(),
  ]);
  const data = {
    controlStations,
    report,
    rollCall,
  };
  return {
    statusCode: controlStations && report && rollCall ? 200 : 404,
    body: JSON.stringify(
      {
        success: !!controlStations,
        data,
      },
      null,
      2,
    ),
  };
};

export { handler };
