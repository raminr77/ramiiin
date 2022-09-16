import { createApp } from 'vue';
import Toast from 'vue-toastification';

import App from '@/App.vue';
import { STORE } from '@/store';
import { TOAST_OPTIONS } from '@/constants/toastOptions';

import 'vue-toastification/dist/index.css';
import '@/assets/styles/main.css';

createApp(App).use(STORE).use(Toast, TOAST_OPTIONS).mount('#app');
