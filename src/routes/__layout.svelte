<script lang="ts">
  import "../app.css";
</script>

<main>
  <a class="header" href="/">Montana Traffic Net</a>
  <slot />
</main>

<style>
  .header {
    display: block;
    text-decoration: none;
    color: #ffff00;
    font-size: xx-large;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    padding-top: 4px;
  }

  :global(body),
  main {
    background-color: #000080;
    min-height: 100vh;
  }
</style>
