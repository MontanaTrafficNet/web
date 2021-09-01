import React from "react";
import Layout from "../../components/Layout";
import * as styles from "./mt-net.module.scss";

const mtNet: React.FC = () => {
  return (
    <Layout backgroundColor="#00FFFF">
      <table className={styles.autoStyle7}>
        <tr>
          <td className={styles.autoStyle1}> &nbsp;</td>
        </tr>
        <tr>
          <td className={styles.autoStyle8}>
            <p className={styles.autoStyle9}>
              <strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.autoStyle10}>
                  &nbsp;Montana Net&nbsp;&nbsp;{" "}
                </span>
              </strong>
            </p>
            <p className={styles.autoStyle9}>
              <strong>
                This net has changed to an informal net called by Doug K7YD on
                Sunday morning on 3.880 Frequency at 8:00 A.M. Mountain Standard
                Time. If he is not there then someone should take a turn and
                call the net. This net is just to keep everyone informed on to
                what is happening and information about items pertaining to
                Amateur Radio in the area. As practice W7XY takes weather
                reports if he is present and turns them into the Weather Service
                in Missoula, Billings, Great Falls and Glasgow. They really
                appreciate this and tell us Thanks for doing this. If you have
                any information to share or news of silent keys let the Net
                Control know and give it to the net. This is a fun net and
                usually lasts almost an hour so join in on the fun.
              </strong>
            </p>
            <p className={styles.autoStyle5}>
              <img
                alt="Have fun"
                height="126"
                src="/img/antenna-1.gif"
                width="120"
              />
            </p>
          </td>
        </tr>
      </table>
    </Layout>
  );
};

export default mtNet;
