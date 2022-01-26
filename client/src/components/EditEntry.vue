<template>
  <div class="edit-entry">
    <p>Editing Entry</p>
    <form>
      <label for="entry"></label>
      <textarea name="entry">
        {{journalState.journalEntry}}
      </textarea>
      
    </form>
  </div>
</template>

<script>
export default {
  props: {
    journalData: Object,
    cardData: Object,
  },
  data () {
    return {
      journalState: this.journalData,
    }
  },
}
</script>

<style>

</style>