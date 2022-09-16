import { arToFa, enToFa } from '@/utils/numbers';
import { arToFaCharacter, faToPiCharacter } from '@/utils/characters';

export const transformer = (message) => {
  const uperCase = message.trim().toUpperCase();
  const toPersianCharacter = arToFaCharacter(arToFa(uperCase));
  const toPersianNumber = enToFa(toPersianCharacter);
  const toPinglish = faToPiCharacter(toPersianNumber);

  if (toPinglish === 'undefined') {
    return toPersianNumber;
  }
  return toPinglish || toPersianNumber;
};
