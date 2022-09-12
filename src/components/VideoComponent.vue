<template>
  <video class="VideoComponent" controls>
    <source :src="url" type="video/mp4" />
    Your browser does not support HTML video.
  </video>
</template>

<script>
export default {
  name: 'VideoComponent',
  props: {
    url: String
  }
};
</script>

<style>
.VideoComponent {
  min-width: 250px;
}
</style>
