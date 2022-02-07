<script>
  import PhoneticAlphabet from "$lib/components/PhoneticAlphabet.svelte";
</script>

<div class="handling-traffic">
  <h1>FSD-218</h1>
  <p class="medium center no-print">
    <a href="/net/common-messages" title="See a list of common messages. ">
      <b>Link to Common Messages List.</b>
    </a>
  </p>
  <p class="small link center no-print">Pick one of these sites</p>
  <p class="separator center no-print">
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  </p>
  <!-- <p>
    <b>
      <a href="/net/FSD-218.rtf" title="A RTF file for printing">
        If you want this page in a RTF file for printing go to this link
      </a>
    </b>
  </p>-->
  <br />
  <p class="center no-print">
    <img class="message-form-img" alt="Message form" src="/net/msgfrm.jpg" />
  </p>
  <div class="form-links no-print">
    <p class="small separator">@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</p>
    <a
      target="_NEW"
      href="/net/RADIOGRM.pdf"
      title="To acquire the standard type form used for messages."
    >
      Standard Form - To print the standard form just hit print and print from the web site.
    </a>
    <a
      target="_NEW"
      href="/net/RADIOGRAM.pdf"
      title="Keep a copy handy to aid you."
      style="font-size: 16px;"
    >
      A Form with information on it for references. Maybe keep a copy for the information
    </a>
    <a href="/forms/ics213" title="To get the ics 213 form.">
      ICS213 Form - To print the ICS213 form go to this page and print from the web site.
    </a>
    <p class="small separator">@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</p>
  </div>
  <h3 class="highlight">
    Every formal radiogram message originated and handled should contain the following component
    parts in the order given
  </h3>
  <h4 class="highlight">I. Preamble</h4>
  <p>
    <span class="bullet">a.</span>
    <span>Number (begin with 1 each month or year)</span>
  </p>
  <p>
    <span class="bullet">b.</span>
    <span>Precedence (R, W, P or EMERGENCY)</span>
  </p>
  <p>
    <span class="bullet">c.</span>
    <span>Handling Instructions (optional, see text)</span>
  </p>
  <p>
    <span class="bullet">d.</span>
    <span>Station of Origin (first amateur handler)</span>
  </p>
  <p>
    <span class="bullet">e.</span>
    <span>Check (number of words/groups in text only)</span>
  </p>
  <p>
    <span class="bullet">f.</span>
    <span>Place of Origin (not necessarily location of station of origin.)</span>
  </p>
  <p>
    <span class="bullet">g.</span>
    <span>Time Filed (optional with originating station)</span>
  </p>
  <p>
    <span class="bullet">h.</span>
    <span>Date (must agree with date of time filed)</span>
  </p>
  <h4 class="highlight">II. Address</h4>
  <p>As complete as possible, include zip code and telephone number.</p>
  <h4 class="highlight">III. Text</h4>
  <p>Limit to 25 words or less, if possible.</p>
  <h4 class="highlight">IV. Signature</h4>
  <p>
    <b><span>CW:</span></b>
    The prosign separates the parts of the address. <span class="prosign">BT</span> separates the
    address from the text and the text from the signature. <span class="prosign">AR</span>
    marks end of message; this is followed by B if there is another message to follow, by N if this is
    the only or last message. It is customary to copy the preamble, parts of the address, text and signature
    on separate lines.
  </p>
  <p>
    <b><span>RTTY:</span></b>
    Same as CW procedure above, except (1) use extra space between parts of address, instead of
    <span class="prosign">AA</span>; (2) omit cw procedure sign <span class="prosign">BT</span>
    to separate text from address and signature, using line spaces instead; (3) add a CFM line under
    the signature, consisting of all names, numerals and unusual works in the message in the order transmitted.
  </p>
  <p>
    <b><span> Packet/AMTOR BBS: </span></b>
    Same format as shown in the cw message example above, except that the
    <span class="prosign">AA</span> and <span class="prosign">AR</span>
    prosigns may be omitted. Most amtor and packet BBS software in use today allows formal message traffic
    to be sent with the "ST" command. Always avoid the use of spectrum-wasting multiple line feeds and
    indentations.
  </p>
  <p>
    <b>
      <span>PHONE:</span>
    </b>
    <span>
      Use <i>prowords</i> instead of prosigns, but it is not necessary to name each part of the
      message as you send it. For example, the above message would be sent on phone as follows:
      "Number one routine HX Golf W1AW eight Newington Connecticut one eight three zero zulu july
      one Donald Smith <i>Figures</i> one six four East Sixth Avenue North River City Missouri zero
      zero seven eight nine <i>Telephone</i>
      seven three three four nine six eight <i>Break</i> Happy birthday X-ray see you soon X-ray
      love
      <i>Break</i> Diana <i>End of Message Over</i>. "End of Message" is followed by "More" if there
      is another message to follow, "No More" if it is the only or last message. Speak clearly using
      VOX (or pause frequently on push-to-talk) so that the receiving station can get fills. Spell
      phonetically all difficult or unusual words--do
      <i>not</i> spell out common words. Do not use cw abbreviations or Q-signals in phone traffic handling.
    </span>
  </p>
  <h3 class="highlight">Precedences</h3>
  <p>
    The precedence will follow the message number. For example, on cw 207R or 207 EMERGENCY. On
    phone, "Two Zero Seven, Routine (or Emergency)."
  </p>
  <p>
    <b>
      <span> Emergency </span>
    </b>
    <span>
      &ndash; Any message having life and death urgency to any person or group of persons, which is
      transmitted by Amateur Radio in the absence of regular commercial facilities. This includes
      official messages of welfare agencies during emergencies requesting supplies, materials or
      instructions vital to relief of stricken populace in emergency areas. During normal times, it
      will be <i>very rare</i>. On cw, RTTY and other digital modes this designation will always be
      spelled out. When in doubt, <i>do not</i>
      use it.
    </span>
  </p>
  <p>
    <b>
      <span> Priority </span>
    </b>
    <span>
      &ndash; Important messages having a specific time limit. Official messages not covered in the
      Emergency category. Press dispatches and other emergency-related traffic not of the utmost
      urgency. Notifications of death or injury in a disaster area, personal or official. Use the
      abbreviation P on cw.
    </span>
  </p>
  <p>
    <b>
      <span>Welfare</span>
    </b>
    <span>
      &ndash; A message that is either a) an inquiry as to the health and welfare of an individual
      in the disaster area b) an advisory or reply from the disaster area that indicates all is well
      should carry this precedence, which is abbreviated W on cw. These messages are handled <i
        >after</i
      > Emergency and Priority traffic but before Routine.
    </span>
  </p>
  <p>
    <b>
      <span>Routine</span>
    </b>
    <span>
      &ndash; Most traffic normal times will bear this designation. In disaster situations, traffic
      labeled Routine (R on cw) should be handled
      <i>last</i>, or not at all when circuits are busy with Emergency, Priority or Welfare traffic.
    </span>
  </p>
  <h3 class="highlight">Handling Instructions (Optional)</h3>
  <p>
    <b>
      <span>HXA</span>
    </b>
    <span>
      &ndash; (Followed by number) Collect landline delivery authorized by addressee
      within....miles. (If no number, authorization is unlimited.)
    </span>
  </p>
  <p>
    <b>
      <span>HXB</span>
    </b>
    <span>
      &ndash; (Followed by number) Cancel message if not delivered within....hours of filing time;
      service originating station.
    </span>
  </p>
  <p>
    <b>
      <span>HXC</span>
    </b>
    <span> &ndash; Report date and time of delivery (TOD) to originating station. </span>
  </p>
  <p>
    <b>
      <span>HXD</span>
    </b>
    <span>
      &ndash; Report to originating station the identity of station from which received, plus date
      and time. Report identity of station to which relayed, plus date and time, or if delivered
      report date, time and method of delivery.
    </span>
  </p>
  <p>
    <b>
      <span>HXE</span>
    </b>
    <span> &ndash; Delivering station get reply from addresses, originate message back. </span>
  </p>
  <p>
    <b>
      <span>HXF</span>
    </b>
    <span> &ndash; (Followed by number) Hold delivery until....(date). </span>
  </p>
  <p>
    <b>
      <span>HXG</span>
    </b>
    <span>
      &ndash; Delivery by mail or landline toll call not required. If toll or other expense
      involved, cancel message and service originating station.
    </span>
  </p>
  <p>
    <b>HXV</b>--Verify that message is correct by having it repeated to sending station. This is not
    official but put here in case one wonders what it is.
  </p>
  <p>
    <span>
      For further information on traffic handling, consult the Public Service Communications Manual
      or the ARRL Operating Manual, both published by ARRL.
    </span>
  </p>
  <h3 class="highlight">ARRL QN Signals for CW Net Use</h3>
  <p>
    <span class="qn">QNA<span class="ncs-only">*</span></span>
    <span> &ndash; Answer in prearranged order. </span>
  </p>
  <p>
    <span class="qn">QNB<span class="ncs-only">*</span></span>
    <span> &ndash; Act as relay Between ______ and ______. </span>
  </p>
  <p>
    <span class="qn">QNC</span>
    <span> &ndash; All net stations Copy. I have a message for all net stations. </span>
  </p>
  <p>
    <span class="qn">QND<span class="ncs-only">*</span></span>
    <span> &ndash; Net is Directed (controlled by net control station). </span>
  </p>
  <p>
    <span class="qn">QNE<span class="ncs-only">*</span></span>
    <span> &ndash; Entire net stand by. </span>
  </p>
  <p>
    <span class="qn">QNF</span>
    <span> &ndash; Net is Free (not controlled). </span>
  </p>
  <p>
    <span class="qn">QNG</span>
    <span> &ndash; Take over as net control station. </span>
  </p>
  <p>
    <span class="qn">QNH</span>
    <span> &ndash; Your net frequency is High. </span>
  </p>
  <p>
    <span class="qn">QNI</span>
    <span> &ndash; Net stations report In. </span>
    <span class="qn"><span class="ncs-only">*</span></span>
    <span> . I am reporting into the net. (Follow with a list or traffic or QRU). </span>
  </p>
  <p>
    <span class="qn">QNJ</span>
    <span> &ndash; Can you copy me? Can you copy ______? </span>
  </p>
  <p>
    <span class="qn">QNK<span class="ncs-only">*</span></span>
    <span> &ndash; Transmit message for ______ to ______. </span>
  </p>
  <p>
    <span class="qn">QNL</span>
    <span> &ndash; Your net frequency is Low. </span>
  </p>
  <p>
    <span class="qn">QNM<span class="ncs-only">*</span></span>
    <span> &ndash; You are QRMing the net. Stand by. </span>
  </p>
  <p>
    <span class="qn">QNN</span>
    <span> &ndash; Net control station is ______. What station has net control? </span>
  </p>
  <p>
    <span class="qn">QNO</span>
    <span> &ndash; Station is leaving the net. </span>
  </p>
  <p>
    <span class="qn">QNP</span>
    <span> &ndash; Unable to copy you. Unable to copy ______. </span>
  </p>
  <p>
    <span class="qn">QNQ<span class="ncs-only">*</span></span>
    <span>
      &ndash; Move frequency to ______ and wait for ______ to finish handling traffic. Then send him
      traffic for ______.
    </span>
  </p>
  <p>
    <span class="qn">QNR</span>
    <span> &ndash; Answer ______ and Receive traffic. </span>
  </p>
  <p>
    <span class="qn">QNS<span class="ncs-only">*</span></span>
    <span> &ndash; Following Stations are in the net. </span>
    <span class="qn"><span class="ncs-only">*</span></span>
    <span> (Follow with list.) Request list of stations in the net. </span>
  </p>
  <p>
    <span class="qn">QNT</span>
    <span> &ndash; I request permission to leave the net for ______ minutes. </span>
  </p>
  <p>
    <span class="qn">QNU<span class="ncs-only">*</span></span>
    <span> &ndash; The net has traffic for you. Stand by. </span>
  </p>
  <p>
    <span class="qn">QNV<span class="ncs-only">*</span></span>
    <span>
      &ndash; Establish contact with ______ on this frequency. If successful, move to ______ and
      send him traffic for ______.
    </span>
  </p>
  <p>
    <span class="qn">QNW</span>
    <span> &ndash; How do I route messages for ______ ? </span>
  </p>
  <p>
    <span class="qn">QNX</span>
    <span> &ndash; You are excused from the net. </span>
    <span class="qn"><span class="ncs-only">*</span></span>
    <span> Request to be excused from the net. </span>
  </p>
  <p>
    <span class="qn">QNY<span class="ncs-only">*</span></span>
    <span>
      &ndash; Shift to another frequency (or to ______ kHz) to clear traffic with ______.
    </span>
  </p>
  <p>
    <span class="qn">QNZ</span>
    <span> &ndash; Zero beat your signal with mine. </span>
  </p>
  <p>
    <span> * For use only by the Net Control Station. </span>
  </p>
  <h4 class="highlight">Notes on Use of QN Signals</h4>
  <p>
    <span>
      The QN signals listed above are special ARRL signals for use in amateur cw nets only. They are
      not for use in casual amateur conversation. Other meanings that may be used in other services
      do not apply. Do not use QN signals on phone nets. Say it with words. QN signals need not be
      followed by a question mark, even though the meaning may be interrogatory.
    </span>
  </p>
  <h3 class="highlight">International Q Signals</h3>
  <p>
    <span>
      A Q signal followed by a ? asks a question. A Q signal without the ? answers the question
      affirmatively, unless otherwise indicated.
    </span>
  </p>
  <p>
    <span class="qn">QRA</span>
    <span> &ndash; What is the name of your station? </span>
  </p>
  <p>
    <span class="qn">QRG</span>
    <span> &ndash; What's my exact frequency? </span>
  </p>
  <p>
    <span class="qn">QRH</span>
    <span> &ndash; Does my frequency vary? </span>
  </p>
  <p>
    <span class="qn">QRI</span>
    <span> &ndash; How is my tone? (1-3) </span>
  </p>
  <p>
    <span class="qn">QRK</span>
    <span> &ndash; What is my signal intelligibility? (1-5) </span>
  </p>
  <p>
    <span class="qn">QRL</span>
    <span> &ndash; Are you busy? </span>
  </p>
  <p>
    <span class="qn">QRM</span>
    <span> &ndash; Is my transmission being interfered with? </span>
  </p>
  <p>
    <span class="qn">QRN</span>
    <span> &ndash; Are you troubled by static? </span>
  </p>
  <p>
    <span class="qn">QRO</span>
    <span> &ndash; Shall I increase transmitter power? </span>
  </p>
  <p>
    <span class="qn">QRP</span>
    <span> &ndash; Shall I decrease transmitter power? </span>
  </p>
  <p>
    <span class="qn">QRQ</span>
    <span> &ndash; Shall I send faster? </span>
  </p>
  <p>
    <span class="qn">QRS</span>
    <span> &ndash; Shall I send slower? </span>
  </p>
  <p>
    <span class="qn">QRT</span>
    <span> &ndash; Shall I stop sending? </span>
  </p>
  <p>
    <span class="qn">QRU</span>
    <span> &ndash; Have you anything for me? (Answer in negative) </span>
  </p>
  <p>
    <span class="qn">QRV</span>
    <span> &ndash; Are you ready? </span>
  </p>
  <p>
    <span class="qn">QRW</span>
    <span> &ndash; Shall I tell ______ you're calling him? </span>
  </p>
  <p>
    <span class="qn">QRX</span>
    <span> &ndash; When will you call again? </span>
  </p>
  <p>
    <span class="qn">QRZ</span>
    <span> &ndash; Who is calling me? </span>
  </p>
  <p>
    <span class="qn">QSA</span>
    <span> &ndash; What is my signal strength? (1-5) </span>
  </p>
  <p>
    <span class="qn">QSB</span>
    <span> &ndash; Are my signals fading? </span>
  </p>
  <p>
    <span class="qn">QSD</span>
    <span> &ndash; Is my keying defective? </span>
  </p>
  <p>
    <span class="qn">QSG</span>
    <span> &ndash; Shall I send ______ messages at a time? </span>
  </p>
  <p>
    <span class="qn">QSK</span>
    <span> &ndash; Can you work breakin? </span>
  </p>
  <p>
    <span class="qn">QSL</span>
    <span> &ndash; Can you acknowledge receipt? </span>
  </p>
  <p>
    <span class="qn">QSM</span>
    <span> &ndash; Shall I repeat the last message sent? </span>
  </p>
  <p>
    <span class="qn">QSO</span>
    <span> &ndash; Can you communicate with ______ direct? </span>
  </p>
  <p>
    <span class="qn">QSP</span>
    <span> &ndash; Will you relay to ______? </span>
  </p>
  <p>
    <span class="qn">QSV</span>
    <span> &ndash; Shall I send a series of V's? </span>
  </p>
  <p>
    <span class="qn">QSW</span>
    <span> &ndash; Will you transmit on ______? </span>
  </p>
  <p>
    <span class="qn">QSX</span>
    <span> &ndash; Will you listen for ______ on ______? </span>
  </p>
  <p>
    <span class="qn">QSY</span>
    <span> &ndash; Shall I change frequency? </span>
  </p>
  <p>
    <span class="qn">QSZ</span>
    <span>
      &ndash; Shall I send each word/group more than once? (Answer, send twice or ______)
    </span>
  </p>
  <p>
    <span class="qn">QTA</span>
    <span> &ndash; Shall I cancel number ______? </span>
  </p>
  <p>
    <span class="qn">QTB</span>
    <span> &ndash; Do you agree with my word count? (Answer negative) </span>
  </p>
  <p>
    <span class="qn">QTC</span>
    <span> &ndash; How many messages have you to send? </span>
  </p>
  <p>
    <span class="qn">QTH</span>
    <span> &ndash; What is your location? </span>
  </p>
  <p>
    <span class="qn">QTR</span>
    <span> &ndash; What is your time? </span>
  </p>
  <p>
    <span class="qn">QTV</span>
    <span> &ndash; Shall I stand guard for you ______? </span>
  </p>
  <p>
    <span class="qn">QTX</span>
    <span> &ndash; Will you keep your station open for further communication with me? </span>
  </p>
  <p>
    <span class="qn">QUA</span>
    <span> &ndash; Have you news of ______? </span>
  </p>
  <h3 class="highlight">Abbreviations, Prosigns, Prowords</h3>
  <p>
    <b>
      <i>
        <span> CW--Phone (meaning or purpose) </span>
      </i>
    </b>
    <span />
  </p>
  <p>
    <span>
      <u>
        <b>AA</b>
      </u>
      &ndash; (Separation between parts of address or signature.)
    </span>
  </p>
  <p>
    <span class="qn">AA</span>
    <span> &ndash; All after (use to get fills). </span>
  </p>
  <p>
    <span class="qn">AB</span>
    <span> &ndash; An before (used to get fills). </span>
  </p>
  <p>
    <span class="qn">ADEE</span>
    <span> &ndash; Addressee (name of person to whom message addressed). </span>
  </p>
  <p>
    <u>
      <b>ADR</b>
    </u>
    <span> &ndash; Address (second part of message). </span>
  </p>
  <p>
    <span class="qn">AR</span>
    <span> &ndash; End of message (end of record copy). </span>
  </p>
  <p>
    <span class="qn">ARL</span>
    <span>
      &ndash; (Used with "check," indicates use of ARRL numbered message in text).&nbsp; Listed
      below
    </span>
  </p>
  <p>
    <span>
      <u>
        <b>AS</b>
      </u>
      &ndash; Stand by; wait.
    </span>
  </p>
  <p>
    <span class="qn">B</span>
    <span> &ndash; More (another message to follow). </span>
  </p>
  <p>
    <span class="qn">BK</span>
    <span>
      &ndash; Break; break me; break-in (interrupt transmission on cw. Quick check on phone).
    </span>
  </p>
  <p>
    <span>
      <u>
        <b>BT</b>
      </u>
      &ndash; Separation (break) between address and text; between text and signature.
    </span>
  </p>
  <p>
    <span class="qn">C</span>
    <span> &ndash; Correct; yes. </span>
  </p>
  <p>
    <span class="qn">CFM</span>
    <span> &ndash; Confirm. (Check me on this). </span>
  </p>
  <p>
    <span class="qn">CK</span>
    <span>--Check.</span>
  </p>
  <p>
    <span class="qn">DE</span>
    <span> &ndash; From; this is (preceding identification). </span>
  </p>
  <p>
    <u>
      <b>HH</b>
    </u>
    <span> &ndash; (Error in sending. Transmission continues with last word correctly sent.) </span>
  </p>
  <p>
    <span class="qn">HX</span>
    <span>
      &ndash; (Handling instructions. Optional part of preamble.) Initial(s). Single letter(s) to
      follow.
    </span>
  </p>
  <p>
    <u>
      <b>IMI</b>
    </u>
    <span> &ndash; Repeat; I say again. (Difficult or unusual words or groups.) </span>
  </p>
  <p>
    <span class="qn">K</span>
    <span> &ndash; Go ahead; over; reply expected. (Invitation to transmit .) </span>
  </p>
  <p>
    <span class="qn">KN</span>
    <span> &ndash; Specific station answer only. </span>
  </p>
  <p>
    <span class="qn">N</span>
    <span> &ndash; Negative, incorrect; no more. (No more messages to follow.) </span>
  </p>
  <p>
    <span class="qn">NR</span>
    <span> &ndash; Number. (Message follows.) </span>
  </p>
  <p>
    <span class="qn">PBL</span>
    <span> &ndash; Preamble (first part of message) </span>
  </p>
  <p>
    <b>
      <u>
        <span>N/A</span>
      </u>
    </b>
    <span> &ndash; Read back. (Repeat as received.) </span>
  </p>
  <p>
    <span class="qn">R</span>
    <span> &ndash; Roger; point. (Received; decimal point.) </span>
  </p>
  <p>
    <span class="qn">SIG</span>
    <span> &ndash; Signed; signature (last part of message.) </span>
  </p>
  <p>
    <u>
      <b>SK</b>
    </u>
    <span> &ndash; Out; clear (end of communications, no reply expected.) </span>
  </p>
  <p>
    <span class="qn">TU</span>
    <span> &ndash; Thank you. </span>
  </p>
  <p>
    <span class="qn">WA</span>
    <span> &ndash; Word after (used to get fills.) </span>
  </p>
  <p>
    <span class="qn">WB</span>
    <span> &ndash; Word before (used to get fills.) </span>
  </p>
  <p>
    <b>
      <u>
        <span>N/A</span>
      </u>
    </b>
    <span> &ndash; Speak slower. </span>
  </p>
  <p>
    <b>
      <u>
        <span>N/A</span>
      </u>
    </b>
    <span> &ndash; Speak faster. </span>
  </p>
  <p>
    <span>&nbsp;</span>
  </p>
  <p style="margin: 0;">
    <b>
      <span>N/A</span>
    </b>
    <span> &ndash; There is no CW equivalent. </span>
  </p>
  <p class="separator" style="font-size: 24pt; font-family: Times New Roman; margin: 0;">
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  </p>
  <br />
  <div class="arrl-diagrams">
    <p class="line">
      <b>
        <span style="font-size: 18.0pt; color: black;">
          Thanks to KY1F for this article. Thanks Daniel.
        </span>
      </b>
    </p>
    <br />
    <br />
    <br />
    <br />
    <h6>ARRL NUMBERED RADIOGRAMS</h6>
    <p>
      <span>&nbsp;</span>
    </p>
    <p>
      <b>
        <span>
          Numbered messages have been established for some of the more common texts sent during
          emergencies and holiday seasons. When this common text can be used, an ARL NUMBER is
          substituted for the text and sent. The delivering station reads the actual text to the
          address, not the ARL NUMBER.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          The letters ARL are inserted in the preamble in the check and in the text before spelled
          out numbers, which represent texts from this list. Note that some ARL texts include and in
          the text before spelled out numbers, which represent texts from this list. Note that some
          ARL texts include insertion of numerals or words.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> Group One &ndash; For Possible "Relief Emergency " Use </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> ONE-- Everyone safe here. Please don't worry. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> TWO-- Coming home as soon as possible. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> THREE-- Am in _______ hospital. Receiving excellent care and recovering fine. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          FOUR &ndash; Only slight property damage here. Do not be concerned about disaster reports.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          FIVE-- Am moving to new location. Send no further mail or communication. Will inform you
          of new address when relocated.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> SIX-- Will contact you as soon as possible. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          SEVEN-- Please reply by Amateur Radio through the amateur delivering this message. This is
          a free public service
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          EIGHT-- Need additional ______ mobile or portable equipment for immediate emergency use.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          NINE-- Additional ______ radio operators needed to assist with emergency at this location.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          TEN-- Please contact _______. Advise to standby and provide further emergency information,
          instructions or assistance
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          ELEVEN-- Establish Amateur Radio emergency communications with ______ on _______ MHz.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          TWELVE-- Anxious to hear from you. No word in some time. Please contact me as soon as
          possible.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> THIRTEEN-- Medical emergency situation exits here. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          FOURTEEN-- Situation here becoming critical. Losses and damage from _______ increasing.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> FIFTEEN-- Please advise your condition and what help is needed. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> SIXTEEN-- Property damage very severe in this area. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          SEVENTEEN-- REACT communications services also available. Establish REACT communication
          with _______on channel _______.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> EIGHTEEN-- Please contact me as soon as possible at _______. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          NINETEEN-- Request health and welfare report on _______. (State name, address and
          telephone number.)
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          TWENTY-- Temporarily stranded. Will need some assistance. Please contact me at _______.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          TWENTY ONE-- Search and Rescue assistance is needed by local authorities here. Advise
          availability.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          TWENTY TWO-- Need accurate information on the extent and type of conditions now existing
          at your location. Please furnish this information and reply without
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>delay</span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          TWENTY THREE-- Report at once the accessibility and best way to reach your location.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          TWENTY FOUR &ndash; Evacuation of residents from this area urgently needed. Advise plans
          for help.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          TWENTY FIVE-- Furnish as soon as possible the weather conditions at your location.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          TWENTY SIX &ndash; Help and care for evacuation of sick and injured from this location
          needed at once.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          Emergency/priority messages originating from official sources must carry the signature of
          the originating official.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> Group Two &ndash; Routine messages </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          FORTY SIX-- Greetings on your birthday and best wishes for many more to come.&nbsp;&nbsp;
        </span>
      </b>
    </p>
    <p>&nbsp;</p>
    <p>
      <b>
        <span>
          FORTY SEVEN-- Reference your message number ______to ______ delivered on ________ ________
          at ______ UTC.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> FIFTY-- Greetings by Amateur Radio. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          FIFTY ONE-- Greetings by Amateur Radio. This message is sent as a free public service by
          ham radio operators at _______. Am having a wonderful time.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          FIFTY TWO-- Really enjoyed being with you. Looking forward to getting together again.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> FIFTY THREE-- Received your _______. It's appreciated; many thanks. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> FIFTY FOUR-- Many thanks for your good wishes. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> FIFTY FIVE-- Good news is always welcome. Very delighted to hear about yours. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          FIFTY SIX-- Congratulations on your _______, a most worthy and deserved achievement.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> FIFTY SEVEN-- Wish we could be together </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> FIFTY EIGHT-- Have a wonderful time. Let us know when you return. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          FIFTY NINE-- Congratulations on the new arrival. Hope mother and child are well.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> *SIXTY-- Wishing you the best of everything on _______. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> SIXTY ONE-- Wishing you a very Merry Christmas and a Happy New Year. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          *SIXTY TWO-- Greetings and best wishes to you for a pleasant _______ holiday season.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> SIXTY THREE-- Victory or defeat, our best wishes are with you. Hope you win. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> SIXTY FOUR-- Arrived safely at _______. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> SIXTY FIVE-- Arriving _______ on _______. Please arrange to meet me there. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          SIXTY SIX-- DX QSLs are on hand for you at the _______ QSL Bureau. Send _______ self
          addressed envelopes.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          SIXTY SEVEN &ndash; Your message number _______ undeliverable because of _______. Please
          advise.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> SIXTY EIGHT-- Sorry to hear you are ill. Best wishes for a speedy recovery. </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span>
          SIXTY NINE-- Welcome to the _______. We are glad to have you with us and hope you will
          enjoy the fun and fellowship of the organization.
        </span>
      </b>
    </p>
    <p>
      <b>
        <span>&nbsp;</span>
      </b>
    </p>
    <p>
      <b>
        <span> ARL NUMBERS SHOULD BE SPELLED OUT AT ALL TIMES </span>
      </b>
    </p>
    <p>&nbsp;</p>
    <p>*Can be used for all holidays.</p>
    <p>&nbsp;</p>
    <p>
      <i>
        <span style="font-size: 9.0pt">
          From: FORM FSD-3 (Revised 2/94) ARRL updated: 10-06-94
        </span>
      </i>
    </p>
    <p>
      <span>&nbsp;</span>
    </p>
  </div>

  <div class="phonetic">
    <PhoneticAlphabet />
  </div>
