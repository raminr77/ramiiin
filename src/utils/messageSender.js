import { STORE } from '@/store';
import { scrollToEnd } from '@/utils/scrollToEnd';
import { responseGenerator } from '@/utils/responseGenerator';

export const messageSender = ({ command = '', options = {} }) => {
  let responseTimeOutRef = null;
  const textLen = command?.length || 1000;
  const delayToResponse = textLen > 1000 ? 1000 : textLen + 1000;
  const responseMessage = responseGenerator(command);

  STORE.commit('addMessageMutations', {
    delay: 0,
    text: command,
    isSender: true,
    ...options
  });

  responseTimeOutRef = setTimeout(() => {
    STORE.dispatch('addMessageAction', responseMessage);
    scrollToEnd();
    clearTimeout(responseTimeOutRef);
  }, delayToResponse);
};
