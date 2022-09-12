import { STORE } from '@/store';
import { scrollToEnd } from '@/utils/scrollToEnd';
import { responseGenerator } from '@/utils/responseGenerator';

export const messageSender = (text = '') => {
  let responseTimeOutRef = null;
  const textLen = text?.length || 1000;
  const delayToResponse = textLen > 1000 ? 1000 : textLen + 1000;
  const responseMessage = responseGenerator(text);
  STORE.commit('addMessageMutations', {
    text,
    delay: 0,
    isSender: true
  });
  responseTimeOutRef = setTimeout(() => {
    STORE.dispatch('addMessageAction', responseMessage);
    scrollToEnd();
    clearTimeout(responseTimeOutRef);
  }, delayToResponse);
};
