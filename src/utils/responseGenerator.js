import { RESPONSES } from '@/utils/responses';
import { transformer } from '@/utils/transformer';
import { IDK_MESSAGES } from '@/constants/messages';

let IDK_COUNTER = 0;

export const responseGenerator = (message) => {
  const transformed = transformer(message);

  console.log('-', transformed);
  
  if (RESPONSES[transformed]) {
    IDK_COUNTER = 0;
    return RESPONSES[transformed];
  }
  if (IDK_COUNTER > 6) {
    IDK_COUNTER = 0;
    return IDK_MESSAGES[0];
  }
  IDK_COUNTER++;
  return IDK_MESSAGES[IDK_COUNTER];
};
