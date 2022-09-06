export const scrollToEnd = () => {
  const messages = document.getElementById('messages');
  messages.scrollTop = messages.scrollHeight + 100;
};
