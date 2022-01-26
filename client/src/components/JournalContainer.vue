<template>
  <div class="journal-container" v-if="!loading">
    <template v-for="entry in journalData" :key="entry.date">
      <JournalCard 
        :journalData="entry" 
        :cardData="getCard(entry.cardId)" 
      />
    </template>
  </div>
</template>

<script>
/*eslint-disable vue/no-v-for-template-key*/
import getMonthName from "../utils/getMonthName";
import JournalCard from "./JournalCard.vue";
//import Modal from "./DesignComponents/Modal.vue";
// import AddEntry from "./AddEntry.vue";
// import EditEntry from "./EditEntry.vue";
/* TODO - improve data transfer between App -> JournalContainer -> JournalCard, 
especially with the card data. I dislike sending the entire 78 obj array to each JournalCard to filter 
within the component, only the needed card obj should be sent.
Likely will align with lazy loading so App or JournalContainer only has to generate however many objects for 1 screen
Perhaps JournalContainer could get the 10,15 entries to show & generate 1 object to send to JournalCard?
*/
export default {
  data() {
    return {
      allCardData: [],
      journalData: [],
      loading: true,
    };
  },
  async mounted() {
    this.journalData = await fetch("http://localhost:8080/entries").then(res =>
      res.json()
    );
    //console.log(this.journalData);
    this.allCardData = await fetch("http://localhost:8080/cards").then(res =>
      res.json()
    );
    //console.log(this.cardData);
    this.loading = false;
  },
  methods: {
    getCard(journalId) {
      return this.allCardData.filter(
        card => card.id === journalId
      )[0];
    },
  },
  computed: {
    getFormattedDate() {
      const fullDate = new Date(Date.now());
      const month = getMonthName(fullDate.getMonth());
      return `${month} ${fullDate.getDate()}, ${fullDate.getFullYear()}`;
    },
  },
  components: {
    JournalCard,
  },
};
</script>

<style>
.journal-container {
  width: 600px;
  margin: 0 auto;
}
</style>
