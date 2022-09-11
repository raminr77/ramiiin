<template>
  <audio style="display: none" ref="player" :id="playerid">
    <source :src="url" type="audio/mpeg" />
  </audio>
  <!-- custom -->
  <div class="AudioComponent">
    <!-- Actions -->
    <div class="AudioComponent__actionButtonContianer">
      <button
        v-show="!isPlaying"
        @click="toggleAudio()"
        :class="{
          ['AudioComponent__actionButtonContianer--loaded']: audioLoaded,
          ['AudioComponent__actionButtonContianer--loading']: !audioLoaded
        }"
      >
        <img alt="Play" src="../assets/images/play.svg" />
      </button>
      <button v-show="isPlaying" @click="toggleAudio()">
        <img alt="Pause" src="../assets/images/pause.svg" />
      </button>
    </div>
    <!-- Bar -->
    <div class="AudioComponent__audioContianer">
      <input min="0" type="range" v-model="playbackTime" :max="audioDuration" />
      <!-- Timer & Speed -->
      <div class="AudioComponent__audioFooter">
        <div v-show="!audioLoaded" class="AudioComponent__audioTimer">Loading...</div>
        <div v-show="audioLoaded" class="AudioComponent__audioTimer">
          <div v-text="elapsedTime()"></div>
          <div class="x-space">-</div>
          <div v-text="totalTime()"></div>
        </div>
        <button class="AudioComponent__audioSpeed" @click="changeSpeed()">
          {{ isX2 ? 'x1' : 'x2' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: String
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
      var audio = this.$refs.player;
      if (audio) {
        this.audioDuration = Math.round(audio.duration);
      }
    },
    convertTime(seconds) {
      const format = (val) => `0${Math.floor(val)}`.slice(-2);
      var minutes = (seconds % 3600) / 60;
      return [minutes, seconds % 60].map(format).join(':');
    },
    totalTime() {
      var audio = this.$refs.player;
      if (audio) {
        var seconds = audio.duration;
        return this.convertTime(seconds);
      }
      return '00:00';
    },
    elapsedTime() {
      var audio = this.$refs.player;
      if (audio) {
        var seconds = audio.currentTime;
        return this.convertTime(seconds);
      }
      return '00:00';
    },
    playbackListener() {
      var audio = this.$refs.player;
      this.playbackTime = audio.currentTime;
      audio.addEventListener('ended', this.endListener);
      audio.addEventListener('pause', this.pauseListener);
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
      var audio = this.$refs.player;
      audio.removeEventListener('timeupdate', this.playbackListener);
      audio.removeEventListener('ended', this.endListener);
      audio.removeEventListener('pause', this.pauseListener);
    },
    toggleAudio() {
      var audio = this.$refs.player;
      if (audio.paused) {
        audio.play();
        this.isPlaying = true;
      } else {
        audio.pause();
        this.isPlaying = false;
      }
    },
    changeSpeed() {
      this.isX2 = !this.isX2;
    }
  },
  mounted() {
    this.$nextTick(function () {
      var audio = this.$refs.player;
      audio.addEventListener(
        'loadedmetadata',
        function () {
          this.initSlider();
        }.bind(this)
      );
      audio.addEventListener(
        'canplay',
        function () {
          this.audioLoaded = true;
        }.bind(this)
      );
      this.$watch('isX2', function () {
        var audio = this.$refs.player;
        if (this.isX2) {
          audio.playbackRate = 2;
        } else {
          audio.playbackRate = 1;
        }
      });
      this.$watch('isPlaying', function () {
        if (this.isPlaying) {
          var audio = this.$refs.player;
          this.initSlider();
          if (!this.listenerActive) {
            this.listenerActive = true;
            audio.addEventListener('timeupdate', this.playbackListener);
          }
        }
      });
      this.$watch('playbackTime', function () {
        var diff = Math.abs(this.playbackTime - this.$refs.player.currentTime);
        if (diff > 0.01) {
          this.$refs.player.currentTime = this.playbackTime;
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.AudioComponent {
  display: flex;
  align-items: center;
  &__actionButtonContianer {
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
    &--loaded {
      opacity: 1;
      pointer-events: all;
    }
    &--loading {
      opacity: 0.4;
      pointer-events: none;
    }
  }
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
        background: #04aa6d;
        -webkit-appearance: none;
        border-radius: 0 8px 8px 0;
        box-shadow: -80px 0 0 80px #04aa6d;
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
  &__audioFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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
    font-weight: bold;
    background-color: transparent;
  }
}
</style>
