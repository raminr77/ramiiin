import P2F from 'persian-to-pinglish';
import { replaceMappedChars } from '@/utils/replaceMappedChars';

export function arToFaCharacter(value) {
  const charsMap = {
    ['ك']: 'ک',
    ['دِ']: 'د',
    ['بِ']: 'ب',
    ['زِ']: 'ز',
    ['ذِ']: 'ذ',
    ['شِ']: 'ش',
    ['سِ']: 'س',
    ['ى']: 'ی',
    ['ي']: 'ی'
  };
  return replaceMappedChars(String(value), charsMap);
}

export function faToPiCharacter(value) {
  return P2F(value);
}
