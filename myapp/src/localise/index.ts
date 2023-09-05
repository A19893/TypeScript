import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { englishLang } from "./englishLang";
import { spanishLang } from "./spanishLang";
import { portugueseLang } from "./portugeseLang";
import {store} from '../store/index'
// This is a functional component where you can use useSelector
console.log(store.getState().todos.language)
  // Initialize i18n with the selected language
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: englishLang,
        },
        es: {
          translation: spanishLang,
        },
        pt: {
          translation: portugueseLang,
        },
      },
      lng: store.getState().todos.language, // Use the selected language
      fallbackLng: "es",
      interpolation: {
        escapeValue: false,
      },
    });



