<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import TextInput from "$lib/components/TextInput.svelte";
  import { getContext, tick } from "svelte";
  import * as Icons from "@mdi/js";

  import type * as NetRollCall from "../../../data/net-roll-call.json";
  import NetRollCallEditorCity from "./NetRollCallEditorCity.svelte";
  import { ModalContext } from "$lib/components/Modal";

  type Members = { [key: string]: { callsign: string; name: string }[] };
  type City = keyof typeof NetRollCall["members"];

  export let rollCall: typeof NetRollCall;

  const modal = getContext(ModalContext) as typeof ModalContext;

  $: members = rollCall.members as Members;

  $: cities = (members ? Object.keys(members) : []) as City[];

  let filter = undefined;

  let newCityName: City | "" = "";
  let justAddedCityName: City | "" = undefined;

  function orderObjectKeys<K extends string, V>(orig: Record<K, V>): Record<K, V> {
    return Object.keys(orig)
      .sort()
      .reduce((obj, key) => {
        obj[key] = orig[key];
        return obj;
      }, {} as Record<K, V>);
  }

  async function addCity() {
    justAddedCityName = "";
    await tick();
    if (newCityName === "") return;
    const name = newCityName;
    if (rollCall.members[name] === undefined) rollCall.members[name] = [];
    newCityName = "";
    justAddedCityName = name;
    filter = "";
    rollCall.members = orderObjectKeys(rollCall.members);
    await tick();
    addMember(justAddedCityName, "", "");
    selectedCity = justAddedCityName;
  }

  async function addMember(city: keyof typeof rollCall.members, name: string, callsign: string) {
    const cityMembers = rollCall.members[city as keyof typeof rollCall.members];
    if (cityMembers !== undefined)
      rollCall.members[city] = [
        ...cityMembers,
        {
          callsign: callsign.toUpperCase(),
          name,
        },
      ];
    sortMembers(city);
  }

  async function removeMember(
    city: keyof typeof rollCall.members,
    member: { callsign: string; name: string }, // assumes to be the actual member object, so we can remove on identity
  ) {
    if (
      !(await modal.prompt({
        title: "Delete Member",
        message: `Are you sure you want to delete ${member.name} (${member.callsign})?`,
      }))
    )
      return;
    rollCall.members[city] = [...rollCall.members[city].filter((m) => m !== member)];
  }

  async function removeCity(city: keyof typeof rollCall.members) {
    if (
      !(await modal.prompt({
        title: "Delete City",
        message: `Are you sure you want to delete ${city}?`,
      }))
    )
      return;
    delete rollCall.members[city];
    rollCall.members = orderObjectKeys(rollCall.members);
    rollCall = rollCall;
  }

  function sortMembers(city: keyof typeof rollCall.members): void {
    if (!rollCall.members[city]) return;
    rollCall.members[city] = rollCall.members[city].sort((a, b) => {
      let aName = a.name.toLowerCase(),
        bName = b.name.toLowerCase();

      if (aName === "" && bName === "") return 0;

      if (aName === "") return 1;
      if (bName === "") return -1;

      if (aName < bName) {
        return -1;
      }

      if (aName > bName) {
        return 1;
      }
      return 0;
    });
  }

  function applyFilter(cities: City[], filter: string | undefined) {
    if (filter === undefined || !filter) {
      return cities;
    } else {
      return cities.filter((city) => city.toLowerCase().includes(filter.toLowerCase()));
    }
  }

  $: filteredCities = applyFilter(cities, filter);

  let selectedCity: string | undefined = undefined;
</script>

<div class="editor">
  <div class="header">
    <h3>Roll Call</h3>
    <div class="filter">
      <input type="text" placeholder="Filter" bind:value={filter} />
    </div>
    <div class="add-city">
      <form on:submit|preventDefault={addCity} action="">
        <div class="city">
          <TextInput bind:value={newCityName} placeholder="New City" />
        </div>
        <div class="button">
          <Button icon={Icons.mdiPlus} type="submit" small />
        </div>
      </form>
    </div>
  </div>
  <div class="report">
    {#each filteredCities as city}
      <NetRollCallEditorCity
        {city}
        members={members[city]}
        isNewCity={city === justAddedCityName}
        on:selected={() => (selectedCity = city)}
        on:blurred={() => sortMembers(city)}
        on:add={() => {
          addMember(city, "", "");
        }}
        on:remove={({ detail: member }) => {
          removeMember(city, member);
        }}
        on:removeCity={() => {
          removeCity(city);
        }}
        isSelected={selectedCity === city}
      />
    {/each}
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
    border-radius: 10px;
    width: 100%;
  }

  .header {
    margin-top: 2em;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    place-content: space-between;
    place-items: baseline;
  }

  .add-city {
    background-color: hsl(206, 32%, 72%, 1);
    padding: 0.5em;
    border-radius: 10px;
  }

  .add-city form {
    display: flex;
    flex-flow: row nowrap;
    place-content: flex-start;
    place-items: center;
  }

  .add-city .button {
    margin-left: 10px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 1px;
  }

  .filter input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.288);
    padding: 10px;
    color: white;
    outline: none;
  }

  .filter {
    margin-left: auto;
    margin-right: 10px;
  }
</style>
