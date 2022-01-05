<template>
  <JournalContainer :data="dummyData"/>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import JournalContainer from './components/JournalContainer.vue'

const dummyData = [{
  id: "swkn",  //switching to unique int value in future
  reversed: false,
  date: "Jan 5, 2021", //turn this into a Date obj
  journalEntry: "Chupa chups pie brownie gingerbread candy liquorice powder cupcake soufflé. Apple pie pudding biscuit candy canes macaroon. Caramels gingerbread danish chupa chups cupcake lemon drops jelly beans.",
},{
  id: "cu05",
  reversed: true,
  date: "Jan 4, 2021",
  journalEntry: null
},{
  id: "wa07",
  reversed: false,
  date: "Jan 3, 2021",
  journalEntry: "Lollipop candy canes oat cake dragée sugar plum sweet roll apple pie cookie fruitcake. Biscuit icing chupa chups tart powder caramels. Sugar plum candy canes cookie cake jelly-o. Apple pie biscuit pudding dragée wafer.\nCake sesame snaps bonbon lemon drops fruitcake. Dessert muffin biscuit candy canes gingerbread. Cheesecake liquorice topping sweet roll cupcake shortbread toffee sugar plum.",
},{
  id: "ma08",
  reversed: true,
  date: "Jan 2, 2021",
  journalEntry: null,
},{
  id: "ma22",
  reversed: false,
  date: "Jan 1, 2021",
  journalEntry: null,
},]

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
