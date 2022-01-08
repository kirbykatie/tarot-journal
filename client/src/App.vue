<template>
  <NavBar/>
  <JournalContainer/>
</template> 

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from './components/NavBar.vue'
import JournalContainer from './components/JournalContainer.vue'


</script>

<style>
body {
  margin: 0;
  font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  background-color: var(--bkgd-color);
}

#app {
  
}

:root {
  --dark-text-color: #1E003D;
  --light-text-color: #fff;
  --bkgd-color: #494368;
  --wands-card: #FFB7FF;
  --wands-bkgd: #FFE9FF;
  --wands-entry: #FFCEFF; 
  --cups-card: #3BF4FB;
  --cups-bkgd: #DAFEFF;
  --cups-entry: #8EEFF2; 
  --swords-card: #F6B060;
  --swords-bkgd: #FBE7D1;
  --swords-entry: #F5D6B3;
  --pentacles-card: #B9FE67;
  --pentacles-bkgd: #EEFFDA;
  --pentacles-entry: #EEFFDA; /*to be updated*/
  --ma-card: #7A28CB;
  --ma-bkgd: #E6CDFF;
  --ma-entry: #E6CDFF; /*to be updated*/
}
</style>
