<template>
  <div @click="$emit('close-modal')" v-if="showModal" class="HelpModal">
    <div @click.stop.prevent="null" class="HelpModal__content">
      <h3>راهنما</h3>
      <p>سلام. این ربات سعی میکنه از طرف رامین باهات صحبت کنه و جوابت رو بده!</p>
      <p>سعی میکنه به اکثر سوال‌های شما جواب بده اما خب ممکنه خطا هم داشته باشه</p>
      <p>چند نمونه از دستورات مهم رو اینجا واست نوشتم :</p>
      <br />
      <ul>
        <li v-for="(command, index) in commands" :key="index">
          <span>{{ index + 1 }} - </span>
          <code>{{ command }}</code>
          <span>{{ responses[command].help }}</span>
        </li>
      </ul>
      <button @click="$emit('close-modal')">متوجه شدم 😎</button>
    </div>
  </div>
</template>

<script>
import { RESPONSES } from '@/utils/responses';
export default {
  name: 'HelpModal',
  props: {
    showModal: Boolean
  },
  data: () => ({
    commands: [],
    responses: {}
  }),
  mounted() {
    this.responses = RESPONSES;
    this.commands = Object.keys(RESPONSES);
  }
};
</script>

<style lang="scss" scoped>
.HelpModal {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  position: fixed;
  user-select: none;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.6);
  &__content {
    width: 90%;
    direction: rtl;
    height: 100vh;
    display: flex;
    padding: 16px;
    margin: 0 auto;
    color: #fff;
    max-width: 600px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h3 {
      width: 100%;
      text-align: right;
      color: #00ea98;
      margin-bottom: 10px;
      font-family: VazirmatnFaNumBold;
    }
    button {
      color: #fff;
      cursor: pointer;
      padding: 0 16px;
      margin-top: 16px;
      line-height: 33px;
      border-radius: 4px;
      font-family: Vazirmatn;
      border: 2px solid #00ea98;
      background-color: transparent;
    }
    p {
      width: 100%;
      margin-bottom: 16px;
    }
    ul {
      width: 100%;
      height: 300px;
      padding: 16px 0;
      overflow-y: auto;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.1);
      li {
        display: flex;
        font-size: 14px;
        margin-bottom: 8px;
        align-items: center;
        span:first-child {
          min-width: 30px;
          text-align: left;
          margin-left: 10px;
          font-family: VazirmatnFaNum;
        }
        code {
          color: #000;
          padding: 0 8px;
          line-height: 36px;
          margin-left: 16px;
          border-radius: 4px;
          letter-spacing: 1px;
          background: #bbdefb;
        }
      }
    }
  }
}
</style>
