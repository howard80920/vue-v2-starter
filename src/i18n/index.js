import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhtw from './langs/zhtw'

Vue.use(VueI18n);

const defaultLocale = 'zhtw';
const loadedLangs   = [ defaultLocale ];

const i18n = new VueI18n({
    locale: defaultLocale,
    fallbackLocale: defaultLocale,
    messages: {
        zhtw
    }
});

export default i18n;