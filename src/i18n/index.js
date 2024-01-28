import spanish from "./es.json"
import english from "./en.json"

const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en'
}

export const getI18n = ({ currentLocale = 'es' }) => {
    switch (currentLocale) {
        case LANGUAGES.SPANISH:
            return spanish
        case LANGUAGES.ENGLISH:
            return english
        default:
            return spanish
    }
}