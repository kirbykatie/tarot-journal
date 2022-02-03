<template>
  <textarea v-model="text">
    {{text}}
  </textarea>
</template>

<script>
export default {
  props: {
    text: String,
  }
}
</script>

<style>

</style>