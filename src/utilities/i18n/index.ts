import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation, initReactI18next } from "react-i18next";
import * as en from '../../assets/locales/en.json';
import * as fr from '../../assets/locales/fr.json';

const options = {
    debug: false,
    resources: {
        en: {
            translation: en,
        },
        fr: {
            translation: fr,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
};

i18n.use(initReactI18next).init(options);
i18n.changeLanguage('en', (err) => {
    if (err) {
        console.log(err);
    }
});

export default i18n;
