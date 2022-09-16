import { RESPONSES } from '@/utils/responses';
import { transformer } from '@/utils/transformer';
import { IDK_MESSAGES } from '@/constants/messages';
import { responseFinder } from '@/utils/responseFinder';

let IDK_COUNTER = 0;

export const responseGenerator = (message) => {
  const transformed = transformer(message);
  const customResponse = responseFinder(transformed);

  if (RESPONSES[transformed]) {
    IDK_COUNTER = 0;
    return RESPONSES[transformed];
  }

  if (customResponse) {
    IDK_COUNTER = 0;
    return customResponse;
  }

  if (IDK_COUNTER > 6) {
    IDK_COUNTER = 0;
    return IDK_MESSAGES[0];
  }

  IDK_COUNTER++;
  return IDK_MESSAGES[IDK_COUNTER];
};
