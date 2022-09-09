<template>
  <div v-if="showModal" @click.stop.prevent="togglePauseStory()" class="StoryModal">
    <button class="StoryModal__closeButton" @click="closeModal">
      <svg viewBox="0 0 24 24" width="24" height="24" class="">
        <path
          fill="#fff"
          d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z"
        ></path>
      </svg>
    </button>
    <img alt="Ramiiin Story" :src="`./images/story/story-${selectedStoryImage}.jpg`" />
    <div class="StoryModal__timerContainer">
      <div
        class="StoryModal__timer"
        :style="{
          width: `${100 - (remainingTime * 100) / 5000}%`
        }"
      ></div>
    </div>
  </div>
</template>

<script>
const IMAGE_COUNT = 3;
const INTERVAL_TIME = 100;
export default {
  name: 'StoryModal',
  props: {
    showModal: Boolean
  },
  data: (instance) => ({
    time: 5000,
    timeRef: null,
    isPause: false,
    remainingTime: 5000,
    selectedStoryImage: '01',
    startTime: instance.getCurrentTime()
  }),
  mounted() {
    this.selectedStoryImage = this.getImageNumber();
    this.setTime();
  },
  watch: {
    isPause(newState) {
      if (newState) {
        clearInterval(this.timeRef);
      } else {
        this.setTime();
      }
    }
  },
  methods: {
    getImageNumber(firstImage = 1) {
      const SELECTED_IMAGE =
        '' + Math.floor(Math.random() * (IMAGE_COUNT - firstImage + 1) + firstImage);
      return SELECTED_IMAGE.length === 1 ? '0' + SELECTED_IMAGE : SELECTED_IMAGE;
    },
    closeModal() {
      this.$emit('close-modal');
      clearInterval(this.timeRef);
    },
    togglePauseStory() {
      this.isPause = !this.isPause;
    },
    getCurrentTime() {
      return new Date().getTime();
    },
    calculateRemainingTime() {
      return this.time - (this.getCurrentTime() - this.startTime);
    },
    setTime() {
      this.time = this.remainingTime;
      this.startTime = this.getCurrentTime();
      this.timeRef = setInterval(() => {
        const currentRemainingTime = this.calculateRemainingTime();
        if (currentRemainingTime > -220) {
          this.remainingTime = currentRemainingTime;
        } else {
          this.closeModal();
        }
      }, INTERVAL_TIME);
    }
  }
};
</script>

<style lang="scss" scoped>
.StoryModal {
  top: 0;
  left: 50%;
  width: 100%;
  z-index: 1;
  height: 100vh;
  padding: 16px;
  color: #fff;
  max-width: 600px;
  overflow: hidden;
  max-height: 100vh;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
  }
  &__closeButton {
    top: 30px;
    left: 16px;
    z-index: 2;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    position: absolute;
    background-color: transparent;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
  &__timerContainer {
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.4);
  }
  &__timer {
    height: 3px;
    will-change: width;
    animation-delay: 0;
    background-color: #fff;
    transition: width 0.3s linear;
  }
}
</style>
