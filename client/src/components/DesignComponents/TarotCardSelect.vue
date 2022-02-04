<template>
  <div class="tarotCardSelect">
    <input
      type="text"
      id="tarotCardInput"
      name="tarotCardInput"
      size="30"
      placeholder="Select a Card"
      :value="displayName"
      @input="onInputChange"
      @focus="displayOptions = true"
      @blur="onInputBlur"
    />
    <div class="displayOptions" v-if="displayOptions">
      <ul>
        <li
          v-for="option in filteredCardData"
          :value="option.id"
          :key="option.id"
          @click="onCardSelected(option.id)"
        >
          {{ option.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//TODO: figure out how to close select dropdown on blur while still capturing the click in the dropdown
export default {
  inject: ["allCardData"],
  props: {
    selectedCardId: Number,
  },
  data() {
    return {
      displayOptions: false,
      filteredCardData: this.allCardData,
      displayCardId: this.selectedCardId,
    };
  },
  computed: {
    displayName() {
      if (this.displayCardId === -1) {
        return "";
      }
      return this.filteredCardData.filter(
        card => card.id === this.displayCardId
      )[0].name;
    },
  },
  methods: {
    onInputChange(e) {
      console.log(e.target.value);
      this.filteredCardData = this.filteredCardData.filter(card =>
        card.name.includes(e.target.value)
      );
    },
    onCardSelected(id) {
      this.$emit("card-selected", id);
      this.displayCardId = id;
      this.displayOptions = false;
    },
    onInputBlur() {
      setTimeout(() => {
        //it no worky
        //this.displayOptions = false;
      }, 100);
    },
  },
};
</script>

<style>
.displayOptions {
  height: 200px;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 215px; /*matches width of text input */
  background-color: bisque;
  padding: 5px 0px;
}
.displayOptions ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.displayOptions li {
  padding: 0 10px;
}
.displayOptions li:hover {
  background-color: coral;
  cursor: pointer;
}
</style>
