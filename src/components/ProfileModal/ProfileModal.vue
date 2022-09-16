<template>
  <div @click="$emit('close-modal')" class="ProfileModal__overlay" v-if="showModal">
    <div @click.stop.prevent="null" class="ProfileModal__content">
      <div class="ProfileModal__header">
        <h3>More Info</h3>
        <button @click="$emit('close-modal')">
          <svg viewBox="0 0 24 24" width="24" height="24" class="">
            <path
              fill="#fff"
              d="m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="ProfileModal__body">
        <div class="ProfileModal__imageContainer">
          <ProfileModalSlider />
        </div>
        <div class="ProfileModal__row bio">
          <p dir="rtl">
            گاهی باید دِل کَند
            <br />
            اَز هَر آنچه اِحساس می‌کنی زیباست.
          </p>
        </div>
        <div @click="copyEmail()" class="ProfileModal__row">
          <span>Email: </span>
          <a :href="`mailto:${email}`">{{ email }}</a>
        </div>
        <div @click="copyPhoneNumber()" class="ProfileModal__row">
          <span>Phone Number:</span>
          <a :href="`tel:${phoneNumber}`">{{ phoneNumber }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { copy } from '@/utils/copy';
import ProfileModalSlider from '@/components/ProfileModal/ProfileModalSlider.vue';

export default {
  name: 'ProfileModal',
  props: {
    showModal: Boolean
  },
  components: {
    ProfileModalSlider
  },
  data: () => ({
    email: 'info@ramiiin.ir',
    phoneNumber: '09930600012'
  }),
  methods: {
    copyEmail() {
      const message = 'آدرس ایمیل کپی شد';
      copy({ text: this.email, message });
    },
    copyPhoneNumber() {
      const message = 'شماره همراه کپی شد';
      copy({ text: this.phoneNumber, message });
    }
  }
};
</script>

<style lang="scss" scoped>
.ProfileModal {
  &__overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    position: fixed;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    background-color: rgba(20, 30, 30, 0.1);
  }
  &__content {
    top: 40%;
    left: 50%;
    width: 90%;
    padding: 16px;
    color: #fff;
    max-width: 500px;
    overflow-y: auto;
    min-height: 300px;
    max-height: 500px;
    position: absolute;
    border-radius: 8px;
    background-color: #1f2c33;
    transform: translate(-50%, -40%);
  }
  &__header {
    width: 100%;
    display: flex;
    user-select: none;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-size: 16px;
      line-height: 40px;
    }
    button {
      width: 40px;
      height: 40px;
      border: none;
      outline: none;
      color: #fff;
      cursor: pointer;
      background-color: transparent;
    }
  }
  &__body {
    width: 100%;
    display: flex;
    flex-direction: column;
    a {
      line-height: 20px;
      color: #00ea98;
      letter-spacing: 1px;
      text-decoration: none;
    }
  }
  &__row {
    width: 100%;
    display: flex;
    line-height: 30px;
    user-select: none;
    align-items: center;
    justify-content: flex-start;
    p {
      width: 100%;
    }
    span {
      margin-right: 6px;
    }
    &.bio {
      padding: 20px 0;
      text-align: right;
      margin-bottom: 20px;
      border-bottom: 1px solid #1d282d;
    }
  }
  &__imageContainer {
    width: 100%;
    display: flex;
    margin: 0 auto;
    min-height: 220px;
    align-items: center;
    justify-content: center;
  }
}
</style>
