import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <table width="10%" id="table1" class="auto-style3">
        <tr>
          <td>
            <b>
              <font size="4">
                &nbsp;&nbsp; This Web Site makes it easier to acquire roll call
                sheets and information needed to pass traffic and to make this
                net operational. The postage cost now would be expensive just to
                mail roll call sheets to the Net Control each month. We have our
                own domain name so we can move the net to different locations
                but keep the address the same so it doesn&#39;t confuse people.{" "}
              </font>
            </b>
            <font size="4">
              <b>
                We wish to thank everyone that helps to make this net work.{" "}
                <br />
                {/* &nbsp;&nbsp; Also if your service is real slow and you have
                trouble loading this site try this one below. Being the main
                page has to download more material to your computer to look
                good, the alternate one doesn&#39;t download as much so it is
                faster.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --...&nbsp;&nbsp; ...-- */}
              </b>
            </font>
            {/* <p>
              <font size="4">
                <b>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    title="Loads a a little faster. "
                    target="_blank"
                    href="mtnet.htm"
                  >
                    &nbsp;Faster loading Main Page to access Roll Call
                  </a>
                </b>
              </font>
            </p> */}
            {/* <p>
              <font size="4">
                <b>If it works then mark it as a Favorite.</b>
              </font>
              <b>
                <font size="4"> Try it now. </font>
              </b>
              <font size="4">
                <b>
                  Any information or links that should be presented here let me
                  know.{" "}
                </b>
              </font>
            </p> */}

            <p>
              <b>
                If you find any mistakes in the roll call or any other page let
                me know. Spelling of names, call signs&nbsp; or other wise.
              </b>
            </p>
          </td>
        </tr>
        <tr>
          <td class="auto-style1">
            <img alt="Les" height="640" src="img/Les.JPG" width="480" />
            <br />
            <span class="auto-style2">
              <strong>Les Our Net Manager&nbsp;N7CMJ</strong>
            </span>
          </td>
        </tr>
      </table>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
