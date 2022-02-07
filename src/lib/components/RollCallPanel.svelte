<script lang="ts">
  import * as stations from "$data/net-control-stations.json";
  import report from "$data/net-report.json";
  import rollCall from "$data/net-roll-call.json";
  import { dayToString } from "$lib/day-to-string";
  import { monthToString } from "$lib/month-to-string";

  $: stationDays = (Object.keys(stations.main) as unknown) as keyof typeof stations.main;

  const rollCallDate = new Intl.DateTimeFormat("en-US", { dateStyle: "long" })
    .format(new Date(rollCall.posted_date))
    .split(",")[0];
  const rollCallPath = "members.pdf";
</script>

<a target="_blank" href={rollCallPath} class="roll_call">{rollCallDate} Roll Call Posted</a>
<h3>Net Control Stations</h3>
<div class="stations main">
  {#each stationDays as day}
    <div class="day cell">{dayToString[day]}</div>
    <div class="call cell">{stations.main[day].call}</div>
    <div class="name cell">{stations.main[day].name}</div>
  {/each}
</div>
<h3>Alternate Net Controls</h3>
<div class="stations alternate">
  {#each stations.alternate as station}
    <div class="call cell">{station.call}</div>
    <div class="name cell">{station.name}</div>
  {/each}
</div>

<div class="reports">
  <h3>{monthToString[report.month]} Net Report</h3>
  <table>
    <tr>
      <td class="header">Checkins</td>
      <td>{report.checkins}</td>
    </tr>
    <tr>
      <td class="header">Traffic</td>
      <td>{report.traffic}</td>
    </tr>
    <tr>
      <td class="header">Time</td>
      <td>{report.time} minutes</td>
    </tr>
  </table>
</div>

<style>
  a.roll_call {
    color: #ff0;
    font-size: large;
  }

  h3 {
    color: olive;
    font-size: medium;
    margin-bottom: 0;
  }

  .stations {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr min-content 2fr;
  }

  .cell {
    padding: 6px;
    white-space: nowrap;
  }

  .cell.day {
    text-align: end;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    padding-right: 10px;
  }
  .cell.call {
    text-align: center;
    padding-left: 10px;
  }
  .cell.name {
    text-align: start;
  }

  .stations.alternate {
    grid-template-columns: 1fr 1fr;
  }

  .stations.alternate .cell {
    padding: 3px;
  }

  .stations.alternate .cell.call {
    text-align: end;
  }

  .reports {
    background: #00000029;
    border-radius: 10px;
    padding: 20px 10px;
    margin: 16px;
  }

  .reports h3 {
    margin: 0;
    margin-bottom: 15px;
    text-align: center;
  }

  .reports table {
    border-spacing: 0;
    margin-right: auto;
    margin-left: auto;
  }

  .reports table td {
    text-align: left;
    padding: 0 0.5rem;
  }

  .reports table td.header {
    text-align: right;
    border-right: 1px solid #00000026;
  }
</style>
