<template>
  <div class="modal-wrapper">
    <div class="modal-container">
      <section class="modal">
        {{copy}}
      </section>
    </div>
  </div>
</template>

<script>
//TODO: Modal should only be rendered if parent's state says so
//Figure out how to send back to parent that modal should be closed 
//when user clicks close within the modal
export default {
  props: {
    copy: String
  },
}
</script>

<style>
.modal-wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99999;
}
.modal-container {
  max-width: 800px;
  width: 100%;
  height: 500px;
  padding: 20px;
  background: #fff;
}

</style>