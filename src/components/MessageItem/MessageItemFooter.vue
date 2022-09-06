<template>
  <div class="MessageItemFooter">
    <span class="MessageItemFooter__time">{{ time }}</span>
    <svg viewBox="0 0 16 15" width="16" height="15">
      <path
        fill="#cccccc"
        class="changeSeenIconColor"
        d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MessageItemFooter',
  props: {
    time: String
  }
};
</script>

<style lang="scss" scoped>
.MessageItemFooter {
  display: flex;
  margin-top: 2px;
  align-items: center;

  &__time {
    font-size: 12px;
    line-height: 14px;
    user-select: none;
    margin-right: 4px;
    white-space: nowrap;
  }
}

// seen icon color
@keyframes changeSeenIconColor {
  0% {
    fill: #cccccc;
  }
  100% {
    fill: #53bdeb;
  }
}
.changeSeenIconColor {
  animation: changeSeenIconColor forwards 0.2s;
  animation-delay: 0.3s;
}
</style>
