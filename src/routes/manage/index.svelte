<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import netlifyIdentity from "netlify-identity-widget";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  import type * as NetControlStations from "../../data/net-control-stations.json";
  import type * as NetReport from "../../data/net-report.json";
  import type * as NetRollCall from "../../data/net-roll-call.json";
  import NetControlEditor from "./NetControlEditor.svelte";
  import NetReportsEditor from "./NetReportsEditor.svelte";
  import NetRollCallEditor from "./NetRollCallEditor.svelte";
  import { ModalContainer } from "$lib/components/Modal";

  // @hmr:keep
  let token: undefined | string = undefined;

  function login() {
    netlifyIdentity.open("login");
  }

  function logout() {
    netlifyIdentity.logout().then(() => {
      token = undefined;
    });
    goto("/");
  }

  let stations: typeof NetControlStations = undefined;
  let report: typeof NetReport = undefined;
  let rollCall: typeof NetRollCall = undefined;

  function load() {
    fetch(".netlify/functions/current", {
      mode: "same-origin",
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (response) => {
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          stations = json.data.controlStations;
          report = json.data.report;
          rollCall = json.data.rollCall;
        } else {
          console.log("error", response);
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  }

  function save() {
    fetch(".netlify/functions/update", {
      mode: "same-origin",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stations, report, rollCall }),
    })
      .then(async (response) => {
        if (response.ok) {
          console.log("response", response);
          console.log("body", await response.json());
        } else {
          console.log("error", response);
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  }

  netlifyIdentity.on("login", (user) => {
    token = user.token.access_token;
    netlifyIdentity.close();
  });

  onMount(() => {
    netlifyIdentity.init({
      container: "#netlify-modal", // defaults to document.body
      // APIUrl: "https:montanatrafficnet.com/.netlify/identity",
      // locale: 'en' // defaults to 'en'
    });
    if (!token) login();
  });

  $: if (token) load();
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
      <Button on:click={() => save()}>Save Changes</Button>
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

    place-content: flex-end;

    background-color: hsl(0, 100%, 100%, 0.2);
    backdrop-filter: blur(30px);
  }
</style>
