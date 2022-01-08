<script>
import JournalEntry from "./JournalEntry.vue";
import TarotGraphic from "./TarotGraphic.vue";

export default {
  props: {
    journalData: Object,
    allCardData: Array,
  },
  data() {
    return {
      expandEntry: false,
    };
  },
  computed: {
    cardData() {
      return this.allCardData.filter(
        card => card.id === this.journalData.cardId
      )[0];
    }
  },
  components: {
    JournalEntry,
    TarotGraphic,
  },
};
</script>

<template>
  <div class="journal-card-wrapper">
    <div class="journal-card" :id="journalData.id">
      <!--make it its own component? -->
      <TarotGraphic :cardData="cardData" :reversed="journalData.reversed"/>
      <div class="entry-info">
        <div class="entry-header">
          <h2>
            <span v-if="journalData.reversed">Reversed </span>
            {{ cardData.name }}
          </h2>
          <div class="date">
            <span class="month">Jan</span>
            <span class="day">05</span>
          </div>
        </div>
        <p>
          {{
            !journalData.reversed
              ? cardData.upright.keywords
              : cardData.reversed.keywords
          }}
        </p>
        <div class="entry-actions">
          <a class="learn-more button" href="https://www.biddytarot.com/"
            rel="noopener noreferrer" target="_blank"
          >
            Learn More</a>
          <button
            class="expand-collapse-entry"
            v-show="journalData.journalEntry !== null"
            @click="expandEntry = !expandEntry"
          >
            {{ !expandEntry ? "See Journal" : "Close Journal" }}
          </button>
        </div>
        
      </div>
    </div>
    <JournalEntry v-if="expandEntry" :entry="journalData.journalEntry" />
  </div>
</template>

<style scoped>
h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  margin: 0;
}
a {
  color: #42b983;
}
.journal-card-wrapper {
  width: 100%;
  background-color: #e2e2e2;
  border-radius: 15px;
  padding: 5px 15px;
  margin-bottom: 20px;
}
.journal-card {
  display: flex;
  align-items: center;
  height: 180px;
}
.entry-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 170px;
  padding: 10px 0 20px;
}
.entry-info p {
  margin: 0;
  margin-bottom: 15px;
}
.entry-header, .entry-actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
button {
  appearance: none;
  border: 0;
  background-color: initial;
  padding: 0;
  cursor: pointer;
}
.button {
  padding: 5px 10px;
  border-radius: 25px;
  background-color: #1E003D;
  color: #fff;
  text-decoration: none;
}

</style>
