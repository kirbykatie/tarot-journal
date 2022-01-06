<script>
import JournalEntry from './JournalEntry.vue';

export default {
  props: {
    journalData: Object,
    allCardData: Array,
  },
  data() {
    return {
      expandEntry: false
    }
  },
  computed: {
    cardData() {
      return this.allCardData.filter(card => card.id === this.journalData.id)[0];
    },
  },
  components: {
    JournalEntry
  }
}
</script>

<template>
  <div class="journal-card-wrapper">
  <div class="journal-card" :id="journalData.id">
    <div class="entry-info">
      <h2>{{journalData.date}}</h2>
      <h3>
        <span v-if="journalData.reversed">Reversed </span>
        {{cardData.name}}
      </h3>
      <p>{{!journalData.reversed ? cardData.upright.keywords : cardData.reversed.keywords}}</p>
      <button v-show="journalData.journalEntry !== null" @click="expandEntry = !expandEntry">
        {{!expandEntry ? "See Journal" : "Close Journal"}}
      </button>
    </div>
    <div class="tarot-card">
      <!--This feels gross and repetitive code...can improve-->
      <!--make it its own component? -->
      <template v-if="cardData.type === 'minor' && cardData.icons.value !== null" >
        <img :src="'./src/assets/icons/' + cardData.icons.value + '.png'" alt="" :class="{ reversed: journalData.reversed }"/>
        <img :src="'./src/assets/icons/' + cardData.icons.suit + '.png'" alt="" :class="{ reversed: journalData.reversed }"/>
      </template>
      <template v-else-if="cardData.type === 'minor'" >
        <span class="tarot-value">{{cardData.valueInt}}</span>
        <img :src="'./src/assets/icons/' + cardData.icons.suit + '.png'" alt="" :class="{ reversed: journalData.reversed }"/>
      </template>
      <template v-else-if="cardData.type === 'major'" >
        <span class="tarot-value">{{cardData.valueInt}}</span>
        <img :src="'./src/assets/icons/circles.png'" alt="" :class="{ reversed: journalData.reversed }"/>
      </template>
    </div>
    </div>
    <JournalEntry v-if="expandEntry" :entry="journalData.journalEntry" />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
.journal-card-wrapper {
  width: 100%;
  background-color: #E2E2E2;
  border-radius: 15px;
  padding: 5px 20px;
  margin-bottom: 20px;
}
.journal-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  
}
.entry-info {
  min-width: 170px;
}
button {
  appearance: none;
  border: 0;
  background-color: initial;
  padding: 0;
  cursor: pointer;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.tarot-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  height: 100%;
  padding: 10px 20px; 
  background-color: #E2C8FF;
  border-radius: 15px;
}
.tarot-card img {
  max-height: 75px;
}
.tarot-card .reversed {
  transform: rotate(180deg);
}
.tarot-value {
  margin: -10px 10px -20px;
  font-family: 'Josefin Sans', Avenir, Helvetica, Arial, sans-serif;
  font-size: 78px;
}
</style>
