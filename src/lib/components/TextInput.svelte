<script lang="ts">
  import { onMount } from "svelte";

  export let placeholder: string | undefined;
  export let value: string | number;
  export let autofocus: boolean = false;
  export const focus = () => {
    el.focus();
  };

  let el: HTMLInputElement;

  onMount(() => {
    if (autofocus) focus();
  });
</script>

<input
  class="net-text-input"
  type="text"
  bind:value
  {placeholder}
  bind:this={el}
  on:focus
  on:blur
  on:change
/>

<style>
  .net-text-input {
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
