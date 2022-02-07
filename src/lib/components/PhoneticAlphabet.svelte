<div class="phonetic-alphabet">
  <div class="title">Phonetic Alphabet</div>
  <div class="chart">
    <div><span>A</span>lpha</div>
    <div><span>B</span>ravo</div>
    <div><span>C</span>harlie</div>
    <div><span>D</span>elta</div>
    <div><span>E</span>cho</div>
    <div><span>F</span>oxtrot</div>
    <div><span>G</span>olf</div>
    <div><span>H</span>otel</div>
    <div><span>I</span>ndia</div>
    <div><span>J</span>uliet</div>
    <div><span>K</span>ilo</div>
    <div><span>L</span>ima</div>
    <div><span>M</span>ike</div>
    <div><span>N</span>ovember</div>
    <div><span>O</span>scar</div>
    <div><span>P</span>apa</div>
    <div><span>Q</span>uebec</div>
    <div><span>R</span>omeo</div>
    <div><span>S</span>ierra</div>
    <div><span>T</span>anglo</div>
    <div><span>U</span>niform</div>
    <div><span>V</span>ictor</div>
    <div><span>W</span>hiskey</div>
    <div><span>X</span>-ray</div>
    <div><span>Y</span>ankee</div>
    <div><span>Z</span>ulu</div>
    <div><span>.</span> Decimal</div>
    <div><span>.</span> Stop</div>
    <div>&nbsp;</div>
    <div><span>0</span> Zero</div>
    <div><span>1</span> Wun</div>
    <div><span>2</span> Too</div>
    <div><span>3</span> Tree</div>
    <div><span>4</span> Fower</div>
    <div><span>5</span> Fife</div>
    <div><span>6</span> Six</div>
    <div><span>7</span> Seven</div>
    <div><span>8</span> Ait</div>
    <div><span>9</span> Niner</div>
  </div>
</div>

<style>
  .phonetic-alphabet {
    background: white;
    width: 100%;
    height: 100%;
    color: black;

    display: flex;
    flex-flow: column nowrap;
  }

  .title {
    border-bottom: 2px solid black;
  }

  .chart {
    display: flex;
    flex-flow: column wrap;
    place-content: stretch;
    place-items: stretch;
    height: 300px;
  }

  .chart > div {
    padding: 2px;
  }

  .chart > div > span {
    font-weight: bold;
  }
</style>
