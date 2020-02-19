import { useContext } from "react";
// import { LocaleContext } from "../context/LocaleContext";
import { ComponentContext } from "../context/ComponentContext";
import strings from "./strings";
import { defaultLocale } from "./config";

export default function useTranslation() {
  // const { locale } = useContext(LocaleContext);
  const { state } = useContext(ComponentContext);
  const locale = state.locale;
  // const locale1 = "uk";

  // console.log("000/ useTranslation.js/locale=", locale);

  function t(key) {
    // const locale = "uk";
    // console.log("000/ useTranslation.js/key=", key);
    // if (!strings[locale][key]) {
    //   console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    // }
    return strings[locale][key] || strings[defaultLocale][key] || "";
  }

  return {
    t,
    locale
  };
}
