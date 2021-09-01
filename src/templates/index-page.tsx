import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import * as style from "./index-page.module.scss";

export const IndexPageTemplate = ({ reports, rollCallDate, rollCallPath }) => (
  <div>
    <table
      style={{
        width: 1010 + "px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "2em"
      }}
      className={style.autoStyle79}
    >
      <tbody>
        <tr>
          <td colSpan={6} className={style.autoStyle34}>
            <strong>MONTANA TRAFFIC NET</strong>
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle37}>
            {" "}
            <img
              alt="USA Flag"
              height="55"
              width="100"
              src="img/animatedflag.gif"
            />
          </td>
          <td colSpan={4} rowSpan={2} className={style.autoStyle37}>
            {" "}
            <img alt="Tower" height="126" width="120" src="img/antenna-1.gif" />
          </td>
          <td className={style.autoStyle37}>
            {" "}
            <img alt="Montana" height="50" width="68" src="img/montan1.gif" />
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle78}> QST QST QST</td>
          <td className={style.autoStyle78}>QST QST QST</td>
        </tr>
        <tr>
          <td colSpan={6} className={style.autoStyle37}>
            {" "}
            <img alt="coax" height="15" width="600" src="img/coax1.gif" />
          </td>
        </tr>
        <tr>
          <td colSpan={6} className={style.autoStyle37}>
            <span className={style.autoStyle7}>
              <strong>This Web Page Is For All Amateur Radio Operators</strong>
            </span>
          </td>
        </tr>
        <tr>
          <td colSpan={6} className={style.autoStyle37}>
            {" "}
            <img alt="coax" height="15" width="600" src="img/coax1.gif" />
          </td>
        </tr>
        <tr>
          <td colSpan={6} className={style.autoStyle39}>
            <strong>
              This Net Has Been In Existence In Excess Of 60 Years
            </strong>
          </td>
        </tr>
        <tr>
          <td colSpan={6} className={style.autoStyle37}>
            {" "}
            <img alt="coax" height="15" width="600" src="img/coax1.gif" />
          </td>
        </tr>
        <tr>
          <td colSpan={6} className={style.style3}>
            <span className={style.autoStyle3}>
              &nbsp;
              <span className={style.autoStyle8}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                This Net is part of the Radio Relay Intermational..and Handles
                Traffic with all States, Canada and all Other parts
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                of the World where Third
              </span>
            </span>{" "}
            <span className={style.autoStyle7}>
              Party Traffic is Allowed..This Net meets at Zero Hour Thirty
              Minutes on or near 3910 kHZ
            </span>
          </td>
        </tr>
        <tr>
          <td colSpan={6} className={style.autoStyle37}>
            {" "}
            <img alt="coax" height="15" width="600" src="img/coax1.gif" />
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle81}>
            <strong>
              {" "}
              <Link
                target="_NEW"
                title="Leave an email for the Manager"
                to="contact"
                state={{
                  for: "manager",
                  header: "Montana Traffic Net Manager"
                }}
              >
                {" "}
                <span className={style.autoStyle83}>Net~Manager</span>
                <em>
                  <br />{" "}
                </em>
                <span className={style.autoStyle82}>N7CMJ~</span>
              </Link>
              <span className={style.autoStyle6}>Les</span>
            </strong>
          </td>
          <td colSpan={4} className={style.autoStyle37}>
            <span className={style.autoStyle8}>
              <strong>
                {" "}
                <span className={style.autoStyle49}>&nbsp;&nbsp;&nbsp; </span>
              </strong>{" "}
              <span className={style.autoStyle49}>
                <strong>&nbsp;</strong>
              </span>
            </span>
            <Link target="NEW" title="Shows how to use this site." to="about">
              <span className={style.autoStyle59}>
                <strong>Read First</strong>
              </span>
            </Link>{" "}
            <span className={style.autoStyle6}>
              <br /> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                title="To give us information about rollcall changes"
                to="input-roll-call"
              >
                {" "}
                <span className={style.autoStyle60}>
                  &nbsp;<strong>Input Rollcall Info</strong>
                </span>
              </Link>
            </span>
          </td>
          <td className={style.autoStyle61}>
            {" "}
            <strong>
              <Link
                target="_NEW"
                title="Contact Nick"
                to="contact"
                state={{
                  for: "webmaster",
                  header: "Montana Traffic Net Webmaster"
                }}
              >
                {" "}
                <span className={style.autoStyle84}>Web~Master</span>
                <br className={style.autoStyle85} />{" "}
                <span className={style.autoStyle86}>NC7BC~Nick</span>
              </Link>
            </strong>
          </td>
        </tr>
        <tr>
          <td
            colSpan={6}
            style={{ height: 51 + "px" }}
            className={style.autoStyle37}
          >
            {" "}
            <span className={style.autoStyle15}>THIS IS YOUR NET!!!!!!!!</span>
            <span className={style.autoStyle16}>
              YOU MAKE THE DIFFERENCE !!!
            </span>
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle33}>
            {" "}
            &nbsp;
            <br /> &nbsp;<b>&nbsp; </b>{" "}
            <a target="_NEW" title="Roll Call for the Net" href={rollCallPath}>
              {" "}
              <span className={style.autoStyle53}>
                <strong>Roll Call&nbsp;</strong>
              </span>
            </a>
          </td>
          <td colSpan={4} rowSpan={6} className={style.autoStyle33}>
            {" "}
            <a id="ctl00_Main_HyperLink1" target="_blank" href={rollCallPath}>
              {" "}
              <span className={style.autoStyle60}>
                <strong>{rollCallDate.split(",")[0]} Roll Call Posted</strong>
              </span>
            </a>
            <br /> <br className={style.autoStyle6} />{" "}
            <span className={style.autoStyle32}>
              <strong>Net Control Stations</strong>
            </span>
            <br className={style.autoStyle3} />{" "}
            <span className={style.autoStyle3}>Sun-KF7OCI~Larry</span>
            <br className={style.autoStyle3} />{" "}
            <span className={style.autoStyle3}>Mon-K7PKA~Paula</span>
            <br className={style.autoStyle3} />{" "}
            <span className={style.autoStyle3}>Tue-KI7CSZ~Robert</span>
            <br className={style.autoStyle3} />{" "}
            <span className={style.autoStyle3}>Wed-N7YL~Ann</span>
            <br className={style.autoStyle3} />{" "}
            <span className={style.autoStyle3}>Thu-WA7LAD~Mac</span>
            <br className={style.autoStyle3} />{" "}
            <span className={style.autoStyle3}>Fri-K7NJC~Dick</span>
            <br className={style.autoStyle3} />{" "}
            <span className={style.autoStyle3}>Sat-KG7BFP~Deb</span>
            <br className={style.autoStyle3} />{" "}
            <span className={style.autoStyle32}>
              <strong>Alternate Net Controls</strong>
            </span>
            <span className={style.autoStyle3}>
              <br /> N7QOS~David
              <br /> KF7SND~Heather
              <br /> KA7YYR~Herb
              <br /> <br /> <br />{" "}
              <span className={style.autoStyle76}>
                <strong>{reports[0].month} Net Report</strong>
              </span>
              <table className={style["reports"]}>
                <tr>
                  <td className={style["header"]}>Checkins</td>
                  <td>{reports[0].checkins}</td>
                </tr>
                <tr>
                  <td className={style["header"]}>Traffic</td>
                  <td>{reports[0].traffic}</td>
                </tr>
                <tr>
                  <td className={style["header"]}>Time</td>
                  <td>{reports[0].time} minutes</td>
                </tr>
              </table>
            </span>
            <p className={style.autoStyle3}>
              {" "}
              <br />{" "}
            </p>
          </td>
          <td className={style.autoStyle33}>
            {" "}
            &nbsp;&nbsp;
            <br /> <span className={style.style7}>&nbsp; </span>{" "}
            <a target="_NEW" title="Look Over" href="net/RADIOGRM.pdf">
              {" "}
              <span className={style.autoStyle53}>
                <strong>Message Form&nbsp;</strong>
              </span>
            </a>
          </td>
        </tr>
        <tr>
          <td className={style.style9}>
            &nbsp;&nbsp;
            <br /> <span className={style.style7}>&nbsp;</span>
            <Link
              target="_NEW"
              title="Handling Traffic Info"
              to="net/handling-traffic"
            >
              <span className={style.autoStyle6}>
                <strong>Handling Traffic</strong>
                <strong className={style.style12}>&nbsp;</strong>{" "}
              </span>
            </Link>
          </td>
          <td className={style.autoStyle33}>
            {" "}
            <span className={style.autoStyle6}>
              &nbsp;&nbsp;&nbsp;
              <br />{" "}
            </span>
            <b>&nbsp;</b>
            <a
              target="_NEW"
              title="Look at news items"
              href="bulletin/bulletin.htm"
            >
              <span className={style.autoStyle53}>
                <strong>Bulletin&nbsp;</strong>
              </span>
            </a>
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle33}>
            {" "}
            &nbsp;&nbsp;
            <br /> &nbsp;
            <a
              target="_NEW"
              title="Locations where you can take test"
              href="test/Testing%20and%20Information.htm"
            >
              {" "}
              <span className={style.autoStyle53}>
                <strong>Test Links/Clubs&nbsp;</strong>
              </span>
            </a>
          </td>
          <td className={style.style9}>
            {" "}
            &nbsp;&nbsp;
            <br />
            &nbsp;
            <a
              target="_NEW"
              title="Information for GW Ham Fest"
              href="http://www.gwhamfest.org/"
            >
              <strong>
                <span className={style.autoStyle6}>Ham Fest Info</span>
              </strong>
            </a>
          </td>
        </tr>
        <tr>
          <td className={style.style9}>
            {" "}
            &nbsp;&nbsp;
            <br /> <span className={style.style7}>&nbsp;</span>
            <Link to="net/preamble" title="Check out the Preamble">
              <strong>
                <span className={style.autoStyle6}>Preamble</span>
              </strong>
            </Link>
          </td>
          <td className={style.style9}>
            {" "}
            <strong>
              &nbsp;&nbsp;
              <br />{" "}
              <a
                target="_NEW"
                title="Check location of repeaters"
                href="Repeaters/Repeaters.htm"
              >
                {" "}
                <span className={style.autoStyle6}>&nbsp;Repeaters</span>
              </a>
            </strong>
          </td>
        </tr>
        <tr>
          <td className={style.style9}>
            {" "}
            &nbsp;
            <br /> <span className={style.style7}>&nbsp;</span>
            <Link title="Montana Section Net" to="net/mt-net">
              <strong>
                <span className={style.autoStyle6}>Montana Net</span>
              </strong>
            </Link>
          </td>
          <td className={style.style10}>
            {" "}
            <strong>
              &nbsp;&nbsp;
              <br />
              &nbsp;
              <a
                target="_NEW"
                title="Look over the FCC site"
                href="http://wireless.fcc.gov/uls/index.htm?job=home"
              >
                <span className={style.autoStyle6}>FCC</span>
              </a>
            </strong>
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle33}>
            {" "}
            &nbsp;&nbsp;&nbsp;
            <br />
            &nbsp;
            <a target="_NEW" title="ARRL Site" href="http://www.arrl.org/">
              <strong>
                <span className={style.autoStyle53}>ARRL</span>
                <span className={style.autoStyle72}>&nbsp;</span>
              </strong>
            </a>
          </td>
          <td className={style.style11}>
            {" "}
            &nbsp;<span className={style.autoStyle49}>&nbsp;</span>&nbsp;
            <br />
            &nbsp;
            <a target="_NEW" title="Check out QRZ" href="http://qrz.com/">
              <span className={style.autoStyle53}>
                <strong>QRZ</strong>
              </span>
            </a>
          </td>
        </tr>
        <tr>
          <td
            colSpan={2}
            style={{ height: 51 + "px" }}
            className={style.autoStyle33}
          >
            {" "}
            <Link
              to="net/common-messages"
              title="See a list of common messages. "
            >
              <img
                alt="Common Messages"
                height="34"
                width="200"
                className={style.autoStyle62}
                src="img/commonmessage.gif"
              />
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td
            colSpan={2}
            style={{ height: 51 + "px" }}
            className={style.autoStyle33}
          >
            {" "}
            &nbsp;&nbsp;
            <a
              target="_NEW"
              title="Form to use to send weather reports to other Hams"
              href="WeatherReports.htm"
            >
              {" "}
              <span className={style.autoStyle60}>
                <strong>Weather Report Form</strong>
              </span>
            </a>
            &nbsp;&nbsp;&nbsp;
          </td>
          <td
            colSpan={2}
            style={{ height: 51 + "px" }}
            className={style.autoStyle33}
          >
            {" "}
            &nbsp;&nbsp;
            <a
              target="_NEW"
              title="Training information"
              href="http://training.fema.gov/IS/crslist.asp"
            >
              {" "}
              <img
                alt="Link to ICS Courses"
                height="37"
                width="176"
                className={style.autoStyle62}
                src="img/ICS.gif"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td
            colSpan={3}
            style={{ height: 51 + "px" }}
            className={style.autoStyle33}
          >
            {" "}
            <a target="_NEW" href="Nets.html">
              {" "}
              <span className={style.autoStyle60}>
                <strong>Information - IMN and DRN7 Nets</strong>
              </span>
            </a>
            <span className={style.autoStyle49}>&nbsp;</span>
          </td>
          <td
            colSpan={3}
            style={{ height: 51 + "px" }}
            className={style.autoStyle33}
          >
            {" "}
            <a
              target="_NEW"
              title="Mutual Aid and Common Freq Manual"
              href="http://pssb.mt.gov/mutual_aid_manual.mcpx"
            >
              <span className={style.autoStyle60}>
                <strong>Mutual Aid &amp; Common Freq Manual</strong>
              </span>
            </a>
          </td>
        </tr>
        {/* <tr>
          <td colSpan={3} style={{ height: 51 + "px" }} className={style.autoStyle33}>
            {" "}
            <strong>
              {" "}
              <a
                target="_NEW"
                title="Sign Guest Book"
                href="guest/contact/contactform.php"
              >
                {" "}
                <span className={style.autoStyle53}>Sign Guest Book</span>
              </a>
            </strong>
          </td>
          <td colSpan={3} style={{ height: 51 + "px" }} className={style.autoStyle33}>
            {" "}
            <strong>
              {" "}
              <a
                target="_NEW"
                title="Look over the Guest Book"
                href="guest/view.htm"
              >
                {" "}
                <span className={style.autoStyle53}>View Guest Book</span>
              </a>
            </strong>
          </td>
        </tr> */}
        <tr>
          <td colSpan={3} className={style.autoStyle64}>
            {" "}
            <strong>
              <a target="_NEW" title="Check your Weather" href="Weather.html">
                {" "}
                <span className={style.autoStyle6}>
                  Check the Weather in Your Area
                </span>
              </a>
            </strong>
          </td>
          <td
            colSpan={3}
            style={{ height: 51 + "px" }}
            className={style.autoStyle64}
          >
            {" "}
            <strong>
              {" "}
              <a
                target="_NEW"
                title="How to mount your Weather Equipment"
                href="Gauge.html"
              >
                {" "}
                <span className={style.autoStyle6}>
                  Mounting Your Weather Equipment
                </span>
              </a>
            </strong>
          </td>
        </tr>
        <tr>
          <td
            colSpan={3}
            style={{ height: 51 + "px" }}
            className={style.autoStyle64}
          >
            {" "}
            <span className={style.style7}>Donate to MTN </span>
            <b>»»</b>
          </td>
          <td colSpan={3} className={style.style8}>
            {" "}
            <span className={style.autoStyle6}>
              <span className={style.autoStyle80}>
                {" "}
                <Link
                  target="_NEW"
                  title="Leave an email for the Manager"
                  to="contact"
                  state={{
                    for: "for-manager",
                    header: "Montana Traffic Net Manager"
                  }}
                >
                  <span className={style.autoStyle74}>Contact Net Manager</span>
                </Link>{" "}
              </span>
            </span>
          </td>
        </tr>
        <tr>
          <td rowSpan={4} className={style.autoStyle33}>
            {" "}
            <a
              target="_NEW"
              title="Vanity Call Signs"
              href="http://www.arrl.org/vanity-call-signs"
            >
              {" "}
              <img
                alt="Vanity Call Sign"
                height="37"
                width="155"
                className={style.autoStyle62}
                src="img/VanityCallSign.gif"
              />
            </a>
          </td>
          <td colSpan={4} className={style.autoStyle45}>
            &nbsp; Phonetic Alphabet?
          </td>
          <td rowSpan={4} className={style.autoStyle33}>
            &nbsp;
            <a
              target="_NEW"
              title="Listen to Patsy Cline"
              href="PatsyCline.wav"
            >
              {" "}
              <img
                alt="Listen to Patsy Cline"
                height="37"
                width="181"
                className={style.autoStyle62}
                src="img/PatsyCline.gif"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle69}>
            <strong>A</strong>lpha
          </td>
          <td className={style.autoStyle69}>
            <strong>K</strong>ilo
          </td>
          <td className={style.autoStyle69}>
            <strong>U</strong>niform
          </td>
          <td className={style.autoStyle69}>
            <strong>0 </strong>&nbsp;<strong>Z</strong>ero
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle69}>
            <strong>B</strong>ravo
          </td>
          <td className={style.autoStyle69}>
            <strong>L</strong>ima
          </td>
          <td className={style.autoStyle69}>
            <strong>V</strong>ictor
          </td>
          <td className={style.autoStyle69}>
            <strong>1 </strong>&nbsp;Wun
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle69}>
            <strong>C</strong>harlie
          </td>
          <td className={style.autoStyle69}>
            <strong>M</strong>ike
          </td>
          <td className={style.autoStyle69}>
            <strong>W</strong>hiskey
          </td>
          <td className={style.autoStyle69}>
            <strong>2 </strong>&nbsp;<strong>T</strong>oo
          </td>
        </tr>
        <tr>
          <td rowSpan={4} className={style.autoStyle33}>
            {" "}
            <a target="_NEW" href="shuttle.htm">
              {" "}
              <img
                alt="In Memory of the Space Shuttle"
                height="37"
                width="201"
                className={style.autoStyle62}
                src="img/SpaceShuttle.gif"
              />
            </a>
          </td>
          <td className={style.autoStyle69}>
            <strong>D</strong>elta
          </td>
          <td className={style.autoStyle69}>
            <strong>N</strong>ovember
          </td>
          <td className={style.autoStyle69}>
            <strong>X</strong>-ray
          </td>
          <td className={style.autoStyle69}>
            <strong>3</strong> <strong>&nbsp;T</strong>ree
          </td>
          <td rowSpan={4} className={style.autoStyle33}>
            &nbsp;
            <a
              target="_NEW"
              title="RF Safety"
              href="http://www.fcc.gov/oet/rfsafety/rf-faqs.html"
            >
              {" "}
              <img
                alt="See information on RF Exposure"
                height="37"
                width="125"
                className={style.autoStyle62}
                src="img/RF%20Exposure.gif"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle69}>
            <strong>E</strong>cho
          </td>
          <td className={style.autoStyle69}>
            <strong>O</strong>scar
          </td>
          <td className={style.autoStyle69}>
            <strong>Y</strong>ankee
          </td>
          <td className={style.autoStyle69}>
            <strong>4&nbsp; F</strong>ower
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle69}>
            <strong>F</strong>oxtrot
          </td>
          <td className={style.autoStyle69}>
            <strong>P</strong>apa
          </td>
          <td className={style.autoStyle69}>
            <strong>Z</strong>ulu
          </td>
          <td className={style.autoStyle69}>
            <strong>5</strong>&nbsp;
            <strong>&nbsp;F</strong>ife
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle69}>
            <strong>G</strong>olf
          </td>
          <td className={style.autoStyle69}>
            <strong>Q</strong>uebec
          </td>
          <td className={style.autoStyle69}>&nbsp;</td>
          <td className={style.autoStyle69}>
            <strong>6</strong> <strong>&nbsp; S</strong>ix
          </td>
        </tr>
        <tr>
          <td rowSpan={3} className={style.autoStyle33}>
            {" "}
            <a target="_NEW" title="Look up Call Signs" href="Callsign.htm">
              {" "}
              <img
                alt="Look up Call Signs"
                height="37"
                width="171"
                className={style.autoStyle62}
                src="img/CallSign.gif"
              />
            </a>
          </td>
          <td className={style.autoStyle69}>
            <strong>H</strong>otel
          </td>
          <td className={style.autoStyle69}>
            <strong>R</strong>omeo
          </td>
          <td className={style.autoStyle69}>.&nbsp; Decimal</td>
          <td className={style.autoStyle69}>
            <strong>7</strong> <strong>&nbsp;S</strong>
            <span className={style.autoStyle66}>even</span>
          </td>
          <td rowSpan={3} className={style.autoStyle33}>
            &nbsp;
            <a target="_NEW" href="phonetic.htm">
              {" "}
              <img
                alt="Print the Alphabet for your use"
                height="37"
                width="164"
                className={style.autoStyle62}
                src="img/PhoneticAla.gif"
              />
            </a>
            <br />{" "}
            <span className={style.autoStyle6}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Print from this file
            </span>
          </td>
        </tr>
        <tr>
          <td className={style.autoStyle69}>
            <strong>I</strong>ndia
          </td>
          <td className={style.autoStyle69}>
            <strong>S</strong>ierra
          </td>
          <td className={style.autoStyle69}>.&nbsp; Stop</td>
          <td className={style.autoStyle69}>
            <strong>8</strong> <strong>&nbsp;A</strong>
            <span className={style.autoStyle66}>it</span>
          </td>
        </tr>
        <tr>
          <td style={{ height: 48 + "px" }} className={style.autoStyle69}>
            <strong>J</strong>uliet
          </td>
          <td style={{ height: 48 + "px" }} className={style.autoStyle69}>
            <strong>T</strong>ango
          </td>
          <td style={{ height: 48 + "px" }} className={style.autoStyle46}></td>
          <td style={{ height: 48 + "px" }} className={style.autoStyle69}>
            <strong>9</strong>&nbsp;
            <strong>N</strong>iner
          </td>
        </tr>
        {/* <tr>
          <td colSpan={6} style={{ height: 273 + "px" }} className={style.autoStyle33}>
            <iframe
              id="I3"
              height="225"
              name="I3"
              width="770"
              src="comments.html"
            >
              {" "}
              Your browser does not support inline frames or is currently
              configured not to display inline frames.{" "}
            </iframe>
          </td>
        </tr> */}
        <tr>
          <td
            colSpan={6}
            style={{ height: 54 + "px" }}
            className={style.autoStyle50}
          >
            Thanks to all who help us make this a Great Net
          </td>
        </tr>
        <tr>
          <td
            colSpan={6}
            style={{ height: 109 + "px" }}
            className={style.style6}
          >
            {" "}
            <a href="http://radio-relay.org/">
              <span className={style.autoStyle6}>
                Radio Relay International
              </span>
            </a>
          </td>
        </tr>
        <tr>
          <td style={{ height: 293 + "px" }} className={style.style2}>
            {" "}
            <br /> <br />{" "}
            <a
              title="Check us out"
              target="_NEW"
              href="http://Radio-Relay.org/"
            >
              <br /> <br />{" "}
            </a>
            <br /> <br />{" "}
            <span className={style.autoStyle66}>
              <strong>
                {" "}
                <a
                  title="Check Us"
                  target="_NEW"
                  className={style.style4}
                  href="http://Radio-Relay.org/"
                >
                  Link to Site
                </a>
              </strong>
            </span>
          </td>
          <td
            colSpan={4}
            style={{ height: 253 + "px" }}
            className={style.autoStyle33}
          >
            <p>&nbsp;</p>
            <p>
              <img alt="WAEF" height="121" width="235" src="img/WAEFPic.jpg" />
            </p>{" "}
          </td>
          <td style={{ height: 253 + "px" }} className={style.autoStyle33}>
            {" "}
            <img
              alt="Thank You"
              height="121"
              width="235"
              src="img/thankyou.gif"
            />
          </td>
        </tr>
        <tr>
          <td
            colSpan={6}
            style={{ height: 44 + "px" }}
            className={style.autoStyle33}
          >
            {" "}
            <Link
              target="_NEW"
              title="Contact us with information"
              to="contact"
              state={{ for: "info", header: "Montana Traffic Net Webmaster" }}
            >
              {" "}
              <span className={style.autoStyle51}>
                Email any Input -- This is to make Amateur Radio better for
                everybody
              </span>{" "}
            </Link>{" "}
          </td>
        </tr>
        <tr>
          <td colSpan={6} className={style.autoStyle33}>
            <span className={style.autoStyle52}>
              73 and hope your DXing is Good
            </span>{" "}
          </td>
        </tr>
        <tr>
          <td
            colSpan={6}
            style={{ height: 118 + "px" }}
            className={style.autoStyle33}
          >
            {" "}
            <iframe
              frameBorder="0"
              width="129"
              height="34"
              src="https://free.timeanddate.com/clock/i2e4o0rf/n448/ftb/tt0/tw1/tm1/td2/th2/ts1/ta1/tb4"
            ></iframe>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
          </td>
        </tr>
        <tr>
          <td
            colSpan={6}
            style={{ height: 109 + "px" }}
            className={style.autoStyle33}
          >
            <table
              id="table71"
              style={{ width: 800 + "px" }}
              className={style.style5}
            >
              <tbody>
                <tr>
                  <td style={{ width: 770 + "px" }} className={style.style10}>
                    <div>
                      {" "}
                      <span className={style.autoStyle53}>
                        <strong>Welcome to our Net and You are Number</strong>
                      </span>
                      <br />
                      <div>
                        {" "}
                        <a href="https://www.hit-counts.com">
                          {" "}
                          <img
                            alt="free html visitor counters"
                            src="https://www.hit-counts.com/counter.php?t=0&amp;digits=6&amp;ic=42345&amp;cid=699768"
                          />
                        </a>{" "}
                        <br />
                        &nbsp;
                      </div>
                    </div>{" "}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: 770 + "px" }} className={style.style10}>
                    {" "}
                    &nbsp;
                    <Link
                      target="_NEW"
                      title="Contact the Net"
                      to="contact"
                      state={{
                        for: "the-net",
                        header: "Montana Traffic Net Webmaster"
                      }}
                    >
                      <strong>
                        <span className={style.autoStyle80}>&nbsp;</span>
                        <span className={style.autoStyle53}>EMAIL the Net</span>
                      </strong>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>{" "}
          </td>
        </tr>
      </tbody>
    </table>
    <div>&nbsp;</div>
    <p>&nbsp;</p>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { rollCall } = data;

  return (
    <Layout backgroundColor={undefined}>
      <IndexPageTemplate
        reports={frontmatter.reports}
        rollCallPath={rollCall.path}
        rollCallDate={rollCall.date}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        reports {
          checkins
          month
          time
          traffic
        }
      }
    }
    rollCall {
      date
      id
      path
    }
  }
`;
