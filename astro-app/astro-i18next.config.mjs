export default {
  defaultLocale: "en",
  locales: ["en", "id"],
  load: ["server", "client"],
  i18nextServerPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
  },
};