<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import TextInput from "$lib/components/TextInput.svelte";
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import * as Icons from "@mdi/js";

  const dispatch = createEventDispatcher<{
    selected: void;
    add: void;
    blurred: void;
    remove: { name: string; callsign: string };
    removeCity: void;
  }>();

  export let city: string;
  export let members: { name: string; callsign: string }[];
  export let isNewCity: boolean = false;
  export let isSelected: boolean = false;

  let el: HTMLDivElement;

  $: scrollIntoView(isNewCity, el);

  function scrollIntoView(isNew: boolean, el: HTMLDivElement | undefined) {
    if (isNew && el) {
      el.scrollIntoView({ behavior: "auto", block: "center" });
    }
  }

  let blurTimeout: number | undefined;

  function focus() {
    clearTimeout(blurTimeout);
    const wasSelected = isSelected;
    isSelected = true;
    if (!wasSelected) dispatch("selected");
  }

  function blur() {
    clearTimeout(blurTimeout);
    blurTimeout = window.setTimeout(() => {
      isSelected = false;
      dispatch("blurred");
    }, 500);
  }
</script>

<div
  class="city"
  class:new={isNewCity}
  bind:this={el}
  class:selected={isSelected}
  on:click={focus}
  on:focusin={focus}
  on:focusout={blur}
>
  <div class="name">
    {city}
  </div>
  <div class="members">
    {#each members as member}
      <div class="member" transition:fade>
        <div class="name">
          <TextInput
            autofocus={member.name === ""}
            bind:value={member.name}
            placeholder="Name"
            on:focus={focus}
          />
        </div>
        <div class="callsign">
          <TextInput bind:value={member.callsign} placeholder="Callsign" on:focus={focus} />
        </div>

        {#if isSelected}
          <div class="delete-member-button" transition:fade>
            <Button
              icon={Icons.mdiTrashCanOutline}
              small
              on:click={() => dispatch("remove", member)}
              on:focus={focus}
              on:blur={blur}
            />
          </div>
        {/if}
      </div>
    {/each}
    {#if isSelected}
      <div class="add-member-button" transition:fade>
        <Button
          icon={Icons.mdiPlus}
          small
          on:click={() => dispatch("add")}
          on:focus={focus}
          on:blur={blur}
        />
      </div>
      <div class="delete-button" transition:fade>
        <Button
          icon={Icons.mdiTrashCanOutline}
          small
          on:click={() => dispatch("removeCity")}
          on:focus={focus}
          on:blur={blur}
        />
      </div>
    {/if}
  </div>
</div>

<style>
  .city {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    place-content: space-between;
    place-items: flex-start;

    flex: 1 1 100%;
    min-width: 0;
    width: 100%;

    background-color: rgba(255, 255, 255, 0.082);
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px;

    transition: background-color 300ms;
  }

  .city.selected {
    background-color: rgba(255, 255, 255, 0.349);
  }

  .city > .name {
    padding-bottom: 10px;
  }

  .city.new {
    animation: pulse 1000ms ease-out 0ms 1;
  }

  .delete-button {
    position: absolute;
    top: -5px;
    right: -5px;
  }

  .delete-member-button {
    position: absolute;
    top: 0px;
    right: 1px;
  }

  .member {
    position: relative;
  }

  @keyframes pulse {
    0% {
      background-color: rgba(255, 255, 255, 0.404);
    }
    100% {
      background-color: rgba(255, 255, 255, 0.082);
    }
  }
  .members {
    display: flex;
    flex-flow: row wrap;
    place-content: flex-start;
    place-items: flex-start;
    gap: 15px;
  }

  .member {
    display: flex;
    flex-flow: row nowrap;
    place-content: flex-start;
    place-items: flex-start;
    flex: 1 1 200px;
    background-color: hsl(0, 0%, 94%);
    border-radius: 10px;
    gap: 10px;
    max-width: 300px;
  }
</style>
