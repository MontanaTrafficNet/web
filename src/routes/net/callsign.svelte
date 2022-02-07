<svelte:head>
  <title>Call Sign / Name Search</title>
</svelte:head>

<div class="callsign">
  <form id="fccSearch" method="post" action="http://www.arrl.org/fcc/search">
    <h2>Call Sign Information</h2>
    <div>
      <input
        id="qq2"
        class="required text"
        value=""
        name="data[Search][terms]"
        autocomplete="off"
      />
      <input class="submit" value="GO" type="submit" />
      <p>Enter the Call Sign you wish information on in the block above and hit GO.</p>
      <p>It should return the Information for that Call Sign.</p>
    </div>
  </form>
</div>

<style>
  .callsign {
    background-color: #00ffff;

    max-width: 1010px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 20px;
    padding: 18px;
  }
</style>
