<template>
  <audio controls>
    <source :src="url" type="audio/mpeg" />
    Your browser does not support the Audio element.
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

<style></style>
