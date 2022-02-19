<template>
  <nav>
    <div class="nav-left">
      <img :src="mainIcon" />
      <h1>Tarot Journal</h1>
    </div>
    <div class="nav-right">
      <button class="nav-button" @click="$emit('open-modal', 'add')">
        Add New
      </button>
    </div>
  </nav>
</template>

<script>
import mainIcon from "../assets/svg/major-arcana.svg";
export default {
  data() {
    return {
      mainIcon,
    };
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  background-color: var(--dark-text-color);
}
.nav-left,
.nav-right {
  display: flex;
  padding: 0px 20px;
  align-items: center;
}
nav h1 {
  font-family: "Playfair Display", serif;
  font-size: 2.25rem;
  margin: 0;
  margin-bottom: 2px;
  color: var(--light-text-color);
}
nav img {
  max-height: 80px;
  height: 60px;
  filter: invert(1);
  margin-right: 20px;
}
.nav-button {
  background-color: var(--ma-card);
  color: var(--light-text-color);
  padding: 5px 20px;
  border-radius: 10px;
  font-size: 1.25rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
</style>
