<template>
  <div class="journal-container">
    <template v-for="cardData in data" :key="cardData.id">
      <JournalCard :journalData="cardData"/>
    </template>
  </div>
</template>

<script>
import getMonthName from '../utils/getMonthName';
import JournalCard from './JournalCard.vue';
export default {
  props: {
    data: Object,
  },
  data() {
    return {

    }
  },
  computed: {
    getFormattedDate() {
      const fullDate = new Date(Date.now());
      const month = getMonthName(fullDate.getMonth())
      return `${month} ${fullDate.getDate()}, ${fullDate.getFullYear()}`
    }
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