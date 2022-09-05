<template>
  <footer @keydown="onEnter" class="BaseLayoutFooter">
    <input type="text" v-model="command" />
    <button @click="onSubmit()" :disabled="!command">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path
          :fill="command ? '#176b5b' : '#999'"
          d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
        ></path>
      </svg>
    </button>
  </footer>
</template>

<script>
export default {
  name: 'BaseLayoutFooter',
  data: () => ({
    command: ''
  }),
  methods: {
    onEnter(event) {
      if (event.code === 'Enter') {
        this.onSubmit();
      }
    },
    onSubmit() {
      const newCommand = {
        value: this.command,
        isSender: true
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.BaseLayoutFooter {
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 55px;
  display: flex;
  color: #fff;
  position: fixed;
  padding: 10px 16px;
  align-items: center;
  background: #111b21;
  box-shadow: 0 -8px 10px rgba(0, 0, 0, 0.2);
  input {
    width: 100%;
    outline: none;
    padding: 0 8px;
    color: #fff;
    font-size: 16px;
    line-height: 30px;
    border-radius: 8px;
    transition-duration: 0.3s;
    border: 2px solid #808080;
    background-color: transparent;
    &:focus {
      border-color: #176b5b;
    }
  }
  button {
    width: 34px;
    height: 34px;
    border: none;
    cursor: pointer;
    margin-left: 6px;
    background-color: transparent;
  }
}
</style>
