<svelte:head>
  <title>Montana Traffic Net: Manage</title>
</svelte:head>

<main>
  <slot />
</main>

<style>
  :global(body),
  main {
    --background-color: hsl(202, 78%, 35%);

    --button-color: hsl(4, 72%, 50%);
    --button-hover-color: hsl(4, 81%, 38%);

    background: linear-gradient(var(--background-color), hsl(240, 100%, 9%)) fixed;
    min-height: min-content;
    width: 100%;
    display: flex;
  }

  main {
    overflow-y: scroll;
  }
</style>
