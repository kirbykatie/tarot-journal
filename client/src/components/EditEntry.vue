<template>
  <div class="edit-entry">
    <p>Editing Entry</p>
    <form>
      <div>
        <label for="entry"></label>
        <TextEntry
          name="entry"
          rows="6"
          cols="50"
          :text="
            journalState.journalEntry ? journalState.journalEntry.trim() : ''
          "
          v-model="journalState.journalEntry"
        />
      </div>
      <div>
        <label for="tarot-card-select">Choose Card</label>
        <TarotCardSelect
          name="tarot-card-select"
          :selectedCardId="journalState.cardId"
          @card-selected="updateCard"
        />
      </div>
      <div class="flex">
        <input
          type="checkbox"
          name="reversedCheck"
          :value="journalState.reversed"
          v-model="journalState.reversed"
        />
        <label for="reversedCheck">Reversed?</label>
      </div>
      <div class="flex">
        <button @click="$emit('close-modal')">Done</button>
        <button @click="onDeleteEntry">Delete Entry</button>
      </div>
    </form>
  </div>
</template>

<script>
import TextEntry from "./DesignComponents/TextEntry.vue";
import TarotCardSelect from "./DesignComponents/TarotCardSelect.vue";
export default {
  props: {
    journalData: Object,
  },
  data() {
    return {
      journalState: this.journalData,
    };
  },
  methods: {
    //Add method/watcher/something in Journal Card that if
    //journalData.cardId changes, it will need to change the
    //JournalCard's cardData
    updateCard(id) {
      //TODO: can i turn this into inline?
      console.log(id);
      this.journalState.cardId = id;
    },
    onDeleteEntry(e) {
      e.preventDefault();
      this.$emit("delete-entry", this.journalState.date);
      this.$emit("close-modal");
    },
  },
  components: {
    TextEntry,
    TarotCardSelect,
  },
};
</script>

<style>
label {
  display: block;
}
form > div {
  margin-bottom: 30px;
}
.flex {
  display: flex;
  align-items: center;
}
</style>
