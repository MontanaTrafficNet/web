<script context="module">
  import { browser, dev } from "$app/env";

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<svelte:head>
  <title>About the Montana Traffic Net</title>
</svelte:head>

<div class="content">
  <h1>About</h1>

  <p>
    This Web Site makes it easier to acquire roll call sheets and information needed to pass traffic
    and to make this net operational. The postage cost now would be expensive just to mail roll call
    sheets to the Net Control each month. We have our own domain name so we can move the net to
    different locations but keep the address the same so it doesn&#39;t confuse people.{" "}
  </p>
  <p>
    We wish to thank everyone that helps to make this net work.{" "}
  </p>
  <p>
    <b>
      If there is any more information or links that should be presented here, please, let me know.{" "}
    </b>
  </p>

  <p>
    <b>
      If you find any mistakes in the roll call or any other page let me know. Spelling of names,
      call signs or other wise.
    </b>
  </p>

  <div class="picture">
    <img alt="Les" height="640" src="img/Les.JPG" width="480" />
    <div>Les / N7CMJ</div>
    <div>Our Net Manager</div>
  </div>
</div>

<style>
  h1 {
    text-transform: uppercase;
  }

  .picture {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    font-weight: bold;
  }

  .content {
    color: white;
    width: 100%;
    padding: 20px;

    max-width: 1010px;
    margin: 0 auto;
  }
</style>
