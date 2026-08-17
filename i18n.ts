import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import localeDict from './src/locale/dict.ts';

interface localeDictInterface {
    [key: string]: {
        translation: {
            [index: string]: string
        }
    }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: localeDict as localeDictInterface,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;