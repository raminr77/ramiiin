<template>
  <div class="MessageItemLoader">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'MessageItemLoading'
};
</script>

<style lang="scss" scoped>
.MessageItemLoader {
  width: 100%;
  display: flex;
  min-height: 30px;
  align-items: center;
  justify-content: center;
  span {
    width: 8px;
    height: 8px;
    margin: 0 1px;
    border-radius: 8px;
    background: #ccc;
    animation: loader 0.8s infinite alternate;
  }
  span:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  span:nth-of-type(3) {
    animation-delay: 0.6s;
  }
}

@keyframes loader {
  0% {
    opacity: 0.8;
    transform: scale(0.5);
  }
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
}
</style>
