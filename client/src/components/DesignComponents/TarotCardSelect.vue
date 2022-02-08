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
          @click="onCardSelected(option)"
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
      displayName: "",
    };
  },
  mounted() {
    if (this.selectedCardId !== -1) {
      this.displayName = this.allCardData.filter(
        card => card.id === this.selectedCardId
      )[0].name;
    }
  },
  methods: {
    onInputChange(e) {
      this.displayName = e.target.value;
      this.filteredCardData = this.allCardData.filter(card =>
        card.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    },
    onCardSelected(card) {
      this.$emit("card-selected", card.id);
      this.displayName = card.name;
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
