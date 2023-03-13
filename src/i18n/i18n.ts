import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { de, en, ua } from "./locales";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "de",

        interpolation: {
            escapeValue: false
        },

        resources: {
            de: {...de},
            en: {...en},
            ua: {...ua},
        }
    })