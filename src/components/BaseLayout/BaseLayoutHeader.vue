<template>
  <StoryModal
    v-if="showStoryModal"
    @close-modal="closeStoryModal"
    :showModal="showStoryModal"
  />
  <ProfileModal @close-modal="closeModal" :showModal="showModal" />
  <header class="BaseLayoutHeader">
    <img
      alt="Ramiiin"
      @click="showStory()"
      class="BaseLayoutHeader__profile"
      :src="`./images/profile/profile-${profileImage}.jpg`"
      :class="{ ['BaseLayoutHeader__profile--hasStory']: $store.state.hasNewStory }"
    />
    <div @click="openModal()" class="BaseLayoutHeader__name">
      <h1>Ram</h1>
      <span>{{ $store.state.isTyping ? 'typing ...' : 'Online' }}</span>
    </div>
    <div @click="toggleFullScreen()" class="BaseLayoutHeader__moreBtn">
      <img
        v-if="isFullScreen"
        alt="Go Out Full Screen"
        src="../../assets/images/out-fullscreen.svg"
      />
      <img v-else alt="Go In Full Screen" src="../../assets/images/in-fullscreen.svg" />
    </div>
  </header>
</template>

<script>
import { STORE } from '@/store';
import StoryModal from '@/components/StoryModal/StoryModal.vue';
import ProfileModal from '@/components/ProfileModal/ProfileModal.vue';
import {
  GoInFullscreen,
  GoOutFullscreen,
  IsFullScreenCurrently
} from '@/utils/fullScreen';
export default {
  name: 'BaseLayoutHeader',
  components: { ProfileModal, StoryModal },
  data: () => ({
    showModal: false,
    profileImage: '01',
    isFullScreen: false,
    showStoryModal: false
  }),
  methods: {
    closeModal() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
    },
    showStory() {
      this.showStoryModal = true;
      STORE.commit('seeNewStoryMutations');
    },
    closeStoryModal() {
      this.showStoryModal = false;
    },
    toggleFullScreen() {
      if (IsFullScreenCurrently()) {
        GoOutFullscreen();
        this.isFullScreen = false;
      } else {
        const APP = document.querySelector('#app');
        this.isFullScreen = true;
        GoInFullscreen(APP);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.BaseLayoutHeader {
  top: 0;
  width: 100%;
  display: flex;
  cursor: pointer;
  position: sticky;
  max-height: 62px;
  user-select: none;
  padding: 10px 16px;
  align-items: center;
  background: #111b21;
  border-bottom: 2px solid #000;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);

  &__name {
    width: 100%;
    display: flex;
    color: #fff;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 18px;
      line-height: 20px;
      font-weight: bolder;
      font-family: VazirmatnBold;
    }
    span {
      font-size: 10px;
    }
  }
  &__profile {
    width: 42px;
    height: 42px;
    margin-right: 16px;
    border-radius: 100%;
    border: 2px solid transparent;
    &--hasStory {
      border-color: #00d363;
      animation: bilink 2s infinite ease;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
  &__moreBtn {
    width: 42px;
    height: 42px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    img {
      width: 24px;
      height: 24px;
    }
  }
}
@keyframes bilink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}
</style>
