<template>
  <audio v-if="!url" controls>
    <source :src="url" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</template>

<script>
export default {
  name: 'AudioComponent',
  props: {
    url: String
  }
};
</script>
