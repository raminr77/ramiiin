const DOMAIN = 'ramiiin.ir';

export const isLocal = () => {
  if (window?.location) {
    const hostname = location?.hostname || '';
    if (hostname !== DOMAIN) {
      return true;
    }
  }
  return false;
};
