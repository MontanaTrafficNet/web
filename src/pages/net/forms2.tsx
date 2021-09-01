import React from "react";
import * as styles from "./forms2.module.scss";

const forms2: React.FC = () => {
  return (
    <div className={styles.forms2}>
      <meta
        httpEquiv="Content-Type"
        content="text/html; charset=windows-1252"
      />
      <title>forms2</title>
      <table cellSpacing={1}>
        <tbody>
          <tr>
            <td colSpan={6} className={styles.header}>
              GENERAL MESSAGE
            </td>
          </tr>
          <tr>
            <td width="48%" colSpan={3} height={40}>
              <b>TO</b>:{" "}
            </td>
            <td width="52%" colSpan={3} height={40}>
              POSITION:{" "}
            </td>
          </tr>
          <tr>
            <td width="48%" colSpan={3} height={40}>
              FROM:{" "}
            </td>
            <td width="52%" colSpan={3} height={40}>
              POSITION:{" "}
            </td>
          </tr>
          <tr>
            <td width="48%" colSpan={3} height={40}>
              SUBJECT:{" "}
            </td>
            <td width="19%" colSpan={2} height={40}>
              DATE:{" "}
            </td>
            <td width="33%" height={40}>
              TIME:{" "}
            </td>
          </tr>
          <tr>
            <td colSpan={6} bgcolor="#ffffff">
              MESSAGE:
            </td>
          </tr>
          <tr>
            <td colSpan={6} height={333}></td>
          </tr>
          <tr>
            <td width="51%" colSpan={4} height={26}>
              SIGNATURE:
            </td>
            <td width="49%" colSpan={2} height={26}>
              POSITION:
            </td>
          </tr>
          <tr>
            <td colSpan={6} bgcolor="#ffffff">
              REPLY:
            </td>
          </tr>
          <tr>
            <td colSpan={6} height={293}></td>
          </tr>
          <tr>
            <td width="20%">DATE:</td>
            <td width="20%">TIME:</td>
            <td width="60%" colSpan={4}>
              SIGNATURE/POSITION:
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default forms2;
