<template>
  <div class="AudioComponentTimer">
    <div v-show="!audioLoaded" class="AudioComponentTimer__audioTimer">Loading...</div>
    <div v-show="audioLoaded" class="AudioComponentTimer__audioTimer">
      <div v-text="elapsedTime"></div>
      <div class="x-space">-</div>
      <div v-text="totalTime"></div>
    </div>
    <button
      v-show="audioLoaded"
      @click="changeSpeed()"
      class="AudioComponentTimer__audioSpeed"
    >
      {{ isX2 ? 'x1' : 'x2' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'AudioComponentTimer',
  props: {
    isX2: Boolean,
    totalTime: String,
    elapsedTime: String,
    audioLoaded: Boolean
  },
  methods: {
    changeSpeed() {
      this.$emit('change-speed');
    }
  }
};
</script>

<style lang="scss" scoped>
.AudioComponentTimer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__audioTimer {
    width: 100%;
    display: flex;
    margin-top: 8px;
    font-size: 12px;
    line-height: 20px;
    user-select: none;
    align-items: center;
    .x-space {
      margin: 0 4px;
    }
  }
  &__audioSpeed {
    width: 40px;
    height: 20px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    background-color: transparent;
  }
}
</style>
