export const scrollToEnd = () => {
  const MESSAGES_ELEMENT = document.getElementById('messages');
  MESSAGES_ELEMENT.scrollTop = MESSAGES_ELEMENT.scrollHeight;
};
