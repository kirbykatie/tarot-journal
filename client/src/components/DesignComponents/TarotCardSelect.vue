<template>
  <select 
    :value="selectedCardId"
    @input="$emit('update:selectedCardId', Number($event.target.value))"
  >
    <option v-for="card in allCardData" :value="card.id">{{card.name}}</option>
  </select>
</template>

<script>
//TODO: make allCardData the equivilant of the React "context API" so its accessible everywhere
export default {
  inject: ['allCardData'],
  props: {
    selectedCardId: Number,
  }
}
</script>

<style>

</style>