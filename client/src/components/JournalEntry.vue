<template>
  <div class="journal-entry">
    <div class="journal-entry__header">
      <h3>{{ date }}</h3>
      <button class="edit-entry">
        <img
          :src="quillIcon"
          alt=""
          @click="$emit('open-modal')"
        />
      </button>
    </div>
    <p>{{ entry }}</p>
  </div>
</template>

<script>
//import icons from "../utils/icons.js";
import quillIcon from "../assets/svg/quill.svg"

export default {
  props: {
    date: String,
    entry: String,
  },
  data() {
    return {
      quillIcon,
    };
  },
};
</script>

<style>
.journal-entry {
  position: relative;
  width: 100%;
  border-radius: 0 0 15px 15px;
  margin-top: -15px;
  padding: 15px 15px 5px;
  background-color: var(--ma-entry);
}
.journal-entry__header {
  display: flex;
  margin-top: 15px;
}

h3 {
  font-size: 1.5rem;
  margin: 0;
}

.journal-entry p {
  margin: 10px 0 15px;
}

.edit-entry {
  margin-left: 10px;
}

.edit-entry img {
  width: 30px;
  height: 30px;
}

.wands .journal-entry {
  background-color: var(--wands-entry);
}
.cups .journal-entry {
  background-color: var(--cups-entry);
}
.swords .journal-entry {
  background-color: var(--swords-entry);
}
.pentacles .journal-entry {
  background-color: var(--pentacles-entry);
}
</style>
