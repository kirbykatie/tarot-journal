<template>
  <div class="modal-wrapper">
    <div class="modal-container">
      <section class="modal">
        <button @click="$emit('close-modal')" class="close-button">
          <img :src="closeIcon" alt="Close Modal" />
        </button>
        <!--Child component inserted here-->
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<script>
import closeIcon from "../../assets/svg/close.svg";
export default {
  data() {
    return {
      closeIcon,
    };
  },
  methods: {},
};
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
  overflow-y: auto;
}

.modal {
  position: relative;
}

.modal .close-button {
  position: absolute;
  right: -1px;
  top: -15px;
}
.modal .close-button img {
  width: 20px;
  height: 20px;
}
</style>
