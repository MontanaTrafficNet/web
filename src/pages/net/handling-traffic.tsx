import React from "react";
import Layout from "../../components/Layout";
import styles from "./handling-traffic.module.scss";
import { Link } from "@reach/router";

const handlingTraffic: React.FC = () => {
  return (
    <Layout backgroundColor="#FFFFFF">
      <div>
        <h1 style={{ textAlign: "center", margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontSize: "24.0pt", color: "black" }}>
              FSD-218&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </b>
        </h1>
        <p
          style={{
            textAlign: "center",
            margin: "5.0pt 12.2pt",
            fontSize: "large"
          }}
        >
          <Link
            to="net/common-messages"
            title="See a list of common messages. "
          >
            <b>Link to Common Messages List.</b> <b>&nbsp; </b>
          </Link>
          &nbsp;
        </p>
        <p
          className={styles.style2}
          style={{ textAlign: "center", margin: "5.0pt 12.2pt" }}
        >
          Pick one of these sites
        </p>
        <p
          style={{
            textAlign: "center",
            margin: "5.0pt 12.2pt",
            fontFamily: "Arial"
          }}
        >
          <b>
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          </b>
        </p>
        <p
          style={{
            textAlign: "center",
            margin: "5.0pt 12.2pt",
            fontSize: "large"
          }}
        >
          <b>
            <a href="FSD%20218rtf.rtf" title="A RTF file for printing">
              If you want this page in a RTF file for printing go to this
              link&nbsp;{" "}
            </a>
          </b>
          &nbsp;&nbsp;
        </p>
        <br />
        <p style={{ textAlign: "center", margin: "5.0pt 12.2pt" }}>
          <img alt="Message form" height={417} src="msgfrm.jpg" width={640} />
        </p>
        <p style={{ textAlign: "center", margin: "5.0pt 12.2pt" }}>
          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        </p>
        <p style={{ textAlign: "center", fontSize: "large" }}>
          <b>
            <a
              href="RADIOGRM.pdf"
              title="To acquire the standard type form used for messages."
            >
              &nbsp;Standard Form- To print the standard form just hit print and
              print from the web site.
            </a>
          </b>
        </p>
        <p className={styles.style1}>
          <a href="RADIOGRAM.pdf" title="Keep a copy handy to aid you.">
            <strong>
              A Form with information on it for references. Maybe keep a copy
              for the information
            </strong>
          </a>
        </p>
        <p style={{ textAlign: "center", fontSize: "large", color: "#0000ff" }}>
          <b>
            <Link to="net/forms2" title="To get the ics 213 form.">
              ICS213 Form- To print the ICS213 form go to this page and print
              from the web site.{" "}
            </Link>
          </b>
        </p>
        <p style={{ textAlign: "center", margin: "5.0pt 12.2pt" }}>
          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        </p>
        <p
          className={styles.MsoNormal}
          style={{
            textAlign: "center",
            marginLeft: "12.2pt",
            marginRight: "12.2pt",
            marginTop: "0in",
            marginBottom: ".0001pt"
          }}
        >
          <span style={{ fontFamily: "Times New Roman" }}>&nbsp;</span>
        </p>
        <h3 style={{ margin: "5.0pt 12.2pt", background: "yellow" }}>
          <b>
            <span style={{ fontFamily: "Arial", color: "#00007F" }}>
              Every formal radiogram message originated and handled should
              contain the following component parts in the order given
            </span>
          </b>
        </h3>
        <h4 style={{ margin: "5.0pt 12.2pt", background: "yellow" }}>
          <b>
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: "Arial",
                color: "#00007F"
              }}
            >
              I. Preamble
            </span>
          </b>
        </h4>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>a.</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Number (begin with 1 each month or year){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>b.</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Precedence (R, W, P or EMERGENCY){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>c.</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Handling Instructions (optional, see text){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>d.</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Station of Origin (first amateur handler){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>e.</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Check (number of words/groups in text only){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>f.</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Place of Origin (not necessarily location of station of origin.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>g.</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Time Filed (optional with originating station){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>h.</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Date (must agree with date of time filed){" "}
          </span>
        </p>
        <h4 style={{ margin: "5.0pt 12.2pt", background: "yellow" }}>
          <b>
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: "Arial",
                color: "#00007F"
              }}
            >
              II. Address
            </span>
          </b>
        </h4>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <span style={{ fontFamily: "Times", color: "black" }}>
            As complete as possible, include zip code and telephone number.{" "}
          </span>
        </p>
        <h4 style={{ margin: "5.0pt 12.2pt", background: "yellow" }}>
          <b>
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: "Arial",
                color: "#00007F"
              }}
            >
              III. Text
            </span>
          </b>
        </h4>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Limit to 25 words or less, if possible.
          </span>
        </p>
        <h4 style={{ margin: "5.0pt 12.2pt", background: "yellow" }}>
          <b>
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: "Arial",
                color: "#00007F"
              }}
            >
              IV. Signature
            </span>
          </b>
        </h4>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>CW:</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            The prosign separates the parts of the address.{" "}
          </span>
          <span style={{ fontSize: "10.0pt", fontFamily: "Arial" }} />
          <span style={{ fontFamily: "Times", color: "black" }}>
            separates the adress from the text and the text from the signature.{" "}
          </span>
          <span style={{ fontSize: "10.0pt", fontFamily: "Arial" }} />
          <span style={{ fontFamily: "Times", color: "black" }}>
            marks end of message; this is followed by B if there is another
            message to follow, by N if this is the only or last message. It is
            customary to copy the preamble, parts of the address, text and
            signature on separate lines.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>RTTY:</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Same as CW procedure above, except (1) use extra space between parts
            of address, instead of{" "}
          </span>
          <span style={{ fontSize: "10.0pt", fontFamily: "Arial" }} />
          <span style={{ fontFamily: "Times", color: "black" }}>
            ; (2) omit cw procedure sign{" "}
          </span>
          <span style={{ fontSize: "10.0pt", fontFamily: "Arial" }} />
          <span style={{ fontFamily: "Times", color: "black" }}>
            to separate text from address and signature, using line spaces
            instead; (3) add a CFM line under the signature, consisting of all
            names, numerals and unusual works in the message in the order
            transmitted.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>
              Packet/AMTOR BBS:
            </span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Same format as shown in the cw message example above, except that
            the{" "}
          </span>
          <span style={{ fontSize: "10.0pt", fontFamily: "Arial" }} />
          <span style={{ fontFamily: "Times", color: "black" }}>and</span>
          <span style={{ fontSize: "10.0pt", fontFamily: "Arial" }} />
          <span style={{ fontFamily: "Times", color: "black" }}>
            prosigns may be omitted. Most amtor and packet BBS software in use
            today allows formal message traffic to be sent with the "ST"
            command. Always avoid the use of spectrum-wasting multiple line
            feeds and indentations.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>PHONE:</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Use <i>prowords</i> instead of prosigns, but it is not necessary to
            name each part of the message as you send it. For example, the above
            message would be sent on phone as follows: "Number one routine HX
            Golf W1AW eight Newington Connecticut one eight three zero zulu july
            one Donald Smith <i>Figures</i> one six four East Sixth Avenue North
            River City Missouri zero zero seven eight nine <i>Telephone</i>{" "}
            seven three three four nine six eight <i>Break</i> Happy birthday
            X-ray see you soon X-ray love
            <i>Break</i> Diana <i>End of Message Over</i>. "End of Message" is
            followed by "More" if there is another message to follow, "No More"
            if it is the only or last message. Speak clearly using VOX (or pause
            frequently on push-to-talk) so that the receiving station can get
            fills. Spell phonetically all difficult or unusual words--do{" "}
            <i>not</i> spell out common words. Do not use cw abbreviations or
            Q-signals in phone traffic handling.{" "}
          </span>
        </p>
        <h3 style={{ margin: "5.0pt 12.2pt", background: "yellow" }}>
          <b>
            <span style={{ fontFamily: "Arial", color: "#00007F" }}>
              Precedences
            </span>
          </b>
        </h3>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <span style={{ fontFamily: "Times", color: "black" }}>
            The precedence will follow the message number. For example, on cw
            207R or 207 EMERGENCY. On phone, "Two Zero Seven, Routine (or
            Emergency)."{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>
              Emergency
            </span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Any message having life and death urgency to any person or group
            of persons, which is transmitted by Amateur Radio in the absence of
            regular commercial facilities. This includes official messages of
            welfare agencies during emergencies requesting supplies, materials
            or instructions vital to relief of stricken populance in emergency
            areas. During normal times, it will be <i>very rare</i>. On cw, RTTY
            and other digital modes this designation will always be spelled out.
            When in doubt, <i>do not</i>
            use it.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>
              Priority
            </span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Important messags having a specific time limit. Official messages
            not covered in the Emergency category. Press dispatches and other
            emergency-related traffic not of the utmost urgency. Notifications
            of death or injury in a disaster area, personal or official. Use the
            abbreviation P on cw.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>Welfare</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --A message that is either a) an inquiry as to the health and
            welfare of an individual in the disaster area b) an advisory or
            reply from the disaster area that indicates all is well should carry
            this precedence, which is abbreviated W on cw. These messages are
            handled <i>after</i> Emergency and Priority traffic but before
            Routine.
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>Routine</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Most traffic normal times will bear this designation. In disaster
            situations, traffic labeled Routine (R on cw) should be handled{" "}
            <i>last</i>, or not at all when circuits are busy with Emergency,
            Priority or Welfare traffic.{" "}
          </span>
        </p>
        <h3 style={{ margin: "5.0pt 12.2pt", background: "yellow" }}>
          <b>
            <span style={{ fontFamily: "Arial", color: "#00007F" }}>
              Handling Instructions (Optional)
            </span>
          </b>
        </h3>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>HXA</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --(Followed by number) Collect landline delivery authorized by
            addressee within....miles. (If no number, authorization is
            unlimited.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>HXB</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --(Followed by number) Cancel message if not delivered
            within....hours of filing time; service originating station.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>HXC</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Report date and time of delivery (TOD) to originating station.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>HXD</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Report to originating station the identity of station from which
            received, plus date and time. Report identity of station to which
            relayed, plus date and time, or if delivered report date, time and
            method of delivery.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>HXE</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Delivering station get reply from addresses, originate message
            back.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>HXF</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --(Followed by number) Hold delivery until....(date).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>HXG</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Delivery by mail or landline toll call not required. If toll or
            other expense involved, cancel message and service originating
            station.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>HXV</b>--Verify that message is correct by having it repeated to
          sending station. This is not official but put here in case one wonders
          what it is.
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <span style={{ fontFamily: "Times", color: "black" }}>
            For further information on traffic handling, consult the Public
            Service Communications Manual or the ARRL Operating Manual, both
            published by ARRL.{" "}
          </span>
        </p>
        <h3 style={{ margin: "5.0pt 12.2pt", background: "yellow" }}>
          <b>
            <span style={{ fontFamily: "Arial", color: "#00007F" }}>
              ARRL QN Signals for CW Net Use
            </span>
          </b>
        </h3>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNA</span>
          </b>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Answer in prearranged order.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNB</span>
          </b>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Act as relay Between ______ and ______.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNC</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --All net stations Copy. I have a message for all net stations.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QND</span>
          </b>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Net is Directed (controlled by net control station).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNE</span>
          </b>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Entire net stand by.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNF</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Net is Free (not controlled).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNG</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Take over as net control station.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNH</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Your net frequency is High.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNI</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Net stations report In.
          </span>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            . I am reporting into the net. (Follow with a list or traffic or
            QRU).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNJ</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Can you copy me? Can you copy ______?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNK</span>
          </b>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Transmit message for ______ to ______.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNL</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Your net frequency is Low.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNM</span>
          </b>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --You are QRMing the net. Stand by.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNN</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Net control station is ______. What station has net control?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNO</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Station is leaving the net.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNP</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Unable to copy you. Unable to copy ______.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNQ</span>
          </b>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Move frequency to ______ and wait for ______ to finish handling
            traffic. Then send him traffic for ______.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNR</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Answer ______ and Receive traffic.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNS</span>
          </b>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Following Stations are in the net.{" "}
          </span>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            (Follow with list.) Request list of stations in the net.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNT</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --I request permission to leave the net for ______ minutes.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNU</span>
          </b>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --The net has traffic for you. Stand by.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNV</span>
          </b>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Establish contact with ______ on this frequency. If successful,
            move to ______ and send him traffic for ______.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNW</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --How do I route messages for ______ ?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNX</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --You are excused from the net.
          </span>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            Request to be excused from the net.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNY</span>
          </b>
          <u>
            <span style={{ fontFamily: "Times", color: "blue" }}>*</span>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shift to another frequency (or to ______ kHz) to clear traffic
            with ______.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QNZ</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Zero beat your signal with mine.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <span style={{ fontFamily: "Times", color: "black" }}>
            * For use only by the Net Control Station.{" "}
          </span>
        </p>
        <h4 style={{ margin: "5.0pt 12.2pt", background: "yellow" }}>
          <b>
            <span
              style={{
                fontSize: "10.0pt",
                fontFamily: "Arial",
                color: "#00007F"
              }}
            >
              Notes on Use of QN Signals
            </span>
          </b>
        </h4>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <span style={{ fontFamily: "Times", color: "black" }}>
            The QN signals listed above are special ARRL signals for use in
            amateur cw nets only. They are not for use in casual amateur
            conversation. Other meanings that may be used in other services do
            not apply. Do not use QN signals on phone nets. Say it with words.
            QN signals need not be followed by a question mark, even though the
            meaning may be interrogatory.{" "}
          </span>
        </p>
        <h3 style={{ margin: "5.0pt 12.2pt", background: "yellow" }}>
          <b>
            <span style={{ fontFamily: "Arial", color: "#00007F" }}>
              International Q Signals
            </span>
          </b>
        </h3>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <span style={{ fontFamily: "Times", color: "black" }}>
            A Q signal followed by a ? asks a question. A Q signal without the ?
            answers the question affirmatively, unless otherwise indicated.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRA</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --What is the name of your station?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRG</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --What's my exact frequency?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRH</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Does my frequency vary?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRI</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --How is my tone? (1-3){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRK</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --What is my signal intelligibility? (1-5){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRL</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Are you busy?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRM</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Is my transmission being interfered with?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRN</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Are you troubled by static?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRO</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I increase transmitter power?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRP</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I decrease transmitter power?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRQ</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I send faster?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRS</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I send slower?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRT</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I stop sending?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRU</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Have you anything for me? (Answer in negative){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRV</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Are you ready?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRW</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I tell ______ you're calling him?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRX</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --When will you call again?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QRZ</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Who is calling me?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSA</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --What is my signal strength? (1-5){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSB</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Are my signals fading?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSD</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Is my keying defective?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSG</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I send ______ messages at a time?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSK</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Can you work breakin?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSL</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Can you acknowledge receipt?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSM</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I repeat the last message sent?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSO</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Can you communicate with ______ direct?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSP</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Will you relay to ______?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSV</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I send a series of V's?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSW</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Will you transmit on ______?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSX</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Will you listen for ______ on ______?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSY</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I change frequency?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QSZ</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I send each word/group more than once? (Answer, send twice
            or ______){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QTA</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I cancel number ______?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QTB</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Do you agree with my word count? (Answer negative){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QTC</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --How many messages have you to send?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QTH</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --What is your location?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QTR</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --What is your time?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QTV</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Shall I stand guard for you ______?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QTX</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Will you keep your station open for further communication with me?{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>QUA</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Have you news of ______?{" "}
          </span>
        </p>
        <h3 style={{ margin: "5.0pt 12.2pt", background: "yellow" }}>
          <b>
            <span style={{ fontFamily: "Arial", color: "#00007F" }}>
              Abbreviations, Prosigns, Prowords
            </span>
          </b>
        </h3>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <i>
              <span style={{ fontFamily: "Times", color: "black" }}>
                CW--Phone (meaning or purpose)
              </span>
            </i>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}></span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <span style={{ fontFamily: "Times", color: "black" }}>
            <u>
              <b>AA</b>
            </u>
            --(Separation between parts of address or signature.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>AA</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --All after (use to get fills).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>AB</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --An before (used to get fills).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>ADEE</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Addressee (name of person to whom message addressed).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <u>
            <b>ADR</b>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Address (second part of message).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>AR</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --End of message (end of record copy).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>ARL</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --(Used with "check," indicates use of ARRL numbered message in
            text).&nbsp; Listed below
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <span style={{ fontFamily: "Times", color: "black" }}>
            <u>
              <b>AS</b>
            </u>
            --Stand by; wait.
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>B</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --More (another message to follow).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>BK</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Break; break me; break-in (interrupt transmission on cw. Quick
            check on phone).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <span style={{ fontFamily: "Times", color: "black" }}>
            <u>
              <b>BT</b>
            </u>
            --Separation (break) between address and text; between text and
            signature.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>C</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Correct; yes.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>CFM</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Confirm. (Check me on this).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>CK</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>--Check.</span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>DE</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --From; this is (preceding identification).{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <u>
            <b>HH</b>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --(Error in sending. Transmission continues with last word correctly
            sent.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>HX</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --(Handling instructions. Optional part of preamble.) Initial(s).
            Single letter(s) to follow.
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <u>
            <b>IMI</b>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Repeat; I say again. (Difficult or unusual words or groups.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>K</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Go ahead; over; reply expected. (Invitation to transmit .){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>KN</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Specific station answer only.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>N</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Negative, incorrect; no more. (No more messages to follow.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>NR</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Number. (Message follows.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>PBL</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Preamble (first part of message){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <u>
              <span style={{ fontFamily: "Times", color: "blue" }}>N/A</span>
            </u>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Read back. (Repeat as received.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>R</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Roger; point. (Received; decimal point.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>SIG</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Signed; signature (last part of message.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <u>
            <b>SK</b>
          </u>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Out; clear (end of communications, no reply expected.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>TU</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Thank you.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>WA</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Word after (used to get fills.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <span style={{ fontFamily: "Times", color: "black" }}>WB</span>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Word before (used to get fills.){" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <u>
              <span style={{ fontFamily: "Times", color: "blue" }}>N/A</span>
            </u>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Speak slower.{" "}
          </span>
        </p>
        <p className={styles.MsoNormal} style={{ margin: "5.0pt 12.2pt" }}>
          <b>
            <u>
              <span style={{ fontFamily: "Times", color: "blue" }}>N/A</span>
            </u>
          </b>
          <span style={{ fontFamily: "Times", color: "black" }}>
            --Speak faster.{" "}
          </span>
        </p>
        <p
          className={styles.MsoNormal}
          style={{
            marginLeft: "12.2pt",
            marginRight: "12.2pt",
            marginTop: "0in",
            marginBottom: ".0001pt"
          }}
        >
          <span style={{ fontFamily: "Times New Roman" }}>&nbsp;</span>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontFamily: "Times New Roman" }}>N/A</span>
          </b>
          <span style={{ fontFamily: "Times New Roman" }}>
            --There is no CW equivalent.
          </span>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "24.0pt", fontFamily: "Times New Roman" }}>
              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            </span>
          </b>
        </p>
        <div
          style={{
            borderBottom: "3.0pt solid windowtext",
            paddingLeft: "0in",
            paddingRight: "0in",
            paddingTop: "0in",
            paddingBottom: "1.0pt",
            borderLeftStyle: "none",
            borderLeftColor: "inherit",
            borderLeftWidth: "medium",
            borderRightStyle: "none",
            borderRightColor: "inherit",
            borderRightWidth: "medium",
            borderTopStyle: "none",
            borderTopColor: "inherit",
            borderTopWidth: "medium"
          }}
        >
          <p
            className={styles.MsoNormal}
            style={{ border: "medium none", padding: "0in" }}
          >
            <b>
              <span style={{ fontSize: "18.0pt", color: "black" }}>
                Thanks to KY1F for this article. Thanks Daniel.
              </span>
            </b>
          </p>
        </div>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "24.0pt", color: "black" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "24.0pt", color: "black" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt", color: "black" }}>&nbsp;</span>
          </b>
        </p>
        <h6>
          <span style={{ fontSize: "10.0pt" }}>ARRL NUMBERED RADIOGRAMS</span>
        </h6>
        <p className={styles.MsoNormal}>
          <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              Numbered messages have been established for some of the more
              common texts sent during emergencies and holiday seasons. When
              this common text can be used, an ARL NUMBER is substituted for the
              text and sent. The delivering station reads the actual text to the
              address, not the ARL NUMBER.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              The letters ARL are inserted in the preamble in the check and in
              the text before spelled out numbers, which represent texts from
              this list. Note that some ARL texts include and in the text before
              spelled out numbers, which represent texts from this list. Note
              that some ARL texts include insertion of numerals or words.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              Group One -- For Possible "Relief Emergency " Use
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              ONE-- Everyone safe here. Please don't worry.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              TWO-- Coming home as soon as possible.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              THREE-- Am in _______ hospital. Receiving excellent care and
              recovering fine.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FOUR --Only slight property damage here. Do not be concerned about
              disaster reports.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FIVE-- Am moving to new location. Send no further mail or
              communication. Will inform you of new address when relocated.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              SIX-- Will contact you as soon as possible.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              SEVEN-- Please reply by Amateur Radio through the amateur
              delivering this message. This is a free public service
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              EIGHT-- Need additional ______ mobile or portable equipment for
              immediate emergency use.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              NINE-- Additional ______ radio operators needed to assist with
              emergency at this location.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              TEN-- Please contact _______. Advise to standby and provide
              further emergency information, instructions or assistance
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              ELEVEN-- Establish Amateur Radio emergency communications with
              ______ on _______ MHz.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              TWELVE-- Anxious to hear from you. No word in some time. Please
              contact me as soon as possible.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              THIRTEEN-- Medical emergency situation exits here.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FOURTEEN-- Situation here becoming critical. Losses and damage
              from _______ increasing.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FIFTEEN-- Please advise your condition and what help is needed.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              SIXTEEN-- Property damage very severe in this area.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              SEVENTEEN-- REACT communications services also available.
              Establish REACT communication with _______on channel _______.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              EIGHTEEN-- Please contact me as soon as possible at _______.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              NINETEEN-- Request health and welfare report on _______. (State
              name, address and telephone number.)
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              TWENTY-- Temporarily stranded. Will need some assistance. Please
              contact me at _______.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              TWENTY ONE-- Search and Rescue assistance is needed by local
              authorities here. Advise availability.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              TWENTY TWO-- Need accurate information on the extent and type of
              conditions now existing at your location. Please furnish this
              information and reply without
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>delay</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              TWENTY THREE-- Report at once the accessibility and best way to
              reach your location.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              TWENTY FOUR --Evacuation of residents from this area urgently
              needed. Advise plans for help.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              TWENTY FIVE-- Furnish as soon as possible the weather conditions
              at your location.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              TWENTY SIX --Help and care for evacuation of sick and injured from
              this location needed at once.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              Emergency/priority messages originating from official sources must
              carry the signature of the originating official.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              Group Two -- Routine messages
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FORTY SIX-- Greetings on your birthday and best wishes for many
              more to come.&nbsp;&nbsp;{" "}
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>&nbsp;</p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FORTY SEVEN-- Reference your message number ______to ______
              delivered on ________ ________ at ______ UTC.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FIFTY-- Greetings by Amateur Radio.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FIFTY ONE-- Greetings by Amateur Radio. This message is sent as a
              free public service by ham radio operators at _______. Am having a
              wonderful time.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FIFTY TWO-- Really enjoyed being with you. Looking forward to
              getting together again.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FIFTY THREE-- Received your _______. It's appreciated; many
              thanks.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FIFTY FOUR-- Many thanks for your good wishes.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FIFTY FIVE-- Good news is always welcome. Very delighted to hear
              about yours.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FIFTY SIX-- Congratulations on your _______, a most worthy and
              deserved achievement.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FIFTY SEVEN-- Wish we could be together
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FIFTY EIGHT-- Have a wonderful time. Let us know when you return.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              FIFTY NINE-- Congratulations on the new arrival. Hope mother and
              child are well.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              *SIXTY-- Wishing you the best of everything on _______.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              SIXTY ONE-- Wishing you a very Merry Christmas and a Happy New
              Year.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              *SIXTY TWO-- Greetings and best wishes to you for a pleasant
              _______ holiday season.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              SIXTY THREE-- Victory or defeat, our best wishes are with you.
              Hope you win.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              SIXTY FOUR-- Arrived safely at _______.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              SIXTY FIVE-- Arriving _______ on _______. Please arrange to meet
              me there.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              SIXTY SIX-- DX QSLs are on hand for you at the _______ QSL Bureau.
              Send _______ self addressed envelopes.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              SIXTY SEVEN --Your message number _______ undeliverable because of
              _______. Please advise.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              SIXTY EIGHT-- Sorry to hear you are ill. Best wishes for a speedy
              recovery.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              SIXTY NINE-- Welcome to the _______. We are glad to have you with
              us and hope you will enjoy the fun and fellowship of the
              organization.
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>&nbsp;</span>
          </b>
        </p>
        <p className={styles.MsoNormal}>
          <b>
            <span style={{ fontSize: "10.0pt" }}>
              ARL NUMBERS SHOULD BE SPELLED OUT AT ALL TIMES
            </span>
          </b>
        </p>
        <p className={styles.MsoNormal}>&nbsp;</p>
        <p className={styles.MsoNormal}>*Can be used for all holidays.</p>
        <p className={styles.MsoNormal}>&nbsp;</p>
        <p className={styles.MsoNormal}>
          <i>
            <span style={{ fontSize: "9.0pt" }}>
              From: FORM FSD-3 (Revised 2/94) ARRL updated: 10-06-94
            </span>
          </i>
        </p>
        <p className={styles.MsoNormal}>
          <span style={{ fontFamily: "Times New Roman" }}>&nbsp;</span>
        </p>

        <table className={styles.phoneticTable} cellPadding={4} cellSpacing={1}>
          <tbody>
            <tr>
              <td colSpan={4} className={styles.header}>
                <b>Phonetic Alphabet </b>
              </td>
            </tr>
            <tr>
              <td className={styles.entry} style={{ width: "21%" }}>
                <b>A</b>
                lpha{" "}
              </td>
              <td className={styles.entry} style={{ width: "27%" }}>
                <b>K</b>
                ilo{" "}
              </td>
              <td className={styles.entry} style={{ width: "28%" }}>
                <b>U</b>
                niform{" "}
              </td>
              <td className={styles.entry} style={{ width: "25%" }}>
                <b>0</b>
                &nbsp;&nbsp; Zero{" "}
              </td>
            </tr>
            <tr>
              <td className={styles.entry} style={{ width: "21%" }}>
                <b>B</b>
                ravo{" "}
              </td>
              <td className={styles.entry} style={{ width: "27%" }}>
                <b>L</b>
                ima{" "}
              </td>
              <td className={styles.entry} style={{ width: "28%" }}>
                <b>V</b>
                ictor{" "}
              </td>
              <td className={styles.entry} style={{ width: "25%" }}>
                <b>1</b>
                &nbsp;&nbsp; Wun{" "}
              </td>
            </tr>
            <tr>
              <td className={styles.entry} style={{ width: "21%" }}>
                <b>C</b>
                harlie{" "}
              </td>
              <td className={styles.entry} style={{ width: "27%" }}>
                <b>M</b>
                ike{" "}
              </td>
              <td className={styles.entry} style={{ width: "28%" }}>
                <b>W</b>
                hiskey{" "}
              </td>
              <td className={styles.entry} style={{ width: "25%" }}>
                <b>2</b>
                &nbsp;&nbsp; Too{" "}
              </td>
            </tr>
            <tr>
              <td className={styles.entry} style={{ width: "21%" }}>
                <b>D</b>
                elta{" "}
              </td>
              <td className={styles.entry} style={{ width: "27%" }}>
                <b>N</b>
                ovember{" "}
              </td>
              <td className={styles.entry} style={{ width: "28%" }}>
                <b>X</b>
                ray{" "}
              </td>
              <td className={styles.entry} style={{ width: "25%" }}>
                <b>3</b>
                &nbsp;&nbsp; Tree{" "}
              </td>
            </tr>
            <tr>
              <td className={styles.entry} style={{ width: "21%" }}>
                <b>E</b>
                cho{" "}
              </td>
              <td className={styles.entry} style={{ width: "27%" }}>
                <b>O</b>
                scar{" "}
              </td>
              <td className={styles.entry} style={{ width: "28%" }}>
                <b>Y</b>
                ankee{" "}
              </td>
              <td className={styles.entry} style={{ width: "25%" }}>
                <b>4</b>
                &nbsp;&nbsp; Fower{" "}
              </td>
            </tr>
            <tr>
              <td className={styles.entry} style={{ width: "21%" }}>
                <b>F</b>
                oxtrot{" "}
              </td>
              <td className={styles.entry} style={{ width: "27%" }}>
                <b>P</b>
                apa{" "}
              </td>
              <td className={styles.entry} style={{ width: "28%" }}>
                <b>Z</b>
                ulu{" "}
              </td>
              <td className={styles.entry} style={{ width: "25%" }}>
                <b>5</b>
                &nbsp;&nbsp; Fife{" "}
              </td>
            </tr>
            <tr>
              <td className={styles.entry} style={{ width: "21%" }}>
                <b>G</b>
                olf{" "}
              </td>
              <td className={styles.entry} style={{ width: "27%" }}>
                <b>Q</b>
                uebec{" "}
              </td>
              <td className={styles.entry} style={{ width: "28%" }}>
                &nbsp;{" "}
              </td>
              <td className={styles.entry} style={{ width: "25%" }}>
                <b>6</b>
                &nbsp;&nbsp; Six{" "}
              </td>
            </tr>
            <tr>
              <td className={styles.entry} style={{ width: "21%" }}>
                <b>H</b>
                otel{" "}
              </td>
              <td className={styles.entry} style={{ width: "27%" }}>
                <b>R</b>
                omeo{" "}
              </td>
              <td className={styles.entry} style={{ width: "28%" }}>
                <b>.</b>
                &nbsp;&nbsp; Decimal{" "}
              </td>
              <td className={styles.entry} style={{ width: "25%" }}>
                <b>7</b>
                &nbsp;&nbsp; Seven{" "}
              </td>
            </tr>
            <tr>
              <td className={styles.entry} style={{ width: "21%" }}>
                <b>I</b>
                ndia{" "}
              </td>
              <td className={styles.entry} style={{ width: "27%" }}>
                <b>S</b>
                ierra{" "}
              </td>
              <td className={styles.entry} style={{ width: "28%" }}>
                <b>.</b>
                &nbsp;&nbsp; Stop{" "}
              </td>
              <td className={styles.entry} style={{ width: "25%" }}>
                <b>8</b>
                &nbsp;&nbsp; Ait{" "}
              </td>
            </tr>
            <tr>
              <td className={styles.entry} style={{ width: "21%" }}>
                <b>J</b>
                uliet{" "}
              </td>
              <td className={styles.entry} style={{ width: "27%" }}>
                <b>T</b>
                ango{" "}
              </td>
              <td className={styles.entry} style={{ width: "28%" }}>
                &nbsp;{" "}
              </td>
              <td className={styles.entry} style={{ width: "25%" }}>
                <b>9</b>
                &nbsp;&nbsp; Niner{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <hr className={styles.hr} />
      </div>
    </Layout>
  );
};

export default handlingTraffic;
