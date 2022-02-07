import { Handler } from "@netlify/functions";
import { ControlStations } from "../src/lib/data/control-stations";
import { Report } from "../src/lib/data/report";
import { RollCall } from "../src/lib/data/roll-call";

import { RollCallPDF } from "../src/lib/generate-pdf";
import equal from "fast-deep-equal";

const handler: Handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  if (event.headers["content-type"] !== "application/json") {
    return { statusCode: 415, body: "Unsupported Content Type" };
  }

  const { user } = context.clientContext ?? {};
  if (!user) {
    return { statusCode: 401 };
  }

  const data = JSON.parse(event.body);

  const rollCall = new RollCall();
  const report = new Report();
  const stations = new ControlStations();

  const currentRollCall = await rollCall.get();

  // Update roll call date only if changed
  if (!equal(currentRollCall, data.currentRollCall)) {
    data.rollCall.posted_date = new Date();
  }

  rollCall.write(data.rollCall);
  report.write(data.report);
  stations.write(data.stations);

  // Only generate right away if in development, otherwise we will wait till deploy
  if (process.env.NETLIFY_DEV === "true") {
    await RollCallPDF.generate();
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        success: true,
      },
      null,
      2,
    ),
  };
};

export { handler };
