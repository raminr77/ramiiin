<template>
  <div class="BaseLayout">
    <BaseLayoutHeader />
    <section class="BaseLayout__content">
      <MessageItem
        v-for="(item, index) in $store.state.messages"
        :key="index"
        :text="item?.text"
        :delay="item?.delay"
        :audioUrl="item?.audioUrl"
        :imageUrl="item?.imageUrl"
        :videoUrl="item?.videoUrl"
        :isSender="item?.isSender"
      />
    </section>
    <BaseLayoutFooter />
  </div>
</template>

<script>
import MessageItem from '@/components/MessageItem/MessageItem.vue';
import BaseLayoutHeader from '@/components/BaseLayout/BaseLayoutHeader.vue';
import BaseLayoutFooter from '@/components/BaseLayout/BaseLayoutFooter.vue';

export default {
  name: 'BaseLayout',
  components: { MessageItem, BaseLayoutHeader, BaseLayoutFooter }
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
    padding-bottom: 20px;
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
