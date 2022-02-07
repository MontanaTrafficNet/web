<script lang="ts">
  import { onMount } from "svelte";

  /* Locations can be edited manually by updating 'wx_locID' below.  Please also update */
  /* the location name and link in the above div (wx_module) to reflect any changes made. */
  const wx_locID =
    "59808"; /* If you are editing locations manually and are adding multiple modules to one page, each */
  /* module must have a unique div id.  Please append a unique # to the div above, as well */
  /* as the one referenced just below.  If you use the builder to create individual modules */
  /* you will not need to edit these parameters. */
  const wx_targetDiv = "wx_module_7294";
  /* Please do not change the configuration value [wx_config] manually - your module */
  /* will no longer function if you do.  If at any time you wish to modify this */
  /* configuration please use the graphical configuration tool found at */
  /* https://registration.weather.com/ursa/wow/step2 */
  const wx_config =
    "SZ=300x250*WX=FHW*LNK=SSNL*UNT=F*BGI=winter*MAP=null|null*DN=montanatrafficnet.com*TIER=0*PID=1002875243*MD5=e1b829274c42c28e4191e3bc1e91b204";
</script>

<svelte:head>
  <title>Missoula Weather Forecast</title>
</svelte:head>

<div class="weather">
  <div id="wx_module_7294">
    <a href="http://www.weather.com/weather/local/59808">
      <span class="auto-style1">Missoula Weather Forecast, MT (59808)</span></a
    >
  </div>
  <!-- <p>&nbsp;</p>
  <p class="auto-style1">
    <strong>Check the Weather in Your Area by posting</strong>
  </p>
  <p class="auto-style1">
    <strong>&nbsp;your Zip Code or Town in the blank area.</strong>
  </p> -->

  <script
    src="//wow.weather.com/weather/wow/module/{wx_locID}?config={wx_config}&proto=https&target={wx_targetDiv}"></script>
</div>

<style lang="scss">
  .weather {
    color: #ffff00;
    background-color: #800080;

    max-width: 1010px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 20px;
    padding: 18px;

    a {
      color: white;
    }
  }
</style>
