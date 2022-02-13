<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import TextInput from "$lib/components/TextInput.svelte";

  import { dayToString } from "$lib/day-to-string";
  import * as Icons from "@mdi/js";
  import { slide } from "svelte/transition";

  import type * as NetControlStations from "../../../data/net-control-stations.json";

  export let stations: typeof NetControlStations;

  $: stationDays = Object.keys(stations.main) as unknown as keyof typeof stations.main;

  let newCall = "";
  let newName = "";
  function addAlternate() {
    stations.alternate = [...stations.alternate, { name: newName, call: newCall }];
    newName = newCall = "";
    focusCallsignField();
  }

  function removeAlternate(station: typeof stations.alternate[number]) {
    stations.alternate = stations.alternate.filter((a) => a !== station);
  }

  let focusCallsignField: () => void;
</script>

<div class="editor">
  <div class="section main">
    <h3>Net Control Stations</h3>
    <div class="stations">
      {#each stationDays as day}
        <div class="day cell">{dayToString[day]}</div>
        <div class="value cell">
          <div class="call">
            <TextInput bind:value={stations.main[day].call} placeholder="Callsign" />
          </div>
          <div class="name">
            <TextInput bind:value={stations.main[day].name} placeholder="Name" />
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="section alternate">
    <h3>Alternate Net Controls</h3>
    <div class="stations">
      {#each stations.alternate as station}
        <div class="value cell" transition:slide>
          <div class="call">
            <TextInput bind:value={station.call} placeholder="Callsign" />
          </div>
          <div class="name">
            <TextInput bind:value={station.name} placeholder="Name" />
          </div>
          <div class="button">
            <Button
              icon={Icons.mdiTrashCanOutline}
              small
              on:click={() => removeAlternate(station)}
            />
          </div>
        </div>
      {/each}
      <div class="add value cell">
        <form on:submit|preventDefault={addAlternate} action="">
          <div class="call">
            <TextInput
              bind:value={newCall}
              placeholder="Callsign"
              bind:focus={focusCallsignField}
            />
          </div>
          <div class="name">
            <TextInput bind:value={newName} placeholder="Name" />
          </div>
          <div class="button">
            <Button icon={Icons.mdiPlus} type="submit" small />
          </div>
        </form>
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
    place-content: flex-start;
    place-items: stretch;

    user-select: none;
  }

  .stations {
    display: flex;
    flex-flow: column nowrap;
    place-content: space-between;
    place-items: flex-start;
    background-color: hsl(0, 100%, 100%, 0.2);
    border-radius: 10px;
    padding: 10px;
    width: 20em;
  }

  .cell {
    padding-top: 0.3em;
    padding-bottom: 0.5em;
  }

  .cell .call {
    min-width: 0;
    flex: 0 0 5em;
    display: flex;
    flex-flow: row nowrap;
  }

  .cell .name {
    flex: 0 1 100%;
    display: flex;
    flex-flow: row nowrap;
  }

  .value.cell,
  .value.cell form {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    width: 100%;
  }

  .add.value.cell {
    margin: -10px;
    padding: 10px;
    margin-top: 10px;
    background-color: hsl(0, 100%, 100%, 0.5);
    border-radius: 10px;
    width: calc(100% + 20px);
  }

  h3 {
    font-size: 20px;
    margin-bottom: 1px;
  }

  .day.cell {
    margin-bottom: -9px;
  }
</style>
