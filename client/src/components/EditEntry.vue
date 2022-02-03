<template>
  <div class="edit-entry">
    <p>Editing Entry</p>
    <form>
      <div>
        <label for="entry"></label>
        <TextEntry 
          name="entry" rows="6" cols="50" 
          :text="journalState.journalEntry.trim()"
          v-model="journalState.journalEntry"
        />
      </div>
      <div>
        <label for="tarot-card-select">Change Card</label>
        <TarotCardSelect
          name="tarot-card-select"
          :selectedCardId="selectedCardId"
          @update:selectedCardId="selectedCardId = $event"
        />
      </div>
    </form>
  </div>
</template>

<script>
import TextEntry from './DesignComponents/TextEntry.vue';
import TarotCardSelect from './DesignComponents/TarotCardSelect.vue';
export default {
  props: {
    journalData: Object,
    cardData: Object,
  },
  data () {
    return {
      journalState: this.journalData,
      selectedCardId: this.journalData.cardId,
    }
  },
  methods: {
    //Add method/watcher/something in Journal Card that if 
    //journalData.cardId changes, it will need to change the 
    //JournalCard's cardData
  },
  components: {
    TextEntry,
    TarotCardSelect,
  }
}
</script>

<style>
  label {
    display: block;
  }
</style>