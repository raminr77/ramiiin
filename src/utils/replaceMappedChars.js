export function replaceMappedChars(value, hashMap) {
  return value
    .split('')
    .map((char) => (hashMap[char] ? hashMap[char] : char))
    .join('');
}
