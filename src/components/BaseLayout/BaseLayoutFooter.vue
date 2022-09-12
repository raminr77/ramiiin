<template>
  <footer @keydown="onEnter" class="BaseLayoutFooter">
    <button @click="toggleShowHelpModal" class="BaseLayoutFooter__helpBtn">
      <img width="40" alt="?" src="../../assets/images/help-icon.png" />
    </button>
    <input type="text" v-model="text" />
    <button class="BaseLayoutFooter__sendBtn" @click="onSubmit()" :disabled="!text">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path
          :fill="text ? '#176b5b' : '#999'"
          d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
        ></path>
      </svg>
    </button>
    <HelpModal :showModal="showHelpModal" />
  </footer>
</template>

<script>
import { messageSender } from '@/utils/messageSender';
export default {
  name: 'BaseLayoutFooter',
  data: () => ({
    text: ''
  }),
  methods: {
    toggleShowHelpModal() {
      this.$emit('help-modal');
    },
    onEnter(event) {
      if (event.code === 'Enter' && this.text) {
        this.onSubmit();
      }
    },
    onSubmit() {
      messageSender(this.text);
      this.text = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.BaseLayoutFooter {
  left: 50%;
  bottom: 0;
  right: 50%;
  width: 100%;
  height: 70px;
  display: flex;
  color: #fff;
  position: fixed;
  max-width: 600px;
  padding: 10px 16px;
  align-items: center;
  background: #111b21;
  transform: translateX(-50%);
  border-top: 2px solid #000;
  box-shadow: 0 -8px 10px rgba(0, 0, 0, 0.2);
  input {
    width: 100%;
    outline: none;
    margin: 0 6px;
    padding: 0 8px;
    color: #fff;
    font-size: 16px;
    line-height: 36px;
    border-radius: 8px;
    font-weight: normal;
    transition-duration: 0.3s;
    border: 2px solid #808080;
    background-color: transparent;
    &:focus {
      border-color: #176b5b;
    }
  }
  button {
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
  }
  &__sendBtn {
  }
  &__helpBtn {
  }
}
</style>
