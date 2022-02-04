<template>
  <div class="journal-container">
    <template v-for="entry in journalData" :key="entry.date">
      <JournalCard :journalData="entry" :cardData="getCard(entry.cardId)" />
    </template>
  </div>
</template>

<script>
/*eslint-disable vue/no-v-for-template-key*/
import { computed } from "vue";
import getMonthName from "../utils/getMonthName";
import JournalCard from "./JournalCard.vue";
/* TODO - 
Add pagination or lazy loading - get 10-15 journal entries at a time
*/
export default {
  inject: ["allCardData"],
  props: ["journalData"],
  methods: {
    getCard(journalId) {
      return this.allCardData.filter(card => card.id === journalId)[0];
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
