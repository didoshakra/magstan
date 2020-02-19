import { useContext } from "react";
import { ComponentContext } from "../context/ComponentContext";
// import { themes, themesNames } from "../styles/theme";
import useTranslation from "../translations/useTranslation";

const ThemeSwitcher = () => {
  const { t } = useTranslation();

  const themes = ["light", "dark", "other"];
  const themesNames = {
    light: t("theme_Light"),
    dark: t("theme_Dark"),
    other: t("theme_Other")
  };

  const { state, dispatch } = useContext(ComponentContext);
  const themeType = state.themeType;

  const handleThemeChange = React.useCallback(e => {
    // console.log("+++ /ThemeSwitcher.js/e.target.value=", e.target.value);
    dispatch({ type: "THEME", payload: e.target.value }); //Змінюємо state.locale
  });

  return (
    <select value={themeType} onChange={handleThemeChange}>
      {themes.map(theme => (
        <option key={theme} value={theme}>
          {themesNames[theme]}
        </option>
      ))}
    </select>
  );
};

export default ThemeSwitcher;
