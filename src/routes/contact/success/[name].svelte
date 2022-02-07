<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let name = "";
  let header = "";

  const delay = 7000;
  let count = delay / 1000;

  $: name = $page.params.name;

  $: console.log(name);

  $: switch (name) {
    case "manager":
      header = "Manager";
      break;
    case "webmaster":
      header = "Webmaster";
      break;
    case "for-manager":
      header = "Manager";
      break;
    case "info":
      header = "Webmaster";
      break;
    case "the-net":
      header = "Webmaster";
      break;
    default:
      break;
  }

  onMount(() => {
    const interval = setInterval(() => {
      count -= 1;
      if (count === 0) {
        clearInterval(interval);
        goto("/");
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<svelte:head>
  <title>Montana Traffic Net - Email sent successfully</title>
</svelte:head>

<div class="success-message">
  <h2>Message Sent to {header} Successfully!</h2>

  <p>
    You will now automatically be sent back to the homepage in {count}
    {count === 1 ? "second" : "seconds"}, or you can click below to go now...
  </p>

  <a href="/">Back to Home</a>
</div>

<style>
  .success-message {
    max-width: 1010px;
    margin: 0 auto;
    margin-top: 50px;
    color: white;
  }

  a {
    color: white;
  }
</style>
