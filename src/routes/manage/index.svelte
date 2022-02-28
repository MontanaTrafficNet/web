<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { onMount } from "svelte";

  import type * as NetControlStations from "../../data/net-control-stations.json";
  import type * as NetReport from "../../data/net-report.json";
  import type * as NetRollCall from "../../data/net-roll-call.json";
  import NetControlEditor from "../../lib/components/Manage/NetControlEditor.svelte";
  import NetReportsEditor from "../../lib/components/Manage/NetReportsEditor.svelte";
  import NetRollCallEditor from "../../lib/components/Manage/NetRollCallEditor.svelte";
  import { ModalContainer } from "$lib/components/Modal";

  import netlifyAuthProviders from "netlify-auth-providers";
  import { Data } from "$lib/data";
  import { goto } from "$app/navigation";
  import { notStrictEqual } from "assert";

  //@hmr:keep
  let token: undefined | string = undefined;

  const data = new Data();

  async function login() {
    const auth = new netlifyAuthProviders({ site_id: "9954668e-9384-48a2-b568-3e6ca0795f15" });
    auth.authenticate({ provider: "github", scope: "user, repo" }, (err, data) => {
      if (!err && data && data.token) {
        token = data.token;
      } else {
        console.log("Error authenticating with Github", err);
      }
    });
  }

  function logout() {
    token = undefined;
    loadedRollCall = undefined;
    rollCall = undefined;
    report = undefined;
    stations = undefined;
    goto("/");
  }

  /**
   * What the roll call was at last load
   */
  let loadedRollCall = "";

  let stations: typeof NetControlStations = undefined;
  let report: typeof NetReport = undefined;
  let rollCall: typeof NetRollCall = undefined;

  async function load() {
    data.token = token;
    ({ stations, report, rollCall } = await data.get());
    loadedRollCall = JSON.stringify(rollCall);
  }

  let saving = false;

  async function save() {
    saving = true;
    // Since we use a mutable object, we can't just check these with a deep equal.
    // Instead, we store the original as as JSON string, and then compare here.
    if (JSON.stringify(rollCall) !== loadedRollCall) {
      rollCall.posted_date = new Date();
      console.log("Updated roll call... updating date too", rollCall.posted_date);
    }
    try {
      await data.write({ stations, rollCall, report });
      await load();
      await new Promise((resolve) => setTimeout(resolve, 5000));
    } catch (e) {
      console.log("Failed to update", e);
    }
    saving = false;
  }

  onMount(() => {
    if (!token) login();
  });

  $: if (token) load();

  function autoUpdate(node: HTMLImageElement) {
    const originalSrc = node.src;
    const t = setInterval(() => (node.src = `${originalSrc}?rand=${Math.random()}`), 3000);
    return {
      destroy() {
        clearTimeout(t);
      },
    };
  }
</script>

<ModalContainer>
  <div class="manage">
    <h1>Manage</h1>
    {#if token}
      <div class="logout">
        <Button link on:click={logout}>Logout</Button>
      </div>
    {/if}
    {#if stations}
      <NetControlEditor bind:stations />
    {/if}
    {#if report}
      <NetReportsEditor bind:report />
    {/if}
    {#if rollCall}
      <NetRollCallEditor bind:rollCall />
    {/if}

    <div class="controls">
      <div class="status">
        <a href="https://app.netlify.com/sites/sleepy-shaw-f6c76a/deploys"
          ><img
            use:autoUpdate
            src="https://api.netlify.com/api/v1/badges/9954668e-9384-48a2-b568-3e6ca0795f15/deploy-status"
            alt="Netlify Status"
          /></a
        >
      </div>
      <Button on:click={() => save()} disabled={saving}>Save Changes</Button>
    </div>
  </div>
</ModalContainer>
<div id="netlify-modal" />

<style>
  .manage {
    position: relative;

    margin: 2rem 2rem 1rem 2rem;
    width: 100%;

    padding-bottom: 100px;
    height: min-content;
  }

  h1 {
    font-size: 2rem;
    color: white;
  }

  .logout {
    position: absolute;
    right: 0;
    top: 0;
  }

  .controls {
    position: fixed;
    bottom: 20px;
    background: white;
    display: flex;
    left: 10px;
    right: 10px;
    padding: 20px;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    place-content: space-between;

    background-color: hsl(0, 100%, 100%, 0.2);
    backdrop-filter: blur(30px);
  }

  .status {
    display: flex;
    flex-flow: column nowrap;
    place-content: center;
    place-items: center;
  }

  .status a {
    padding: 0;
    margin: 0;
    line-height: 0;
  }
</style>
