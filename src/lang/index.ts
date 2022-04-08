import { createI18n } from 'vue-i18n';
// import { nextTick } from 'vue';

// export const SUPPORT_LOCALES = ['en', 'ja'];

// export function setI18nLanguage(i18n: I18n, locale: string): void {
//   if (i18n.mode === 'legacy') {
//     i18n.global.locale = locale;
//   } else {
//     i18n.global.locale.value = locale;
//   }
//   /**
//    * NOTE:
//    * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
//    * The following is an example for axios.
//    *
//    * axios.defaults.headers.common['Accept-Language'] = locale
//    */
//   document.querySelector('html')!.setAttribute('lang', locale);
// }

// export async function loadLocaleMessages(i18n, locale: string): Promise<void> {
//   // load locale messages with dynamic import
//   const messages = await import(/* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`);

//   // set locale and locale message
//   i18n.global.setLocaleMessage(locale, messages.default);

//   return nextTick();
// }

// export function setupI18n(options = { locale: 'en' }) {
//   const i18n = createI18n(options);
//   setI18nLanguage(i18n, options.locale);
//   return i18n;
// }

export default createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  allowComposition: true,
  messages: {
    zh: {
      hello: '你好!',
    },
    en: {
      hello: 'hello',
    },
  },
});
