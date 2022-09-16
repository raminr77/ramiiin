<template>
  <div class="MessageItem" :class="{ MessageItem__isGreen: isSender }">
    <div v-if="loading" class="MessageItem__content">
      <MessageItemLoading />
    </div>
    <div
      v-else
      class="MessageItem__content"
      :class="{ ['MessageItem__content--media-size']: audioUrl || videoUrl }"
    >
      <MessageItemMedia
        :text="text"
        :imageUrl="imageUrl"
        :videoUrl="videoUrl"
        :audioUrl="audioUrl"
      />
      <p v-if="text && !audioUrl">{{ isDefaultCommand ? help : text }}</p>
      <MessageItemFooter :time="time" />
    </div>
  </div>
</template>

<script>
import { STORE } from '@/store';
import { scrollToEnd } from '@/utils/scrollToEnd';
import MessageItemMedia from '@/components/MessageItem/MessageItemMedia.vue';
import MessageItemFooter from '@/components/MessageItem/MessageItemFooter.vue';
import MessageItemLoading from '@/components/MessageItem/MessageItemLoading.vue';

let timeOutRef = null;
export default {
  name: 'MessageItem',
  components: {
    MessageItemMedia,
    MessageItemFooter,
    MessageItemLoading
  },
  props: {
    id: Number,
    text: String,
    help: String,
    audioUrl: String,
    imageUrl: String,
    videoUrl: String,
    isSender: Boolean,
    isDefaultCommand: Boolean,
    delay: {
      type: Number,
      default: 500
    }
  },
  data: () => ({
    time: null,
    loading: true
  }),
  methods: {
    toggleTyping(action) {
      if (STORE.state.isTyping && action) {
        return;
      }
      if (!this.isSender) {
        STORE.commit('toggleTypingMutations');
      }
    },
    checkTime(time) {
      const stringTime = `${time}`;
      if (stringTime.length === 1) {
        return '0' + stringTime;
      }
      return stringTime;
    },
    timeGenerator() {
      const userDate = new Date();
      return `${this.checkTime(userDate.getHours())}:${this.checkTime(
        userDate.getMinutes()
      )}`;
    }
  },
  mounted() {
    const textLength = this?.text?.length || 1;
    const hasMedia = this.imageUrl || this.videoUrl || this.audioUrl;
    const mediaDelay = hasMedia ? 1000 : 0;
    const loadingDelay = +textLength + mediaDelay + this.delay;
    scrollToEnd();
    this.toggleTyping(true);
    timeOutRef = setTimeout(
      () => {
        this.loading = false;
        this.$emit('message-loaded', this.id);
        this.time = this.timeGenerator();
        this.toggleTyping(false);
        scrollToEnd();
      },
      this.isSender ? 0 : loadingDelay
    );
  },
  beforeUnmount() {
    clearTimeout(timeOutRef);
  }
};
</script>

<style lang="scss" scoped>
.MessageItem {
  display: flex;
  margin: 8px 16px;
  justify-content: flex-start;

  &__content {
    display: flex;
    max-width: 60%;
    color: #fff;
    min-width: 80px;
    font-size: 14px;
    overflow: hidden;
    text-align: left;
    padding: 6px 8px;
    border-radius: 8px;
    width: max-content;
    position: relative;
    align-items: flex-end;
    flex-direction: column;
    animation: fadeIn ease 0.3s;
    background-color: #1f2c33;
    p {
      width: 100%;
      direction: rtl;
      line-height: 26px;
      text-align: right;
      white-space: pre-line;
      word-wrap: break-word;
    }
    &--media-size {
      width: 460px;
      max-width: 90%;
    }
  }

  &__isGreen {
    justify-content: flex-end;
    > div {
      text-align: right;
      background-color: #176b5b;
    }
  }
}
</style>
