import { RESPONSES } from '@/utils/responses';

export const responseFinder = (message = '') => {
  const messageWords = message.split(' ');
  const response = messageWords.find((word) => !!RESPONSES?.[word]);

  if (response) return RESPONSES[response];

  return false;
};
