import { createClient, gql } from "@urql/core";

import type * as NetControlStations from "../data/net-control-stations.json";
import type * as NetReport from "../data/net-report.json";
import type * as NetRollCall from "../data/net-roll-call.json";

type Payload = {
  stations: typeof NetControlStations;
  report: typeof NetReport;
  rollCall: typeof NetRollCall;
};

export class Data {
  private remoteBranch =
    import.meta.env.MTN_USE_GITHUB === "true" ? import.meta.env.MTN_USE_BRANCH : "local-branch";
  private remoteBase = "src/data/";
  private remoteBasePath =
    import.meta.env.MTN_USE_GITHUB === "true"
      ? `${this.remoteBranch}:${this.remoteBase}`
      : `local-base:${this.remoteBase}`;

  public token: string | undefined;

  private ref = (name: string) => `${this.remoteBasePath}${name}.json`;
  private lastOid: undefined | string;
  private url = import.meta.env.MTN_USE_GITHUB
    ? "https://api.github.com/graphql"
    : "http://localhost:4000/graphql";

  protected client = createClient({
    url: this.url,
    fetchOptions: () => {
      return {
        headers: { authorization: this.token ? `Bearer ${this.token}` : "" },
      };
    },
  });

  async get(): Promise<Payload> {
    const query = gql`
      query GetFile(
        $stationsRef: String!
        $reportRef: String!
        $rollCallRef: String!
        $branchRef: String!
      ) {
        stations: repository(name: "web", owner: "MontanaTrafficNet") {
          object(expression: $stationsRef) {
            ... on Blob {
              text
            }
          }
        }
        report: repository(name: "web", owner: "MontanaTrafficNet") {
          object(expression: $reportRef) {
            ... on Blob {
              text
            }
          }
        }
        rollCall: repository(name: "web", owner: "MontanaTrafficNet") {
          object(expression: $rollCallRef) {
            ... on Blob {
              text
            }
          }
        }
        branch: repository(name: "web", owner: "MontanaTrafficNet") {
          object(expression: $branchRef) {
            oid
          }
        }
      }
    `;

    try {
      const { data, error } = await this.client
        .query(query, {
          stationsRef: this.ref("net-control-stations"),
          reportRef: this.ref("net-report"),
          rollCallRef: this.ref("net-roll-call"),
          branchRef: this.remoteBranch,
        })
        .toPromise();
      if (error) {
        console.error(`Server threw error fetching data`, error);
        return undefined;
      } else {
        const doc = {
          stations: JSON.parse(data.stations.object.text),
          report: JSON.parse(data.report.object.text),
          rollCall: JSON.parse(data.rollCall.object.text),
        };
        this.lastOid = data.branch.object.oid;
        console.log(doc);
        return doc;
      }
    } catch (e) {
      console.error(`Failed to get remote data`, e);
      return undefined;
    }
  }

  public async write(data: Payload): Promise<boolean> {
    const mutation = gql`
      mutation WriteFile($input: CreateCommitOnBranchInput!) {
        createCommitOnBranch(input: $input) {
          commit {
            url
          }
        }
      }
    `;

    try {
      const { error, data: response } = await this.client
        .mutation(mutation, {
          input: {
            branch: {
              branchName: this.remoteBranch,
              repositoryNameWithOwner: "MontanaTrafficNet/web",
            },
            message: { headline: "Management: Website Update" },
            fileChanges: {
              additions: [
                {
                  path: `${this.remoteBase}net-control-stations.json`,
                  contents: btoa(JSON.stringify(data.stations, undefined, 2)),
                },
                {
                  path: `${this.remoteBase}net-report.json`,
                  contents: btoa(JSON.stringify(data.report, undefined, 2)),
                },
                {
                  path: `${this.remoteBase}net-roll-call.json`,
                  contents: btoa(JSON.stringify(data.rollCall, undefined, 2)),
                },
              ],
            },
            expectedHeadOid: this.lastOid,
          },
        })
        .toPromise();
      if (error || !response) {
        console.error(`Server failed to update `, error);
        return false;
      } else {
        console.log("New commit made. URL: ", response.createCommitOnBranch.commit.url);
        return true;
      }
    } catch (e) {
      console.error(`Failed to update`, e);
      return false;
    }
  }
}
