<template>
  <audio
    ref="player"
    :id="playerid"
    style="display: none"
    @canplay="canPlay()"
    @loadedmetadata="initSlider()"
  >
    <source :src="url" type="audio/mpeg" />
  </audio>

  <div class="AudioComponent">
    <AudioComponentActions
      :isPlaying="isPlaying"
      :audioLoaded="audioLoaded"
      @toggle-audio="toggleAudio()"
    />

    <div class="AudioComponent__audioContianer">
      <input min="0" type="range" v-model="playbackTime" :max="audioDuration" />
      <AudioComponentTimer
        :isX2="isX2"
        :totalTime="totalTime()"
        :audioLoaded="audioLoaded"
        :elapsedTime="elapsedTime()"
        @change-speed="changeSpeed()"
      />
    </div>
  </div>
</template>

<script>
import AudioComponentTimer from '@/components/AudioComponent/AudioComponentTimer.vue';
import AudioComponentActions from '@/components/AudioComponent/AudioComponentActions.vue';
export default {
  name: 'AudioComponent',
  props: {
    url: String
  },
  components: {
    AudioComponentTimer,
    AudioComponentActions
  },
  data: () => ({
    isX2: false,
    playbackTime: 0,
    isPlaying: false,
    audioDuration: 100,
    audioLoaded: false,
    playerid: new Date().getTime()
  }),
  methods: {
    initSlider() {
      const AUDIO = this.$refs.player;
      if (AUDIO) {
        this.audioDuration = Math.round(AUDIO.duration);
      }
    },
    convertTime(seconds) {
      const format = (val) => `0${Math.floor(val)}`.slice(-2);
      const minutes = (seconds % 3600) / 60;
      return [minutes, seconds % 60].map(format).join(':');
    },
    totalTime() {
      const AUDIO = this.$refs.player;
      if (AUDIO) {
        return this.convertTime(AUDIO.duration);
      }
      return '00:00';
    },
    elapsedTime() {
      const AUDIO = this.$refs.player;
      if (AUDIO) {
        return this.convertTime(AUDIO.currentTime);
      }
      return '00:00';
    },
    playbackListener() {
      const AUDIO = this.$refs.player;
      this.playbackTime = AUDIO.currentTime;
      AUDIO.addEventListener('ended', this.endListener);
      AUDIO.addEventListener('pause', this.pauseListener);
    },
    pauseListener() {
      this.isPlaying = false;
      this.listenerActive = false;
      this.cleanupListeners();
    },
    endListener() {
      this.isPlaying = false;
      this.listenerActive = false;
      this.cleanupListeners();
    },
    cleanupListeners() {
      const AUDIO = this.$refs.player;
      AUDIO.removeEventListener('ended', this.endListener);
      AUDIO.removeEventListener('pause', this.pauseListener);
      AUDIO.removeEventListener('timeupdate', this.playbackListener);
    },
    toggleAudio() {
      const AUDIO = this.$refs.player;
      if (AUDIO.paused) {
        AUDIO.play();
        this.isPlaying = true;
      } else {
        AUDIO.pause();
        this.isPlaying = false;
      }
    },
    changeSpeed() {
      this.isX2 = !this.isX2;
    },
    canPlay() {
      this.audioLoaded = true;
    }
  },
  watch: {
    isX2() {
      const AUDIO = this.$refs.player;
      if (this.isX2) {
        AUDIO.playbackRate = 2;
      } else {
        AUDIO.playbackRate = 1;
      }
    },
    isPlaying() {
      if (this.isPlaying) {
        const AUDIO = this.$refs.player;
        this.initSlider();
        if (!this.listenerActive) {
          this.listenerActive = true;
          AUDIO.addEventListener('timeupdate', this.playbackListener);
        }
      }
    },
    playbackTime() {
      const diff = Math.abs(this.playbackTime - this.$refs.player.currentTime);
      if (diff > 0.01) {
        this.$refs.player.currentTime = this.playbackTime;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.AudioComponent {
  display: flex;
  align-items: center;
  &__audioContianer {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      height: 20px;
      opacity: 0.7;
      outline: none;
      overflow: hidden;
      border-radius: 8px;
      background: #eee;
      -webkit-appearance: none;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
      &::-webkit-slider-thumb {
        width: 4px;
        height: 20px;
        cursor: pointer;
        appearance: none;
        background: #005a39;
        -webkit-appearance: none;
        box-shadow: -500px 0 0 500px #04aa6d;
      }
      &::-moz-range-thumb {
        width: 4px;
        height: 20px;
        cursor: pointer;
        background: #04aa6d;
        border-radius: 0 8px 8px 0;
      }
      &::-moz-range-progress,
      &::-ms-fill-lower {
        background-color: #04aa6d;
      }
    }
  }
}
</style>
