<template>
  <div class="journal-entry">
    <h3>{{date}}</h3>
    <p>{{entry}}</p>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    entry: String
  }
}
</script>

<style>
.journal-entry {
  position: relative;
  width:100%;
  border-radius: 0 0 15px 15px;
  margin-top: -15px;
  padding: 15px 15px 5px;
  background-color: var(--ma-entry);
}

h3 {
  font-size: 1.5rem;
  margin: 0;
  margin-top: 10px;
}

.journal-entry p {
  margin: 10px 0 15px;
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