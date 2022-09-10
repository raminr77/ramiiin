<template>
  <swiper
    navigation
    :modules="modules"
    @swiper="onSwiper"
    :space-between="16"
    :slides-per-view="1"
    class="ProfileModalSlider"
    @slideChange="onSlideChange"
    :scrollbar="{ draggable: true }"
    :pagination="{ clickable: true }"
  >
    <swiper-slide
      :key="image"
      v-for="image in profileImages"
      class="ProfileModalSlider__slide"
    >
      <img
        alt="Ramiiin"
        class="BaseLayoutHeader__profile"
        :src="`./images/profile/profile-${image}.jpg`"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

export default {
  name: 'ProfileModalSlider',
  components: {
    Swiper,
    SwiperSlide
  },
  data: () => ({
    profileImages: ['01', '02', '03']
  }),
  setup() {
    return {
      modules: [Navigation, Scrollbar, A11y]
    };
  }
};
</script>

<style lang="scss" scoped>
.ProfileModalSlider {
  &__slide {
    height: 220px;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    justify-content: center;
    img {
      height: 100%;
      border-radius: 8px;
    }
  }
}
</style>
