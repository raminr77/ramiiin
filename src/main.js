import { createApp } from 'vue';

import App from '@/App.vue';

import { STORE } from '@/store';

import '@/assets/styles/main.css';

createApp(App).use(STORE).mount('#app');
