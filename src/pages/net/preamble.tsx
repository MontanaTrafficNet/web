import React from "react";
import Layout from "../../components/Layout";
import styles from "./preamble.module.scss";

const preamble: React.FC = () => {
  return (
    <Layout backgroundColor="#FFFF00">
      <div className={styles.preamble}>
        <p className={styles.first}>
          <b>
            <a
              className={styles.link}
              title="If you want Microsoft Word format"
              href="/net/Preamble3.doc"
            >
              Preamble in DOC File Format
            </a>
          </b>
        </p>
        <p>&nbsp;</p>
        <p>
          <b>
            <a
              className={styles.link}
              title="If you want Adobe format"
              href="/net/Preamble3.pdf"
            >
              Preamble in PDF Format
            </a>
          </b>
        </p>
        <p>&nbsp;</p>
        <p>
          <b className={styles.prompt}>Take the one you want to work with.</b>
        </p>
      </div>
    </Layout>
  );
};

export default preamble;
