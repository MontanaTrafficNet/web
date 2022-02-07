<script lang="ts">
  import { goto } from "$app/navigation";

  import { page } from "$app/stores";

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  let name = "";
  let header = "";
  let rollCallInput = false;

  $: name = $page.params.name;

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
    case "input-roll-call":
      header = "Manager";
      rollCallInput = true;
      break;
    default:
      break;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": name,
      }),
    })
      .then(() => goto(`/contact/success/${name}`))
      .catch((error) => alert(error));
  };
</script>

<svelte:head>
  <title>Montana Traffic Net - Contact {header}</title>
</svelte:head>

<form
  {name}
  method="post"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  on:submit={handleSubmit}
>
  <fieldset>
    <div hidden>
      <label>Don’t fill this out:{" "}<input name="bot-field" /></label>
    </div>

    <legend>
      Contact {header}
    </legend>

    <div class="container">
      <label for="name">Your Full Name*: </label>
      <input type="text" name="name" id="name" maxLength={50} required />
    </div>
    {#if rollCallInput}
      <div class="container">
        <label for="call-sign">Call Sign*:</label>
        <input type="text" name="callsign" id="callsign" maxLength={15} />
      </div>
    {/if}
    <div class="container">
      <label for="email">Email Address*:</label>
      <input type="email" name="email" id="email" maxLength={50} required />
    </div>
    {#if !rollCallInput}
      <div class="container">
        <label for="phone">Phone Number if you want a reply:</label>
        <input type="text" name="phone" id="phone" maxLength={15} />
      </div>
    {/if}
    <div class="container">
      <label for="message">
        {#if rollCallInput}
          Message to include Name, Call Sign and Town/State of station to be added or removed:
        {:else}
          Message:
        {/if}
      </label>
      <textarea rows={10} cols={50} name="message" id="message" required maxLength={2048} />
    </div>

    <input type="submit" name="Submit" value="Submit" />
  </fieldset>
</form>

<style>
  form {
    padding: 12px;
    color: white;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;

    max-width: 1010px;
    margin: 0 auto;
    margin-top: 50px;
  }

  fieldset {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    border-radius: 10px;
  }

  .container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;

    margin: 12px 0;
  }

  input,
  textarea {
    border: 1px solid #999;
    border-radius: 5px;
    color: #000;
    font-family: Arial, Verdana, sans-serif;
    font-size: 0.8em;
    line-height: 140%;
    padding: 3px;
    align-items: flex-start;
    width: 50%;
  }

  textarea {
    width: 100%;
  }

  input[type="submit"] {
    padding: 3px 5px;
    max-width: 100px;
    font-size: 18px;
    cursor: pointer;
    color: white;
    background-color: rgba(0, 0, 0, 0.2);
  }

  input[type="submit"]:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media only screen and (max-width: 600px) {
    input,
    textarea {
      width: 100%;
    }
  }
</style>
