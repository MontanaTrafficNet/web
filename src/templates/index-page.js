import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  roleCallDate,
  roleCallPath
}) => (
  <div>
    <table style={{ width: 1010 + "px", marginLeft: "auto", marginRight: "auto", paddingTop: "2em" }} className="auto-style79">
      <tbody>
        <tr>
          <td colSpan={6} className="auto-style34">
            <strong>MONTANA TRAFFIC NET</strong>
          </td>
        </tr>
        <tr>
          <td className="auto-style37">
            {" "}
            <img
              alt="USA Flag"
              height="55"
              width="100"
              src="img/animatedflag.gif"
            />
          </td>
          <td colSpan={4} rowSpan={2} className="auto-style37">
            {" "}
            <img alt="Tower" height="126" width="120" src="img/antenna-1.gif" />
          </td>
          <td className="auto-style37">
            {" "}
            <img alt="Montana" height="50" width="68" src="img/montan1.gif" />
          </td>
        </tr>
        <tr>
          <td className="auto-style78"> QST QST QST</td>
          <td className="auto-style78">QST QST QST</td>
        </tr>
        <tr>
          <td colSpan={6} className="auto-style37">
            {" "}
            <img alt="coax" height="15" width="600" src="img/coax1.gif" />
          </td>
        </tr>
        <tr>
          <td colSpan={6} className="auto-style37">
            <span className="auto-style7">
              <strong>This Web Page Is For All Amateur Radio Operators</strong>
            </span>
          </td>
        </tr>
        <tr>
          <td colSpan={6} className="auto-style37">
            {" "}
            <img alt="coax" height="15" width="600" src="img/coax1.gif" />
          </td>
        </tr>
        <tr>
          <td colSpan={6} className="auto-style39">
            <strong>
              This Net Has Been In Existence In Excess Of 60 Years
            </strong>
          </td>
        </tr>
        <tr>
          <td colSpan={6} className="auto-style37">
            {" "}
            <img alt="coax" height="15" width="600" src="img/coax1.gif" />
          </td>
        </tr>
        <tr>
          <td colSpan={6} className="style3">
            <span className="auto-style3">
              &nbsp;
              <span className="auto-style8">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                This Net is part of the Radio Relay Intermational..and Handles
                Traffic with all States, Canada and all Other parts
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                of the World where Third
              </span>
            </span>{" "}
            <span className="auto-style7">
              Party Traffic is Allowed..This Net meets at Zero Hour Thirty
              Minutes on or near 3910 kHZ
            </span>
          </td>
        </tr>
        <tr>
          <td colSpan={6} className="auto-style37">
            {" "}
            <img alt="coax" height="15" width="600" src="img/coax1.gif" />
          </td>
        </tr>
        <tr>
          <td className="auto-style81">
            <strong>
              {" "}
              <Link
                target="_NEW"
                title="Leave an email for the Manager"
                to="contact"
                state={{for: "manager", header: "Montana Traffic Net Manager"}}
              >
                {" "}
                <span className="auto-style83">Net~Manager</span>
                <em>
                  <br />{" "}
                </em>
                <span className="auto-style82">N7CMJ~</span>
              </Link>
              <span className="auto-style6">Les</span>
            </strong>
          </td>
          <td colSpan={4} className="auto-style37">
            <span className="auto-style8">
              <strong>
                {" "}
                <span className="auto-style49">&nbsp;&nbsp;&nbsp; </span>
              </strong>{" "}
              <span className="auto-style49">
                <strong>&nbsp;</strong>
              </span>
            </span>
            <Link target="NEW" title="Shows how to use this site." to="about">
              <span className="auto-style59">
                <strong>Read First</strong>
              </span>
            </Link>{" "}
            <span className="auto-style6">
              <br /> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                title="To give us information about rollcall changes"
                to="input-roll-call"
              >
                {" "}
                <span className="auto-style60">
                  &nbsp;<strong>Input Rollcall Info</strong>
                </span>
              </Link>
            </span>
          </td>
          <td className="auto-style61">
            {" "}
            <strong>
              <Link
                target="_NEW"
                title="Contact Nick"
                to="contact"
                state={{for: "webmaster", header: "Montana Traffic Net Webmaster"}}
              >
                {" "}
                <span className="auto-style84">Web~Master</span>
                <br className="auto-style85" />{" "}
                <span className="auto-style86">NC7BC~Nick</span>
              </Link>
            </strong>
          </td>
        </tr>
        <tr>
          <td colSpan={6} style={{ height: 51 + "px" }} className="auto-style37">
            {" "}
            <span className="auto-style15">THIS IS YOUR NET!!!!!!!!</span>
            <span className="auto-style16">YOU MAKE THE DIFFERENCE !!!</span>
          </td>
        </tr>
        <tr>
          <td className="auto-style33">
            {" "}
            &nbsp;
            <br /> &nbsp;<b>&nbsp; </b>{" "}
            <a
              target="_NEW"
              title="Roll Call for the Net"
              href="RollCall/Members.pdf"
            >
              {" "}
              <span className="auto-style53">
                <strong>Roll Call&nbsp;</strong>
              </span>
            </a>
          </td>
          <td colSpan={4} rowSpan={6} className="auto-style33">
            {" "}
            <a
              id="ctl00_Main_HyperLink1"
              target="_blank"
              href={roleCallPath}
            >
              {" "}
              <span className="auto-style60">
                <strong>{roleCallDate.split(",")[0]} Roll Call Posted</strong>
              </span>
            </a>
            <br /> <br className="auto-style6" />{" "}
            <span className="auto-style32">
              <strong>Net Control Stations</strong>
            </span>
            <br className="auto-style3" />{" "}
            <span className="auto-style3">Sun-KF7OCI~Larry</span>
            <br className="auto-style3" />{" "}
            <span className="auto-style3">Mon-K7PKA~Paula</span>
            <br className="auto-style3" />{" "}
            <span className="auto-style3">Tue-KI7CSZ~Robert</span>
            <br className="auto-style3" />{" "}
            <span className="auto-style3">Wed-N7YL~Ann</span>
            <br className="auto-style3" />{" "}
            <span className="auto-style3">Thu-WA7LAD~Mac</span>
            <br className="auto-style3" />{" "}
            <span className="auto-style3">Fri-K7NJC~Dick</span>
            <br className="auto-style3" />{" "}
            <span className="auto-style3">Sat-KG7BFP~Deb</span>
            <br className="auto-style3" />{" "}
            <span className="auto-style32">
              <strong>Alternate Net Controls</strong>
            </span>
            <span className="auto-style3">
              <br /> N7QOS~David
              <br /> KF7SND~Heather
              <br /> KA7YYR~Herb
              <br /> <br /> <br />{" "}
              <span className="auto-style76">
                <strong>&nbsp;October Net Report</strong>
              </span>
              <br /> Checkins&nbsp;&nbsp; 1948&nbsp;&nbsp;
              Traffic&nbsp;&nbsp;&nbsp; 83
              <br /> Time&nbsp; 673&nbsp; minutes{" "}
            </span>
            <p className="auto-style3">
              {" "}
              <br />{" "}
            </p>
          </td>
          <td className="auto-style33">
            {" "}
            &nbsp;&nbsp;
            <br /> <span className="style7">&nbsp; </span>{" "}
            <a target="_NEW" title="Look Over" href="RADIOGRM.pdf">
              {" "}
              <span className="auto-style53">
                <strong>Message Form&nbsp;</strong>
              </span>
            </a>
          </td>
        </tr>
        <tr>
          <td className="style9">
            &nbsp;&nbsp;
            <br /> <span className="style7">&nbsp;</span>
            <a target="_NEW" title="Handling Traffic Info" href="fsd.htm">
              <span className="auto-style6">
                <strong>Handling Traffic</strong>
                <strong className="style12">&nbsp;</strong>{" "}
              </span>
            </a>{" "}
          </td>
          <td className="auto-style33">
            {" "}
            <span className="auto-style6">
              &nbsp;&nbsp;&nbsp;
              <br />{" "}
            </span>
            <b>&nbsp;</b>
            <a
              target="_NEW"
              title="Look at news items"
              href="bulletin/bulletin.htm"
            >
              <span className="auto-style53">
                <strong>Bulletin&nbsp;</strong>
              </span>
            </a>
          </td>
        </tr>
        <tr>
          <td className="auto-style33">
            {" "}
            &nbsp;&nbsp;
            <br /> &nbsp;
            <a
              target="_NEW"
              title="Locations where you can take test"
              href="test/Testing%20and%20Information.htm"
            >
              {" "}
              <span className="auto-style53">
                <strong>Test Links/Clubs&nbsp;</strong>
              </span>
            </a>
          </td>
          <td className="style9">
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
                <span className="auto-style6">Ham Fest Info</span>
              </strong>
            </a>
          </td>
        </tr>
        <tr>
          <td className="style9">
            {" "}
            &nbsp;&nbsp;
            <br /> <span className="style7">&nbsp;</span>
            <a target="_NEW" title="Check out the Preamble" href="Preamble.htm">
              <strong>
                <span className="auto-style6">Preamble</span>
              </strong>
            </a>
          </td>
          <td className="style9">
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
                <span className="auto-style6">&nbsp;Repeaters</span>
              </a>
            </strong>
          </td>
        </tr>
        <tr>
          <td className="style9">
            {" "}
            &nbsp;
            <br /> <span className="style7">&nbsp;</span>
            <a target="_NEW" title="Montana Section Net" href="Preamble4.htm">
              <strong>
                <span className="auto-style6">Montana Net</span>
              </strong>
            </a>
          </td>
          <td className="style10">
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
                <span className="auto-style6">FCC</span>
              </a>
            </strong>
          </td>
        </tr>
        <tr>
          <td className="auto-style33">
            {" "}
            &nbsp;&nbsp;&nbsp;
            <br />
            &nbsp;
            <a target="_NEW" title="ARRL Site" href="http://www.arrl.org/">
              <strong>
                <span className="auto-style53">ARRL</span>
                <span className="auto-style72">&nbsp;</span>
              </strong>
            </a>
          </td>
          <td className="style11">
            {" "}
            &nbsp;<span className="auto-style49">&nbsp;</span>&nbsp;
            <br />
            &nbsp;
            <a target="_NEW" title="Check out QRZ" href="http://qrz.com/">
              <span className="auto-style53">
                <strong>QRZ</strong>
              </span>
            </a>
          </td>
        </tr>
        <tr>
          <td colSpan={2} style={{ height: 51 + "px" }} className="auto-style33">
            {" "}
            <a target="_NEW" href="CM.htm">
              {" "}
              <img
                alt="Common Messages"
                height="34"
                width="200"
                className="auto-style62"
                src="img/commonmessage.gif"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>
          <td colSpan={2} style={{ height: 51 + "px" }} className="auto-style33">
            {" "}
            &nbsp;&nbsp;
            <a
              target="_NEW"
              title="Form to use to send weather reports to other Hams"
              href="WeatherReports.htm"
            >
              {" "}
              <span className="auto-style60">
                <strong>Weather Report Form</strong>
              </span>
            </a>
            &nbsp;&nbsp;&nbsp;
          </td>
          <td colSpan={2} style={{ height: 51 + "px" }} className="auto-style33">
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
                className="auto-style62"
                src="img/ICS.gif"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td colSpan={3} style={{ height: 51 + "px" }} className="auto-style33">
            {" "}
            <a target="_NEW" href="Nets.html">
              {" "}
              <span className="auto-style60">
                <strong>Information - IMN and DRN7 Nets</strong>
              </span>
            </a>
            <span className="auto-style49">&nbsp;</span>
          </td>
          <td colSpan={3} style={{ height: 51 + "px" }} className="auto-style33">
            {" "}
            <a
              target="_NEW"
              title="Mutual Aid and Common Freq Manual"
              href="http://pssb.mt.gov/mutual_aid_manual.mcpx"
            >
              <span className="auto-style60">
                <strong>Mutual Aid &amp; Common Freq Manual</strong>
              </span>
            </a>
          </td>
        </tr>
        {/* <tr>
          <td colSpan={3} style={{ height: 51 + "px" }} className="auto-style33">
            {" "}
            <strong>
              {" "}
              <a
                target="_NEW"
                title="Sign Guest Book"
                href="guest/contact/contactform.php"
              >
                {" "}
                <span className="auto-style53">Sign Guest Book</span>
              </a>
            </strong>
          </td>
          <td colSpan={3} style={{ height: 51 + "px" }} className="auto-style33">
            {" "}
            <strong>
              {" "}
              <a
                target="_NEW"
                title="Look over the Guest Book"
                href="guest/view.htm"
              >
                {" "}
                <span className="auto-style53">View Guest Book</span>
              </a>
            </strong>
          </td>
        </tr> */}
        <tr>
          <td colSpan={3} className="auto-style64">
            {" "}
            <strong>
              <a target="_NEW" title="Check your Weather" href="Weather.html">
                {" "}
                <span className="auto-style6">Check the Weather in Your Area</span>
              </a>
            </strong>
          </td>
          <td colSpan={3} style={{ height: 51 + "px" }} className="auto-style64">
            {" "}
            <strong>
              {" "}
              <a
                target="_NEW"
                title="How to mount your Weather Equipment"
                href="Gauge.html"
              >
                {" "}
                <span className="auto-style6">Mounting Your Weather Equipment</span>
              </a>
            </strong>
          </td>
        </tr>
        <tr>
          <td colSpan={3} style={{ height: 51 + "px" }} className="auto-style64">
            {" "}
            <span className="style7">Donate to MTN </span>
            <b>»»</b>
          </td>
          <td colSpan={3} className="style8">
            {" "}
            <span className="auto-style6">
              <span className="auto-style80">
                {" "}

                <Link
                  target="_NEW"
                  title="Leave an email for the Manager"
                  to="contact"
                  state={{for: "for-manager", header: "Montana Traffic Net Manager"}}
                >
                  <span className="auto-style74">Contact Net Manager</span>
                </Link>{" "}
              </span>
            </span>
          </td>
        </tr>
        <tr>
          <td rowSpan={4} className="auto-style33">
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
                className="auto-style62"
                src="img/VanityCallSign.gif"
              />
            </a>
          </td>
          <td colSpan={4} className="auto-style45">
            &nbsp; Phonetic Alphabet?
          </td>
          <td rowSpan={4} className="auto-style33">
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
                className="auto-style62"
                src="img/PatsyCline.gif"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td className="auto-style69">
            <strong>A</strong>lpha
          </td>
          <td className="auto-style69">
            <strong>K</strong>ilo
          </td>
          <td className="auto-style69">
            <strong>U</strong>niform
          </td>
          <td className="auto-style69">
            <strong>0 </strong>&nbsp;<strong>Z</strong>ero
          </td>
        </tr>
        <tr>
          <td className="auto-style69">
            <strong>B</strong>ravo
          </td>
          <td className="auto-style69">
            <strong>L</strong>ima
          </td>
          <td className="auto-style69">
            <strong>V</strong>ictor
          </td>
          <td className="auto-style69">
            <strong>1 </strong>&nbsp;Wun
          </td>
        </tr>
        <tr>
          <td className="auto-style69">
            <strong>C</strong>harlie
          </td>
          <td className="auto-style69">
            <strong>M</strong>ike
          </td>
          <td className="auto-style69">
            <strong>W</strong>hiskey
          </td>
          <td className="auto-style69">
            <strong>2 </strong>&nbsp;<strong>T</strong>oo
          </td>
        </tr>
        <tr>
          <td rowSpan={4} className="auto-style33">
            {" "}
            <a target="_NEW" href="shuttle.htm">
              {" "}
              <img
                alt="In Memory of the Space Shuttle"
                height="37"
                width="201"
                className="auto-style62"
                src="img/SpaceShuttle.gif"
              />
            </a>
          </td>
          <td className="auto-style69">
            <strong>D</strong>elta
          </td>
          <td className="auto-style69">
            <strong>N</strong>ovember
          </td>
          <td className="auto-style69">
            <strong>X</strong>-ray
          </td>
          <td className="auto-style69">
            <strong>3</strong> <strong>&nbsp;T</strong>ree
          </td>
          <td rowSpan={4} className="auto-style33">
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
                className="auto-style62"
                src="img/RF%20Exposure.gif"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td className="auto-style69">
            <strong>E</strong>cho
          </td>
          <td className="auto-style69">
            <strong>O</strong>scar
          </td>
          <td className="auto-style69">
            <strong>Y</strong>ankee
          </td>
          <td className="auto-style69">
            <strong>4&nbsp; F</strong>ower
          </td>
        </tr>
        <tr>
          <td className="auto-style69">
            <strong>F</strong>oxtrot
          </td>
          <td className="auto-style69">
            <strong>P</strong>apa
          </td>
          <td className="auto-style69">
            <strong>Z</strong>ulu
          </td>
          <td className="auto-style69">
            <strong>5</strong>&nbsp;
            <strong>&nbsp;F</strong>ife
          </td>
        </tr>
        <tr>
          <td className="auto-style69">
            <strong>G</strong>olf
          </td>
          <td className="auto-style69">
            <strong>Q</strong>uebec
          </td>
          <td className="auto-style69">&nbsp;</td>
          <td className="auto-style69">
            <strong>6</strong> <strong>&nbsp; S</strong>ix
          </td>
        </tr>
        <tr>
          <td rowSpan={3} className="auto-style33">
            {" "}
            <a target="_NEW" title="Look up Call Signs" href="Callsign.htm">
              {" "}
              <img
                alt="Look up Call Signs"
                height="37"
                width="171"
                className="auto-style62"
                src="img/CallSign.gif"
              />
            </a>
          </td>
          <td className="auto-style69">
            <strong>H</strong>otel
          </td>
          <td className="auto-style69">
            <strong>R</strong>omeo
          </td>
          <td className="auto-style69">.&nbsp; Decimal</td>
          <td className="auto-style69">
            <strong>7</strong> <strong>&nbsp;S</strong>
            <span className="auto-style66">even</span>
          </td>
          <td rowSpan={3} className="auto-style33">
            &nbsp;
            <a target="_NEW" href="phonetic.htm">
              {" "}
              <img
                alt="Print the Alphabet for your use"
                height="37"
                width="164"
                className="auto-style62"
                src="img/PhoneticAla.gif"
              />
            </a>
            <br />{" "}
            <span className="auto-style6">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Print from this file
            </span>
          </td>
        </tr>
        <tr>
          <td className="auto-style69">
            <strong>I</strong>ndia
          </td>
          <td className="auto-style69">
            <strong>S</strong>ierra
          </td>
          <td className="auto-style69">.&nbsp; Stop</td>
          <td className="auto-style69">
            <strong>8</strong> <strong>&nbsp;A</strong>
            <span className="auto-style66">it</span>
          </td>
        </tr>
        <tr>
          <td style={{ height: 48 + "px" }} className="auto-style69">
            <strong>J</strong>uliet
          </td>
          <td style={{ height: 48 + "px" }} className="auto-style69">
            <strong>T</strong>ango
          </td>
          <td style={{ height: 48 + "px" }} className="auto-style46"></td>
          <td style={{ height: 48 + "px" }} className="auto-style69">
            <strong>9</strong>&nbsp;
            <strong>N</strong>iner
          </td>
        </tr>
        {/* <tr>
          <td colSpan={6} style={{ height: 273 + "px" }} className="auto-style33">
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
          <td colSpan={6} style={{ height: 54 + "px" }} className="auto-style50">
            Thanks to all who help us make this a Great Net
          </td>
        </tr>
        <tr>
          <td colSpan={6} style={{ height: 109 + "px" }} className="style6">
            {" "}
            <a href="http://radio-relay.org/">
              <span className="auto-style6">Radio Relay International</span>
            </a>
          </td>
        </tr>
        <tr>
          <td style={{ height: 293 + "px" }} className="style2">
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
            <span className="auto-style66">
              <strong>
                {" "}
                <a
                  title="Check Us"
                  target="_NEW"
                  className="style4"
                  href="http://Radio-Relay.org/"
                >
                  Link to Site
                </a>
              </strong>
            </span>
          </td>
          <td colSpan={4} style={{ height: 253 + "px" }} className="auto-style33">
            <p>&nbsp;</p>
            <p>
              <img alt="WAEF" height="121" width="235" src="img/WAEFPic.jpg" />
            </p>{" "}
          </td>
          <td style={{ height: 253 + "px" }} className="auto-style33">
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
          <td colSpan={6} style={{ height: 44 + "px" }} className="auto-style33">
            {" "}
            <Link
              target="_NEW"
              title="Contact us with information"
              to="contact"
              state={{for: "info", header: "Montana Traffic Net Webmaster"}}
            >
              {" "}
              <span className="auto-style51">
                Email any Input -- This is to make Amateur Radio better for
                everybody
              </span>{" "}
            </Link>{" "}
          </td>
        </tr>
        <tr>
          <td colSpan={6} className="auto-style33">
            <span className="auto-style52">73 and hope your DXing is Good</span>{" "}
          </td>
        </tr>
        <tr>
          <td colSpan={6} style={{ height: 118 + "px" }} className="auto-style33">
            {" "}
            <iframe
              frameBorder="0"
              width="129"
              height="34"
              src="http://free.timeanddate.com/clock/i2e4o0rf/n448/ftb/tt0/tw1/tm1/td2/th2/ts1/ta1/tb4"
            ></iframe>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
          </td>
        </tr>
        <tr>
          <td colSpan={6} style={{ height: 109 + "px" }} className="auto-style33">
            <table id="table71" style={{width: 800 + "px" }} className="style5">
              <tbody>
                <tr>
                  <td style={{ width: 770 + "px" }} className="style10">
                    <div>
                      {" "}
                      <span className="auto-style53">
                        <strong>Welcome to our Net and You are Number</strong>
                      </span>
                      <br />
                      <div>
                        {" "}
                        <a href="http://www.hit-counts.com">
                          {" "}
                          <img
                            alt="free html visitor counters"
                            src="http://www.hit-counts.com/counter.php?t=0&amp;digits=6&amp;ic=42345&amp;cid=699768"
                          />
                        </a>{" "}
                        <br />
                        &nbsp;
                      </div>
                    </div>{" "}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: 770 + "px" }} className="style10">
                    {" "}
                    &nbsp;
                    <Link
                      target="_NEW"
                      title="Contact the Net"
                      to="contact"
                      state={{for: "the-net", header: "Montana Traffic Net Webmaster"}}
                    >
                      <strong>
                        <span className="auto-style80">&nbsp;</span>
                        <span className="auto-style53">EMAIL the Net</span>
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

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { roleCall } = data;

  return (
    <Layout backgroundColor={undefined}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        roleCallPath={roleCall.path}
        roleCallDate={roleCall.date}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
    roleCall {
      date
      id
      path
    }
  }
`;
