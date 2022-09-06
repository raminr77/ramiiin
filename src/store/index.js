import { createStore } from 'vuex';

let id = 1;

export const STORE = createStore({
  state: {
    messages: []
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push({
        id: id++,
        ...message
      });
    }
  }
});
