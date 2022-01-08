<script>
import icons from "../utils/icons.js";
export default {
  props: {
    cardData: Object,
    reversed: Boolean
  },
  data() {
    return {
      icons
    }
  }
}
</script>

<template>
<div class="tarot-card">
  <!--This feels gross and repetitive code...can improve-->

  <template
    v-if="cardData.type === 'minor' && cardData.icons.value !== null"
  >
    <img
      :src="'./src/assets/svg/' + this.icons[cardData.icons.value]"
      alt=""
      :class="{ reversed: reversed }"
    />
    <img
      :src="'./src/assets/svg/' + this.icons[cardData.icons.suit]"
      alt=""
      :class="{ reversed: reversed }"
    />
  </template>
  <template v-else-if="cardData.type === 'minor'">
    <span class="tarot-value">{{ cardData.valueInt }}</span>
    <img
      :src="'./src/assets/svg/' + this.icons[cardData.icons.suit]"
      alt=""
      :class="{ reversed: reversed }"
    />
  </template>
  <template v-else-if="cardData.type === 'major'">
    <span class="tarot-value">{{ cardData.valueInt }}</span>
    <img
      :src="'./src/assets/icons/circles.png'"
      alt=""
      :class="{ reversed: reversed }"
    />
  </template>
</div>
</template>

<style>
.tarot-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  min-height: 150px;
  padding: 10px 20px;
  background-color: #e2c8ff;
  border-radius: 15px;
  margin-right: 20px;
}
.tarot-card img {
  max-height: 75px;
}
.tarot-card .reversed {
  transform: rotate(180deg);
}
.tarot-value {
  margin: -10px 10px -20px;
  font-family: "Josefin Sans", Avenir, Helvetica, Arial, sans-serif;
  font-size: 78px;
}
</style>