</div>

<style lang="scss">
  img.message-form-img {
    width: 100%;
  }

  .handling-traffic {
    border-radius: 10px;
    padding: 1em;
    background-color: white;

    max-width: 1010px;
    margin: 0 auto;
    margin-top: 30px;
  }

  h1 {
    margin-bottom: 0.0001pt;

    font-size: 12pt;
    font-family: Helvetica;
    font-weight: normal;
    margin-left: 0in;
    margin-right: 0in;
    margin-top: 0in;

    text-align: center;
    margin: 5pt 12.2pt;
    font-size: 24pt;

    color: black;
    font-weight: bold;
  }

  p {
    margin: 5pt 12.2pt;
    font-family: "Times New Roman", Times, serif;
    font-size: 16px;
  }

  p.medium {
    font-size: 18px;
    text-align: center;
  }

  p.small {
    text-align: center;
  }

  .center {
    text-align: center;
  }

  .link {
    color: #00f;
  }

  .qn {
    font-weight: bold;

    .ncs-only {
      color: #00f;
      text-decoration: underline;
    }
  }

  .prosign {
    text-decoration: overline;
    font-weight: bold;
    font-size: 0.8em;
    background: rgb(230, 230, 230);
    color: black;
  }

  .separator {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    overflow: hidden;
  }

  .form-links {
    margin-bottom: 20px;

    a {
      text-align: center;
      margin: 18px;
      display: block;
      font-weight: bold;
      font-family: "Times New Roman", Times, serif;
      font-size: 18px;
    }
  }

  h3 {
    margin-bottom: 0.0001pt;

    font-size: 12pt;
    font-family: Helvetica;
    font-weight: normal;
    margin-left: 0in;
    margin-right: 0in;
    margin-top: 0in;

    &.highlight {
      margin: 5pt 12.2pt;
      background: yellow;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      color: #00007f;
    }
  }

  h4 {
    margin-bottom: 0.0001pt;

    font-size: 12pt;
    font-family: Helvetica;
    font-weight: normal;
    margin-left: 0in;
    margin-right: 0in;
    margin-top: 0in;

    &.highlight {
      font-size: 10pt;
      margin: 5pt 12.2pt;
      background: yellow;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      color: #00007f;
    }
  }

  h6 {
    margin-bottom: 0.0001pt;
    text-align: center;
    page-break-after: avoid;
    font-size: 12pt;
    font-family: Arial;
    margin-left: 0in;
    margin-right: 0in;
    margin-top: 0in;
  }

  .bullet {
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
    color: black;
  }

  .arrl-diagrams {
    padding-left: 0in;
    padding-right: 0in;
    padding-top: 0in;
    padding-bottom: 1pt;

    p {
      margin-left: 0;
      margin-right: 0;
      font-size: 10pt;
      font-family: Arial, Helvetica, sans-serif;
    }

    p.line {
      border-bottom: 3pt solid black;
      border-left-style: none;
      border-left-color: inherit;
      border-left-width: medium;
      border-right-style: none;
      border-right-color: inherit;
      border-right-width: medium;
      border-top-style: none;
      border-top-color: inherit;
      border-top-width: medium;
    }
  }

  .phonetic {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    > :global(div) {
      width: 50% !important;

      @media only screen and (max-width: 600px) {
        width: 100% !important;
      }
    }
  }

  @media only print {
    .no-print {
      display: none;
    }

    :global(main .header) {
      display: none !important;
    }

    :global(body),
    :global(main) {
      background-color: white !important;
    }
  }
</style>
