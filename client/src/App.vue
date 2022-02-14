<template>
  <div>
    <NavBar @open-modal="modalOpen = true" />
    <div v-if="!loading && !error">
      <JournalContainer />
      <Modal v-if="modalOpen" @close-modal="modalOpen = false">
        <AddEntry @new-entry="onNewEntry" @close-modal="modalOpen = false" />
      </Modal>
    </div>
    <div v-if="!loading && error">
      <p>Sorry, no data found!</p>
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, onMounted, provide } from "vue";
import NavBar from "./components/NavBar.vue";
import JournalContainer from "./components/JournalContainer.vue";
import Modal from "./components/DesignComponents/Modal.vue";
import AddEntry from "./components/AddEntry.vue";

//Reactive values
const allJournalData = ref([]);
const allCardData = ref([]);
const loading = ref(true);
const error = ref(false);
const modalOpen = ref(false);

//Lifecycle Methods
onMounted(() => {
  console.log("app is mounted");
  fetch("https://us-central1-tarot-journal-512.cloudfunctions.net/webApi/api/entries")
    .then(res => res.json())
    .then(data => {
      allJournalData.value = data;
      fetch("https://us-central1-tarot-journal-512.cloudfunctions.net/webApi/api/cards")
        .then(res => res.json())
        .then(data => {
          allCardData.value = data;
          loading.value = false
        })
    })
    .catch(error => {
      console.error(error)
      error.value = true;
      loading.value = false
    })
});

provide("allCardData", allCardData);
provide("allJournalData", allJournalData);

const onNewEntry = newEntry => {
  allJournalData.value.push(newEntry);
  allJournalData.value.sort((a, b) => a.date - b.date).reverse();
};
</script>

<style>
body {
  margin: 0;
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  background-color: var(--bkgd-color);
}

button {
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
}

:root {
  --dark-text-color: #1e003d;
  --light-text-color: #fff;
  --bkgd-color: #494368;
  --wands-card: #ffb7ff;
  --wands-bkgd: #ffe9ff;
  --wands-entry: #ffceff;
  --cups-card: #3bf4fb;
  --cups-bkgd: #dafeff;
  --cups-entry: #8eeff2;
  --swords-card: #f6b060;
  --swords-bkgd: #fbe7d1;
  --swords-entry: #f5d6b3;
  --pentacles-card: #b9fe67;
  --pentacles-bkgd: #eeffda;
  --pentacles-entry: #eeffda; /*to be updated*/
  --ma-card: #7a28cb;
  --ma-bkgd: #e6cdff;
  --ma-entry: #e6cdff; /*to be updated*/
}
</style>
