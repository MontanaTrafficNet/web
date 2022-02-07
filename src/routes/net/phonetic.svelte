<script>
  import PhoneticAlphabet from "$lib/components/PhoneticAlphabet.svelte";
</script>

<div class="callsign">
  <h2>Phonetic Alphabet</h2>
  <p>If you want to print this chart do so and cut it out to hang in front of your desk.</p>
  <div class="alpha">
    <PhoneticAlphabet />
  </div>
</div>

<style>
  .alpha {
    padding: 1em;
    background-color: white;
    border-radius: 10px;
    width: 400px;
  }

  .callsign {
    background-color: #00ffff;

    max-width: 1010px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 20px;
    padding: 18px;
  }
</style>
