<template>
  <div @click="$emit('close-modal')" class="ProfileModal__overlay" v-if="showModal">
    <div @click.stop.prevent="null" class="ProfileModal__content">
      <div class="ProfileModal__header">
        <h3>More Info</h3>
        <button @click="$emit('close-modal')">
          <svg viewBox="0 0 24 24" width="24" height="24" class="">
            <path
              fill="#fff"
              d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="ProfileModal__body">
        ax
        <div class="ProfileModal__row">
          <p>
            گاهی باید دل کند
            <br />
            از هر آنچه احساس میکنی زیباست
          </p>
        </div>
        <div class="ProfileModal__row">
          <a href="tel:+989930600012">+989930600012</a>
        </div>
        <div class="ProfileModal__row">
          <a href="mailto:info@ramiiin.ir">Info@Ramiiin.ir</a>
        </div>
        <div class="ProfileModal__row"></div>
        <div class="ProfileModal__row"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileModal',
  props: {
    showModal: Boolean
  }
};
</script>

<style lang="scss" scoped>
.ProfileModal {
  &__overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    position: fixed;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    background-color: rgba(20, 30, 30, 0.1);
  }
  &__content {
    top: 40%;
    left: 50%;
    width: 90%;
    padding: 16px;
    color: #fff;
    max-width: 500px;
    overflow-y: auto;
    min-height: 300px;
    max-height: 500px;
    position: absolute;
    border-radius: 4px;
    background-color: #1f2c33;
    transform: translate(-50%, -40%);
  }
  &__header {
    width: 100%;
    display: flex;
    margin-bottom: 8px;
    align-content: center;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    h3 {
      line-height: 40px;
      font-weight: bold;
    }
    button {
      width: 40px;
      height: 40px;
      border: none;
      outline: none;
      color: #fff;
      cursor: pointer;
      background-color: transparent;
    }
  }
  &__body {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  &__row {
    display: flex;
    padding: 8px 0;
    line-height: 30px;
    align-content: center;
    justify-content: flex-start;
    border-bottom: 1px solid #888888;
  }
}
</style>
