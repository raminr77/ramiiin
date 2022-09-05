<template>
  <div v-if="imageUrl || videoUrl || audioUrl" class="MessageItemMedia">
    <VideoComponent v-if="!imageUrl && videoUrl && !audioUrl" :url="videoUrl" />
    <AudioComponent v-if="!imageUrl && !videoUrl && audioUrl" :url="audioUrl" />
    <img
      :alt="text"
      loading="lazy"
      :src="imageUrl"
      v-if="imageUrl && !videoUrl && !audioUrl"
    />
  </div>
</template>

<script>
import AudioComponent from '@/components/AudioComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';

export default {
  name: 'MessageItemMedia',
  components: {
    VideoComponent,
    AudioComponent
  },
  props: {
    text: String,
    imageUrl: String,
    videoUrl: String,
    audioUrl: String
  }
};
</script>

<style lang="scss" scoped>
.MessageItemMedia {
  min-width: 100%;
  margin-top: 2px;
  overflow: hidden;
  border-radius: 4px;
  img,
  video,
  audio {
    width: 100%;
  }
}
</style>
