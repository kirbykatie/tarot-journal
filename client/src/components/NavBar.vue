<template>
  <nav>
    <div class="nav-left">
      <img :src="'./src/assets/svg/' + this.icons.majorArcana"/>
      <h1>Tarot Journal</h1>
    </div>
  </nav>
</template>

<script>
import icons from "../utils/icons.js";
export default {
  data() {
    return {
      icons
    }
  }
}
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    margin-bottom: 20px;
    padding: 0 15px;
    background-color: var(--dark-text-color);
  }
  .nav-left {
    display: flex;
    padding: 5px;
    align-items: center;
  }
  nav h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.25rem; 
    margin: 0;
    color: var(--light-text-color);
  }
  nav img {
    max-height: 80px;
    height: 60px;
    filter: invert(1);
    margin-right: 20px;
  }
</style>