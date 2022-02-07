<script lang="ts">
  import Icon from "mdi-svelte";

  export let link: boolean = false;
  export let small: boolean = false;
  export let type: "button" | "submit" = "button";
  export let icon: undefined | string = undefined;
</script>

<div class="net-button" class:link class:button={!link} class:small class:icon>
  <button on:click {type} on:blur on:focus>
    {#if icon}
      <Icon path={icon} size="1em" />
    {:else}
      <slot />
    {/if}
  </button>
</div>

<style>
  .link button {
    outline: none;
    background: transparent;
    color: white;
    border: none;
    margin: 0;
    padding: 0.2rem;
    border-radius: 2px;
  }

  .link:hover button {
    background: rgba(255, 255, 255, 0.4);
    cursor: pointer;
  }

  .button button {
    padding: 10px 15px;
    border-radius: 100px;
    border: none;
    user-select: none;
    background-color: var(--button-color);
    color: hsl(0, 0%, 94%);
    font-size: 16px;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
  }

  .button:hover button {
    background-color: var(--button-hover-color);
    cursor: pointer;
  }

  .button.small {
    display: flex;
    flex-flow: column nowrap;
    place-content: center;
    place-items: center;

    --size: 24px;
    width: var(--size);
    height: var(--size);
    padding: 0;
  }

  .button.small button {
    flex: 0 0 var(--size);
    width: var(--size);
    height: var(--size);
    padding: 0;
  }

  .button.icon button,
  .icon button {
    display: flex;
    flex-flow: row nowrap;
    place-content: center;
    place-items: center;

    padding: 2px;
  }
</style>
