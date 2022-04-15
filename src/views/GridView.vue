<script setup lang="ts"></script>

<template>
  <div class="grid-container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
    <div class="item7">7</div>
    <div class="item8">8</div>
    <div class="item9">9</div>
    <div class="item10">10</div>
    <div class="item11">11</div>
    <div class="item12">12</div>
    <div class="item12">13</div>
  </div>
  <br />
  <br />
  <div id="grid">
    <div id="item1">1</div>
    <div id="item2">2</div>
    <div id="item3">3</div>
    <div id="item4">4</div>
    <div id="item5">5</div>
  </div>
  <select id="direction">
    <option value="column">column</option>
    <option value="row">row</option>
  </select>
  <input id="dense" type="checkbox" />
  <label for="dense">dense</label>
</template>

<style lang="scss">
.item1 {
  // grid-area: myArea;
  grid-row: 1 / span 3;
  grid-column: 1/3;
}

.grid-container {
  display: grid;
  // grid:
  //   'myArea myArea . . .'
  //   'myArea myArea . . .';
  grid-template-columns: auto auto auto auto;
  // grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  background-color: #2196f3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

#grid {
  height: 200px;
  width: 200px;
  display: grid;
  gap: 10px;
  grid-template: repeat(4, 1fr) / repeat(2, 1fr);
  grid-auto-flow: column dense; /* or 'row', 'row dense', 'column dense' */

  div {
    color: white;
    font-weight: bold;
    text-align: center;
  }
}

#item1 {
  background-color: lime;
  grid-row-start: 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}

#item4 {
  grid-column-start: 2;
  background-color: red;
}

#item5 {
  background-color: aqua;
}
</style>
