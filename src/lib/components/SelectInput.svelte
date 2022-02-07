<script lang="ts">
  import { onMount } from "svelte";

  export let value: string | number;
  export let autofocus: boolean = false;
  export const focus = () => {
    el.focus();
  };

  let el: HTMLSelectElement;

  onMount(() => {
    if (autofocus) focus();
  });
</script>

<select class="net-select-input" bind:this={el} bind:value on:focus on:blur>
  <slot />
</select>

<style>
  .net-select-input {
    padding: 5px 14px;
    border-radius: 6px;
    border: none;
    user-select: none;
    background-color: hsl(0, 0%, 94%);
    color: black;
    font-size: 12px;

    width: 100%;
  }
</style>
