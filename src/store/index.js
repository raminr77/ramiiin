import { createStore } from 'vuex';

let id = 1;

export const STORE = createStore({
  state: {
    messages: []
  },
  mutations: {
    addMessageMutations(state, message) {
      state.messages.push({
        id: id++,
        ...message
      });
    }
  },
  actions: {
    addMessageAction({ commit }, message) {
      commit('addMessageMutations', message);
    }
  }
});
