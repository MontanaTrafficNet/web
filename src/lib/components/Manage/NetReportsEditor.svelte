<script lang="ts">
  import NumberInput from "$lib/components/NumberInput.svelte";
  import SelectInput from "$lib/components/SelectInput.svelte";
  import SelectOption from "$lib/components/SelectOption.svelte";
  import { monthToString } from "$lib/month-to-string";

  import type * as NetReport from "../../../data/net-report.json";

  export let report: typeof NetReport;

  const months = Object.entries(monthToString).map(([num, name]) => [parseInt(num), name]);
</script>

<div class="editor">
  <h3>Current Report</h3>
  <div class="report">
    <div class="value cell">
      <div class="month">
        <SelectInput bind:value={report.month}>
          {#each months as month}
            <SelectOption value={month[0]}>{month[1]}</SelectOption>
          {/each}
        </SelectInput>
      </div>
      <div class="checkins">
        <NumberInput bind:value={report.checkins} placeholder="Checkins" />
      </div>
      <div class="traffic">
        <NumberInput bind:value={report.traffic} placeholder="Traffic" />
      </div>
      <div class="minutes">
        <NumberInput bind:value={report.time} placeholder="Minutes" />
      </div>
    </div>
  </div>
</div>

<style>
  .editor {
    color: white;

    display: flex;
    gap: 1em;

    flex-flow: row wrap;
    place-content: stretch;
    place-items: stretch;

    user-select: none;
  }

  .report {
    display: flex;
    flex-flow: column nowrap;
    place-content: space-between;
    place-items: stretch;
    background-color: hsl(0, 100%, 100%, 0.2);
    border-radius: 10px;
    padding: 10px;
    width: 100%;
  }

  .cell {
    padding-top: 0.3em;
    padding-bottom: 0.5em;
  }

  .cell > div {
    min-width: 0;
    flex: 1 1 5em;
    display: flex;
    flex-flow: row nowrap;
  }

  .value.cell {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    width: 100%;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 1px;
  }
</style>
