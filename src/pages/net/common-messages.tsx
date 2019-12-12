import React from "react";
import Layout from "../../components/Layout";
import styles from "./common-messages.module.scss";

const commonMessages: React.FC = () => {
  return (
    <Layout backgroundColor="#FFFF00">
      <p className={styles.first}>
        <a
          className={styles.link}
          title="This is the Common Messages listd at ARRL"
          href="http://www.arrl.org/files/file/NTS/nts_common.pdf"
        >
          Common Messages on the ARRL Site
        </a>
      </p>
      <p>&nbsp;</p>
      <p>
        <a
          className={styles.link}
          title="Common Messages compiled by W7EKB"
          href="http://www.w7ekb.com/glowbugs/NTS/frequent.html"
        >
          Common Messages by W7EKB
        </a>
      </p>
      <p>&nbsp;</p>
      <p>
        <a
          className={styles.link}
          href="http://k6ugs.com/BSNcommontext.htm"
          title="Another Link"
        >
          Common Messages by K6UGS
        </a>
      </p>
      <p>&nbsp;</p>
      <p>
        <b>With the information from these sites maybe you can get the</b>
      </p>
      <p>
        <b>information you need to deliver the messages involved. </b>
      </p>
    </Layout>
  );
};

export default commonMessages;
