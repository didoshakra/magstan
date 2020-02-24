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
  const theme = state.theme;

  const handleThemeChange = React.useCallback(e => {
    // console.log("+++ /ThemeSwitcher.js/e.target.value=", e.target.value);
    dispatch({ type: "THEME", payload: e.target.value }); //Змінюємо state.locale
  });

  return (
    <select
      title={t("themeSwitcher_title")}
      value={themeType}
      onChange={handleThemeChange}
      className="select"
    >
      {themes.map(item => (
        <option key={item} value={item}>
          {themesNames[item]}
        </option>
      ))}

      <style jsx>
        {`
          .select {
            display: flex;
            margin: 0 10px; //між блоками
            //justify-content: space-center; //Вирівнювання вправо
            // justify-content: space-between; //Вирівнювання вправо
            align-items: center;
            font-size: 20px;
            cursor: pointer; //Рука
            color: ${theme.colors.text};
            font-family: ${theme.fontFamily.sansSerif};
            background: ${theme.colors.background1};
          }

          @media (max-width: 600px) {
            .select {
              margin: 0 5px; //між блоками
              font-size: 16px;
            }
          }
        `}
      </style>
      {/* <style jsx>
        {`
      .select {
        color: ${theme.colors.text};
        font-family: ${theme.fontFamily.sansSerif};
        background: ${theme.colors.background1};
        `}
      </style> */}
    </select>
  );
};

export default ThemeSwitcher;
