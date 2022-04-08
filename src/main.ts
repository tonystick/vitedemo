import '@/styles/index.scss';
import 'element-plus/theme-chalk/src/message.scss';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import App from './App.vue';
import i18n from './lang';
import customSvgIcon from './plugins/customSvgIcon';
import router from './router';
import store from './store';

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser').then((worker) => {
    worker.default.start();
  });
}

createApp(App).use(customSvgIcon).use(i18n).use(store).use(router).mount('#app');
