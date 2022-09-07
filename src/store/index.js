import { createStore } from 'vuex';

let id = 1;

export const STORE = createStore({
  state: {
    messages: [],
    isTyping: false
  },
  mutations: {
    addMessageMutations(state, message) {
      state.messages.push({
        id: id++,
        ...message
      });
    },
    toggleTypingMutations(state) {
      state.isTyping = !state.isTyping;
    }
  },
  actions: {
    addMessageAction({ commit }, message) {
      commit('addMessageMutations', message);
    }
  }
});
