<script>
import SplashScreen from '@/components/SplashScreen.vue';
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue';

let splashScreenTimeOutRef = null;

export default {
  components: {
    BaseLayout,
    SplashScreen
  },
  data: () => ({
    loading: true
  }),
  mounted() {
    splashScreenTimeOutRef = setTimeout(() => {
      this.loading = false;
    }, 500);
  },
  beforeUnmount() {
    clearTimeout(splashScreenTimeOutRef);
  }
};
</script>

<template>
  <div class="background-pattern"></div>
  <SplashScreen v-if="loading" />
  <BaseLayout v-else />
</template>
