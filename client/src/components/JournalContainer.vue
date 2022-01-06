<template>
  <div class="journal-container" v-if="!loading">
    <template v-for="entry in journalData" :key="entry.date">
      <JournalCard :journalData="entry" :allCardData="cardData"/>
    </template>
  </div>
</template>

<script>
/*eslint-disable vue/no-v-for-template-key*/
import getMonthName from '../utils/getMonthName';
import JournalCard from './JournalCard.vue';
/* TODO - improve data transfer between App -> JournalContainer -> JournalCard, 
especially with the card data. I dislike sending the entire 78 obj array to each JournalCard to filter 
within the component, only the needed card obj should be sent.
Likely will align with lazy loading so App or JournalContainer only has to generate however many objects for 1 screen
Perhaps JournalContainer could get the 10,15 entries to show & generate 1 object to send to JournalCard?
*/
export default {
  data() {
    return {
      cardData: [],
      journalData: [],
      loading: true,
    }
  },
  async mounted() {
    this.journalData = await fetch("http://localhost:8080/entries")
      .then(res => res.json())
    console.log(this.journalData)
    this.cardData = await fetch("http://localhost:8080/cards")
      .then(res => res.json())
    console.log(this.cardData)
    this.loading = false;
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