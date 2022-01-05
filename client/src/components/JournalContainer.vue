<template>
  <div class="journal-container">
    <template v-for="card in cardData" :key="card.id">
      <JournalCard :journalData="card"/>
    </template>
  </div>
</template>

<script>
import getMonthName from '../utils/getMonthName';
import JournalCard from './JournalCard.vue';
export default {
  // props: {
  //   data: Object,
  // },
  data() {
    return {
      cardData: [{
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
    }
  },
  computed: {
    getFormattedDate() {
      const fullDate = new Date(Date.now());
      const month = getMonthName(fullDate.getMonth())
      return `${month} ${fullDate.getDate()}, ${fullDate.getFullYear()}`
    },
    // async cardData() {
    //   const d = await fetch(`http://localhost:8080/cards/`).then(r => r.json());
    //   return d;
    // }
  },
  components: {
    JournalCard,
  }
}
</script>

<style>
  .journal-container {
    width: 550px;
    margin: 0 auto;
  }
</style>