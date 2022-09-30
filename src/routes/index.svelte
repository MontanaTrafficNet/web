<script context="module" lang="ts">
  import { dev } from "$app/env";

  export const prerender = !dev;
</script>

<script lang="ts">
  import PhoneticAlphabet from "$lib/components/PhoneticAlphabet.svelte";
  import RollCallPanel from "$lib/components/RollCallPanel.svelte";
  const rollCallPath = "members.pdf";
</script>

<svelte:head>
  <title>Montana Traffic Net</title>
</svelte:head>

<div class="home">
  <div class="hero">
    <div class="images">
      <div class="left">
        <img alt="USA Flag" height="55" width="100" src="img/animatedflag.gif" />
        <div class="label">QST QST QST</div>
      </div>
      <div class="tower-img">
        <img alt="Tower" src="img/antenna-1.gif" />
      </div>
      <div class="right">
        <img alt="Montana" height="50" width="68" src="img/montan1.gif" />
        <div class="label">QST QST QST</div>
      </div>
    </div>
    <div class="cable"><img alt="coax" height="15" width="600" src="img/coax1.gif" /></div>
    <div class="subtitle"><b>This web page is for all amateur radio operators</b></div>
    <div class="cable"><img alt="coax" height="15" width="600" src="img/coax1.gif" /></div>
    <div class="subtitle">This net has been in existence in excess of 60 years</div>
    <div class="cable"><img alt="coax" height="15" width="600" src="img/coax1.gif" /></div>
    <div class="subtitle">
      <p>
        This Net is part of the Radio Relay International..and Handles Traffic with all States,
        Canada and all Other parts <br /> of the World where Third Party Traffic is Allowed..This Net
        meets at Zero Hour Thirty Minutes on or near 3910 kHZ
      </p>
    </div>
    <div class="cable"><img alt="coax" height="15" width="600" src="img/coax1.gif" /></div>
    <div class="main-panel">
      <div class="side start contact">
        <a title="Leave an email for the Manager" href="contact/manager">
          <div class="label">Net Manager</div>
          <div class="name">N7CMJ~Les</div>
        </a>
      </div>
      <div class="center1 start flat intro">
        <a href="about" title="Show how to use this site" class="readfirst">Read First</a>
        <a href="contact/input-roll-call" title="To give us information about rollcall changes"
          >Input Rollcall Info</a
        >
      </div>
      <div class="side start contact">
        <a title="Leave an email for the web master" href="contact/webmaster">
          <div class="label">Web Master</div>
          <div class="name">NC7BC~Nick</div>
        </a>
      </div>
      <div class="you-difference start flat full">
        <span class="first">This is your Net!!!!!!!!</span> You make the difference!!!
      </div>
      <div class="side">
        <a href={rollCallPath} target="_NEW" title="Roll Call for the Net">Roll Call</a>
      </div>
      <div class="center6 roster">
        <RollCallPanel />
      </div>
      <div class="side">
        <a target="_NEW" title="Look Over" href="/net/RADIOGRM.pdf">Message Form</a>
      </div>
      <div class="side">
        <a title="Handling Traffic Info" href="handling-traffic">Handling Traffic</a>
      </div>
      <div class="side">
        <a rel="external" title="Look at news items" href="/bulletin/bulletin.htm">Bulletin</a>
      </div>
      <div class="side">
        <a
          rel="external"
          title="Locations where you can take test"
          href="/test/Testing%20and%20Information.htm">Test Links/Clubs</a
        >
      </div>
      <div class="side">
        <a target="_NEW" title="Information for GW Ham Fest" href="http://www.gwhamfest.org/">
          Ham Fest Info
        </a>
      </div>
      <div class="side">
        <a href="/preamble" title="Check out the Preamble">Preamble</a>
      </div>
      <div class="side">
        <a title="Check location of repeaters" href="repeaters">Repeaters</a>
      </div>
      <div class="side">
        <a title="Montana Section Net" href="net/mt-net">Montana Net</a>
      </div>
      <div class="side">
        <a
          target="_NEW"
          title="Look over the FCC site"
          href="http://wireless.fcc.gov/uls/index.htm?job=home">FCC</a
        >
      </div>
      <div class="side">
        <a target="_NEW" title="ARRL Site" href="http://www.arrl.org/">ARRL</a>
      </div>
      <div class="side">
        <a target="_NEW" title="Check out QRZ" href="http://qrz.com/">QRZ</a>
      </div>
      <div class="side large mobile-stack">
        <a href="net/common-messages" title="See a list of common messages.">
          <img alt="Common Messages" height="34" width="200" src="img/commonmessage.gif" />
        </a>
      </div>
      <div class="center1 small mobile-stack">
        <a title="Form to use to send weather reports to other Hams" href="/net/weather-report-form"
          >Weather Report Form</a
        >
      </div>
      <div class="side large mobile-stack">
        <a
          target="_NEW"
          title="Training information"
          href="http://training.fema.gov/IS/crslist.asp"
        >
          <img alt="Link to ICS Courses" height="37" width="176" src="img/ICS.gif" />
        </a>
      </div>
      <div class="side half">
        <a href="net/nets">Information - IMN and DRN7 Nets</a>
      </div>
      <div class="side half">
        <a
          target="_NEW"
          title="Mutual Aid and Common Freq Manual"
          href="http://pssb.mt.gov/mutual_aid_manual.mcpx">Mutual Aid &amp; Common Freq Manual</a
        >
      </div>

      <div class="side half">
        <a title="Check your Weather" href="/net/weather"> Check the Weather in Your Area </a>
      </div>
      <div class="side half">
        <a target="_NEW" title="How to mount your Weather Equipment" href="/net/gauge">
          Mounting Your Weather Equipment
        </a>
      </div>
      <div class="side half">Donate to MTN »»</div>
      <div class="side half">
        <a title="Leave an email for the Manager" href="/contact/manager">Contact Net Manager</a>
      </div>
      <div class="side">
        <a
          class="raised-button"
          target="_NEW"
          title="Vanity Call Signs"
          href="http://www.arrl.org/vanity-call-signs"
        >
          Vanity Call Sign
        </a>
      </div>
      <div class="center3 phonetic">
        <PhoneticAlphabet />
      </div>
      <div class="side">
        <a class="raised-button" target="_NEW" title="Listen to Patsy Cline" href="PatsyCline.wav">
          Listen to Patsy Cline
        </a>
      </div>
      <div class="side">
        <a class="raised-button" href="/net/shuttle"> In Memory of the Space Shuttle </a>
      </div>
      <div class="side">
        <a
          class="raised-button"
          target="_NEW"
          title="RF Safety"
          href="http://www.fcc.gov/oet/rfsafety/rf-faqs.html"
        >
          RF Exposure
        </a>
      </div>
      <div class="side">
        <a class="raised-button" target="_NEW" title="Look up Call Signs" href="/net/callsign">
          Look Up Call Signs
        </a>
      </div>
      <div class="side">
        <a class="raised-button" href="/net/phonetic"> Phonetic Alphabet </a>
        <div class="print-hint">Print from this file</div>
      </div>
      <div class="thanks full">Thanks to all who help us make this a Great Net</div>
      <div class="rri full">
        <a href="https://radiorelay.org/">Radio Relay International</a>
      </div>
      <div class="rri image side">
        <a title="Check Us" target="_NEW" href="https://radiorelay.org/"> Link to Site </a>
      </div>
      <div class="center3 waef">
        <img alt="WAEF" height="100%" src="img/WAEFPic.jpg" />
      </div>
      <div class="side thanks-img">
        <img alt="Thank You" width="100%" src="img/thankyou.gif" />
      </div>
      <div class="full">
        <a title="Contact us with information" href="contact/webmaster">
          Email any Input -- This is to make Amateur Radio better for everybody
        </a>
      </div>
      <div class="seventhree full">73 and hope your DXing is Good</div>
      <div class="full">
        <iframe
          title="current date and time"
          frameBorder="0"
          width="129"
          height="34"
          src="https://free.timeanddate.com/clock/i2e4o0rf/n448/ftb/tt0/tw1/tm1/td2/th2/ts1/ta1/tb4"
        />
      </div>
      <div class="full">
        Welcome to our Net and You are Number
        <a href="https://www.hit-counts.com">
          <img
            alt="free html visitor counters"
            src="https://www.hit-counts.com/counter.php?t=0&amp;digits=6&amp;ic=42345&amp;cid=699768"
          />
        </a>
      </div>
      <div class="full email-net">
        <a title="Contact the Net" href="contact/webmaster">EMAIL the Net</a>
      </div>
    </div>
  </div>
