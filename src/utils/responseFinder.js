import { RESPONSES } from '@/utils/responses';

export const responseFinder = (message = '') => {
  const commands = Object.keys(RESPONSES);
  const response = commands.find((command) => message.toUpperCase().match(command));
  if (response) return response;
  return false;
};
