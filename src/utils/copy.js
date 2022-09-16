import { useToast } from 'vue-toastification';

import { TOAST_ITEM_OPTIONS } from '@/constants/toastOptions';

const toast = useToast();
export const copy = ({ text = '', message = '' }) => {
  if (window?.navigator) {
    navigator.clipboard.writeText(text);
    toast.success(message, TOAST_ITEM_OPTIONS);
    return true;
  }
  return false;
};