</div>

<style>
  .home {
    color: #ffff00;
    max-width: 1010px;
    margin: 0 auto;
    padding-top: 2em;
  }

  a {
    display: flex;
    color: #ff0;
    font-size: large;
    padding: 0;
    margin: 0;
  }

  a .label {
    color: olive;
    padding-bottom: 8px;
  }

  .hero {
    display: flex;
    flex-flow: column nowrap;
    place-items: stretch;
    place-content: space-around;
  }

  .hero .images {
    padding-top: 9px;
    display: flex;
    flex-flow: row nowrap;
    place-items: center;
    place-content: space-between;
  }

  .hero .images > div {
    display: flex;
    flex-flow: column nowrap;
    place-items: center;
  }

  .hero .images > :last-child {
    padding-right: 100px;
  }

  .hero .images > :first-child {
    padding-left: 100px;
  }

  .hero .images .label {
    padding-top: 32px;
  }

  .hero .cable {
    display: flex;
    place-content: center;
    padding: 2px;
  }

  .hero .subtitle {
    text-transform: capitalize;
    text-align: center;
    padding: 4px 0;
  }

  .hero .subtitle p {
    text-transform: none;
    margin: 0px;
  }

  .main-panel {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    gap: 2px;
    padding-top: 3px;
  }

  .main-panel > div {
    background-color: purple;
    border: 2px solid #fff;
    display: flex;
    flex-flow: column nowrap;
    place-content: center;
    place-items: center;
    padding: 5px;
  }

  .main-panel > div.start {
    background-color: unset;
  }

  .main-panel > div.flat {
    background-color: unset;
    border: none;
  }

  .main-panel .contact a {
    flex-flow: column nowrap;
  }

  .main-panel .full {
    grid-column: span 16;
  }

  .main-panel .you-difference {
    text-align: center;
    font-size: 24px;
    text-transform: uppercase;
    flex-flow: row nowrap;
    padding: 10px;
  }

  .main-panel .you-difference .first {
    color: olive;
    padding-right: 0.5em;
    font-size: 20px;
  }

  .main-panel .side {
    grid-column: span 4;
    font-weight: bold;
    font-size: 20px;
  }

  .main-panel .side.large {
    grid-column: span 5;
  }

  .main-panel .side.half {
    grid-column: span 8;
  }

  .main-panel .side.start a {
    font-size: 18px;
  }

  .main-panel .side a {
    font-size: 20px;
  }

  .main-panel .center1 {
    grid-column: 5 / span 8;
    grid-row: span 1;
  }

  .main-panel .center6 {
    grid-column: 5 / span 8;
    grid-row: span 6;
  }

  .main-panel .center3 {
    grid-column: 5 / span 8;
    grid-row: span 3;
  }

  .main-panel .small {
    grid-column: 6 / span 6;
  }

  .roster {
    display: flex;
    flex-flow: column nowrap;
    place-items: center;
  }

  .intro {
    display: flex;
    flex-flow: column nowrap;
    place-items: center;
    place-content: space-between;
    gap: 14px;
  }

  .print-hint {
    padding-top: 1px;
    font-size: 16px;
  }

  .thanks {
    height: 54px;
    font-size: 24px;
  }

  .rri {
    height: 109px;
    font-size: 32px;
  }

  .rri a {
    font-size: inherit;
  }

  .rri.image {
    background-image: url("/img/RRIlogo.jpg");
    height: 293px;
    place-content: flex-end;
    grid-row: span 3;
  }

  .rri.image a {
    color: blue;
    grid-row: span 3;
  }

  .thanks-img {
    grid-row: span 3;
  }

  .seventhree {
    font-size: 32px;
    font-weight: 700;
  }

  .email-net {
    font-weight: bold;
  }

  .main-panel .phonetic {
    padding: 0;
    margin: 0;
  }

  .main-panel .side .raised-button {
    border: 9px solid #fff;
    border-right-color: #797979;
    border-bottom-color: #595959;
    border-left-color: rgb(207, 207, 207);
    background-color: #adadad;
    border-radius: 6px;

    color: black;
    text-decoration: none;
    font-size: 17px;
    padding: 2px 4px;
    text-align: center;

    text-shadow: 0 2px 1px white;
  }

  .waef img {
    max-height: 150px;
  }

  .tower-img img {
    width: 120;
    height: 126;
    max-width: 100%;
    padding: 20px;
  }

  .cable img {
    max-width: 100%;
  }

  @media only screen and (max-width: 600px) {
    .side,
    .center1,
    .center3,
    .center6 {
      grid-column: span 16 !important;
    }

    .hero .images .left {
      padding-left: 20px;
      padding-right: 10px;
      font-size: 10px;
    }

    .hero .images .right {
      padding-right: 20px;
      padding-left: 10px;
      font-size: 10px;
    }
  }
</style>
