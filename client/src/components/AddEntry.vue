<template>
  <div class="add-entry">
    <p>Adding Entry</p>
    <form>
      <div>
        <input
          type="date"
          name="date-select"
          id="date-select"
          :value="displayDate"
          @input="onDateSelect"
        />
      </div>
      <div class="flex">
        <input
          type="checkbox"
          name="reversedCheck"
          :value="localEntry.reversed"
          v-model="localEntry.reversed"
        />
        <label for="reversedCheck">Reversed?</label>
      </div>
      <div>
        <label for="tarot-card-select">Choose Card</label>
        <TarotCardSelect
          :selectedCardId="localEntry.cardId"
          @card-selected="updateCardId"
          name="tarot-card-select"
        />
      </div>
      <div>
        <label for="entry">Journal Entry</label>
        <TextEntry
          name="entry"
          rows="6"
          cols="50"
          :text="localEntry.journalEntry ? localEntry.journalEntry.trim() : ''"
          v-model="localEntry.journalEntry"
        />
      </div>
      <button @click="submitEntry">Done</button>
    </form>
  </div>
</template>

<script>
import dayjs from "dayjs";
import TarotCardSelect from "./DesignComponents/TarotCardSelect.vue";
import TextEntry from "./DesignComponents/TextEntry.vue";

export default {
  //props: ["newEntry"],
  data() {
    return {
      localEntry: {
        date: dayjs().valueOf(),
        cardId: -1,
        journalEntry: "",
        reversed: false,
      },
    };
  },
  mounted() {
    console.log(this.localEntry.date);
  },
  computed: {
    displayDate() {
      return dayjs(this.localEntry.date).format("YYYY-MM-DD");
    },
  },
  methods: {
    onDateSelect(e) {
      this.localEntry.date = dayjs(e.target.value).valueOf();
    },
    updateCardId(selectedId) {
      this.localEntry.cardId = selectedId;
    },
    submitEntry(e) {
      e.preventDefault();
      //TODO: validate that date & cardId has data before new-entry event
      this.$emit("new-entry", this.localEntry);
      this.$emit("close-modal");
    },
  },
  components: { TarotCardSelect, TextEntry },
};
</script>

<style></style>
