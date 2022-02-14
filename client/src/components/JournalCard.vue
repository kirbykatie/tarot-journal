<template>
  <div :class="wrapperClass">
    <div class="journal-card-wrapper">
      <div class="journal-card" :id="journalData.id">
        <TarotGraphic :cardData="cardData" :reversed="journalData.reversed" />
        <div class="entry-info">
          <div class="entry-header">
            <h2>
              <span v-if="journalData.reversed">Reversed </span>
              {{ cardData.name }}
            </h2>
            <div class="date">
              <span class="month">{{ month }}</span>
              <span class="day">{{ day }}</span>
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
            <a
              class="learn-more button"
              href="https://www.biddytarot.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn More</a
            >
            <button
              class="expand-collapse-entry"
              v-if="journalData.journalEntry"
              @click="expandEntry = !expandEntry"
            >
              <img
                v-if="!expandEntry"
                :src="this.icons.eyeClosed"
                alt=""
              />
              <img
                v-else
                :src="this.icons.eyeOpen"
                alt=""
              />
            </button>
            <button v-else class="add-entry">
              <img
                :src="'/' + this.icons.quill"
                alt=""
                @click="showModal = true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <JournalEntry
      v-if="expandEntry"
      :entry="journalData.journalEntry"
      :date="fullDisplayDate"
      @open-modal="showModal = true"
    />
    <Modal v-if="showModal" @close-modal="handleNewJournalClose">
      <EditEntry
        :journalData="journalData"
        @close-modal="showModal = false"
        @delete-entry="handleDeleteEntry"
      />
    </Modal>
  </div>
</template>

<script>
import dayjs from "dayjs";
import JournalEntry from "./JournalEntry.vue";
import TarotGraphic from "./TarotGraphic.vue";
import Modal from "./DesignComponents/Modal.vue";
import AddEntry from "./AddEntry.vue";
import EditEntry from "./EditEntry.vue";
import icons from "../utils/icons.js";

export default {
  inject: ["allJournalData"],
  props: {
    journalData: Object,
    cardData: Object,
  },
  data() {
    return {
      expandEntry: false,
      icons,
      showModal: false,
      modalType: "",
    };
  },
  computed: {
    wrapperClass() {
      return this.cardData.type === "minor"
        ? "journal-card-entry-wrapper " + this.cardData.icons.suit
        : "journal-card-entry-wrapper ma";
    },
    month() {
      return dayjs(this.journalData.date).format("MMM");
    },
    day() {
      return dayjs(this.journalData.date).format("DD");
    },
    fullDisplayDate() {
      return dayjs(this.journalData.date).format("MMM D, YYYY");
    },
  },
  methods: {
    onOpenModal(modalType) {
      this.modalType = modalType;
      this.showModal = true;
    },
    handleNewJournalClose() {
      this.showModal = false;
      if (this.journalData.journalEntry) {
        this.expandEntry = true;
      } else {
        this.expandEntry = false;
      }
    },
    handleDeleteEntry(date) {
      console.log(date);
      this.allJournalData = this.allJournalData.filter(
        card => card.date !== date
      );
    },
  },
  components: {
    JournalEntry,
    TarotGraphic,
    Modal,
    AddEntry,
    EditEntry,
  },
};
</script>

<style scoped>
h2 {
  font-family: "Playfair Display", serif;
  font-size: 2.25rem;
  margin: 0;
}
.journal-card-entry-wrapper {
  margin-bottom: 30px;
}
.journal-card-wrapper {
  position: relative;
  width: 100%;
  background-color: var(--ma-bkgd);
  border-radius: 15px;
  padding: 5px 15px;
  z-index: 2;
  box-shadow: 0px 10px 3px rgba(70, 70, 70, 0.5);
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
.entry-header,
.entry-actions {
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
  background-color: #1e003d;
  color: #fff;
  text-decoration: none;
}
.date {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.date .month {
  font-size: 1.2rem;
}
.date .day {
  margin-top: -12px;
  font-size: 1.8rem;
}

.expand-collapse-entry img,
.add-entry img {
  width: 30px;
  height: 30px;
}

.wands .journal-card-wrapper {
  background-color: var(--wands-bkgd);
}
.cups .journal-card-wrapper {
  background-color: var(--cups-bkgd);
}
.swords .journal-card-wrapper {
  background-color: var(--swords-bkgd);
}
.pentacles .journal-card-wrapper {
  background-color: var(--pentacles-bkgd);
}
</style>
