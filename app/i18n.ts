import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationFR from "./locale/fr.json";
import translationEN from "./locale/en.json";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  fr: {
    translation: translationFR,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)

  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "en",
    debug: true,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
