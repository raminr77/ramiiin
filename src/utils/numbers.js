import { replaceMappedChars } from '@/utils/replaceMappedChars';

export function arToFa(value) {
  const numsMap = {
    '٠': '۰',
    '١': '۱',
    '٢': '۲',
    '٣': '۳',
    '٤': '۴',
    '٥': '۵',
    '٦': '۶',
    '٧': '۷',
    '٨': '۸',
    '٩': '۹'
  };
  return replaceMappedChars(String(value), numsMap);
}

export function enToFa(value) {
  if (!value && parseInt(value) !== 0) return;
  const numsMap = {
    0: '۰',
    1: '۱',
    2: '۲',
    3: '۳',
    4: '۴',
    5: '۵',
    6: '۶',
    7: '۷',
    8: '۸',
    9: '۹'
  };
  return replaceMappedChars(String(value), numsMap);
}
