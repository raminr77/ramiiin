<template>
  <div class="BaseLayout">
    <HelpModal :showModal="helpModal" @close-modal="hideHelpModal()" />
    <BaseLayoutHeader />
    <section id="messages" class="BaseLayout__content">
      <MessageItem
        v-for="(item, index) in $store.state.messages"
        :id="item.id"
        :help="item?.help"
        :text="item?.text"
        :delay="item?.delay"
        :key="item.id || index"
        :audioUrl="item?.audioUrl"
        :imageUrl="item?.imageUrl"
        :videoUrl="item?.videoUrl"
        :isSender="item?.isSender"
        :isDefaultCommand="item?.isDefaultCommand"
        @message-loaded="changeLastLoadedMessageId"
      />
    </section>
    <BaseLayoutFooter @help-modal="showHelpModal()" />
  </div>
</template>

<script>
import { STORE } from '@/store';
import { START_MESSAGES } from '@/constants/messages';

import HelpModal from '@/components/HelpModal/HelpModal.vue';
import MessageItem from '@/components/MessageItem/MessageItem.vue';
import BaseLayoutHeader from '@/components/BaseLayout/BaseLayoutHeader.vue';
import BaseLayoutFooter from '@/components/BaseLayout/BaseLayoutFooter.vue';

export default {
  name: 'BaseLayout',
  data: () => ({
    messageIndex: 0,
    helpModal: false,
    lastLoadedMessageId: 0
  }),
  components: { HelpModal, MessageItem, BaseLayoutHeader, BaseLayoutFooter },
  mounted() {
    STORE.dispatch('addMessageAction', START_MESSAGES[this.messageIndex]);
  },
  methods: {
    showHelpModal() {
      this.helpModal = true;
    },
    hideHelpModal() {
      this.helpModal = false;
    },
    changeLastLoadedMessageId(id) {
      this.lastLoadedMessageId = id;
    }
  },
  watch: {
    lastLoadedMessageId() {
      if (START_MESSAGES[this.messageIndex + 1]) {
        this.messageIndex++;
        STORE.dispatch('addMessageAction', START_MESSAGES[this.messageIndex]);
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
  overflow: hidden;
  max-width: 600px;
  animation: fadeIn ease 0.5s;
  background-color: rgba(0, 0, 0, 0.2);

  &__content {
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 16px;
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
