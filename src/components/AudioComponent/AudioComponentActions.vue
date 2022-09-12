<template>
  <div class="AudioComponentActions">
    <button
      v-show="!isPlaying"
      @click="toggleAudio()"
      :class="{
        ['AudioComponentActions__loaded']: audioLoaded,
        ['AudioComponentActions__loading']: !audioLoaded
      }"
    >
      <img alt="Play" src="../../assets/images/play.svg" />
    </button>
    <button v-show="isPlaying" @click="toggleAudio()">
      <img alt="Pause" src="../../assets/images/pause.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'AudioComponentActions',
  props: {
    isPlaying: Boolean,
    audioLoaded: Boolean
  },
  methods: {
    toggleAudio() {
      this.$emit('toggle-audio');
    }
  }
};
</script>

<style lang="scss" scoped>
.AudioComponentActions {
  margin-right: 6px;
  button {
    width: 40px;
    height: 40px;
    border: none;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__loaded {
    opacity: 1;
    pointer-events: all;
  }
  &__loading {
    opacity: 0.4;
    pointer-events: none;
  }
}
</style>
