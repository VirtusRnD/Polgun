import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationTR from "./locales/tr/translation.json";
import translationES from "./locales/es/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationAR from "./locales/ar/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationZH from "./locales/zh/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
  es: {
    translation: translationES,
  },
  ru: {
    translation: translationRU,
  },
  ar: {
    translation: translationAR,
  },
  fr: {
    translation: translationFR,
  },
  zh: {
    translation: translationZH,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

// Automatically update HTML lang and dir attributes when language changes
const updateDocumentLang = (lng) => {
  if (typeof document !== 'undefined') {
    const lang = (lng || 'en').split('-')[0].toLowerCase();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
};

i18n.on('languageChanged', (lng) => {
  updateDocumentLang(lng);
});

// Set initial html attributes
updateDocumentLang(i18n.language);

export default i18n;

