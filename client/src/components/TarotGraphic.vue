<script>
import cupsIcon from "../assets/svg/cups.svg";
import kingIcon from "../assets/svg/king.svg";
import knightIcon from "../assets/svg/knight.svg";
import majorArcanaIcon from "../assets/svg/major-arcana.svg";
import pageIcon from "../assets/svg/page.svg";
import pentaclesIcon from "../assets/svg/pentacles.svg";
import queenIcon from "../assets/svg/queen.svg";
import swordsIcon from "../assets/svg/swords.svg";
import wandsIcon from "../assets/svg/wands.svg";
export default {
  props: {
    cardData: Object,
    reversed: Boolean
  },
  data() {
    return {
      cupsIcon,
      kingIcon,
      knightIcon,
      majorArcanaIcon,
      pageIcon,
      pentaclesIcon,
      queenIcon,
      swordsIcon,
      wandsIcon
    }
  },
  computed: {
    faceIcon () {
      switch (this.cardData.icons.value) {
        case "a":
          return majorArcanaIcon
        case "page":
          return pageIcon
        case "knight": 
          return knightIcon
        case "queen":
          return queenIcon
        case "king": 
          return kingIcon
      }
    },
    suitIcon () {
      switch (this.cardData.icons.suit) {
        case "wands":
          return wandsIcon
        case "cups": 
          return cupsIcon
        case "swords":
          return swordsIcon
        case "pentacles":
          return pentaclesIcon
      }
    }
  },
}
</script>

<template>
<div class="tarot-card">
  <!--This feels gross and repetitive code...can improve-->

  <template
    v-if="cardData.type === 'minor' && cardData.icons.value !== null"
  >
    <img
      :src="faceIcon"
      alt=""
      :class="{ reversed: reversed }"
    />
    <img
      :src="suitIcon"
      alt=""
      :class="{ reversed: reversed }"
    />
  </template>
  <template v-else-if="cardData.type === 'minor'">
    <span class="tarot-value">{{ cardData.valueInt }}</span>
    <img
      :src="suitIcon"
      alt=""
      :class="{ reversed: reversed }"
    />
  </template>
  <template v-else-if="cardData.type === 'major'">
    <span class="tarot-value">{{ cardData.valueInt }}</span>
    <img
      :src="majorArcanaIcon"
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
  width: 130px;
  min-height: 150px;
  padding: 10px 20px;
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

.ma .tarot-card {
  background-color: var(--ma-card);
  color: var(--light-text-color);
}
.ma .tarot-card img {
  filter: invert(1);
}
.wands .tarot-card {
  background-color: var(--wands-card);
}
.cups .tarot-card {
  background-color: var(--cups-card);
}
.swords .tarot-card {
  background-color: var(--swords-card);
}
.pentacles .tarot-card {
  background-color: var(--pentacles-card);
}
</style>

