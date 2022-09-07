<template>
  <div class="BaseLayout">
    <BaseLayoutHeader />
    <section id="messages" class="BaseLayout__content">
      <MessageItem
        v-for="(item, index) in $store.state.messages"
        :id="item.id"
        :text="item?.text"
        :delay="item?.delay"
        :key="item.id || index"
        :audioUrl="item?.audioUrl"
        :imageUrl="item?.imageUrl"
        :videoUrl="item?.videoUrl"
        :isSender="item?.isSender"
        @message-loaded="changeLastLoadedMessageId"
      />
    </section>
    <BaseLayoutFooter />
  </div>
</template>

<script>
import { STORE } from '@/store';
import { MESSAGES } from '@/constants/messages';

import MessageItem from '@/components/MessageItem/MessageItem.vue';
import BaseLayoutHeader from '@/components/BaseLayout/BaseLayoutHeader.vue';
import BaseLayoutFooter from '@/components/BaseLayout/BaseLayoutFooter.vue';

export default {
  name: 'BaseLayout',
  data: () => ({
    messageIndex: 0,
    lastLoadedMessageId: 0
  }),
  components: { MessageItem, BaseLayoutHeader, BaseLayoutFooter },
  mounted() {
    STORE.dispatch('addMessageAction', MESSAGES[this.messageIndex]);
  },
  methods: {
    changeLastLoadedMessageId(id) {
      this.lastLoadedMessageId = id;
    }
  },
  watch: {
    lastLoadedMessageId() {
      if (MESSAGES[this.messageIndex + 1]) {
        this.messageIndex++;
        STORE.dispatch('addMessageAction', MESSAGES[this.messageIndex]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.BaseLayout {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: auto;
  max-width: 600px;
  animation: fadeIn ease 0.5s;
  background-color: rgba(0, 0, 0, 0.2);

  &__content {
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 132px);
    // ios
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #000;
      border-radius: 8px;
      border: none;
    }
  }
}
</style>
