///Праве меню з написами і їконками/змінюється при зменшенні
//Селектор мови/Дві теми-іконки(themeTypeLight)

import React, { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faMoon,
  faSun,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import LocaleSwitcher from "./LocaleSwitcher";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";
import MobileNav from "../navigation/MobileNav";

const HeaderMenu = () => {
  const { locale, t } = useTranslation();
  const { state, dispatch } = useContext(ComponentContext);
  // const theme = state.theme;
  const { theme, themeTypeLight } = state;
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  const langMenuToggle = () => {
    setLangMenuOpen(!langMenuOpen);
  };

  const themeMenuToggle = () => {
    var newTheme = "light";
    // if (themeType === "light") {
    if (themeTypeLight) {
      newTheme = "dark";
    }
    // console.log("HeaderMenu.js/newTheme=", newTheme);
    dispatch({ type: "THEME", payload: newTheme }); //Змінюємо state.theme
  };

  const mobileMenuToggle = arg => {
    setMobileMenuOpen(arg);
    // setMobileMenuOpen(!mobileMenuOpen);
    console.log("Menu.js/mobileMenuOpen2/arg =", arg);
  };

  return (
    // Навігація
    <React.Fragment>
      {/* для десктопа */}
      <ul className="nav">
        {/* <li className="nav__item">
          <SwitcherExample />
        </li> */}

        <li className="nav__item">
          <Link href="/[lang]" as={`/${locale}`}>
            <a>{t("headerMenu_titleHomeIcon")}</a>
          </Link>
        </li>

        <li className="nav__item">
          <Link href="/[lang]/promotions" as={`/${locale}/promotions`}>
            <a>{t("headerMenu_titlePromotions")}</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/[lang]/shops" as={`/${locale}/shops`}>
            <a>{t("headerMenu_titleShops")}</a>
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/[lang]/about" as={`/${locale}/about`}>
            <a>{t("headerMenu_titleAboutME")}</a>
          </Link>
        </li>
        {/* іконка теми */}
        <i
          className="nav__item"
          title={t("headerMenu_titleTheme")}
          onClick={themeMenuToggle}
        >
          {!themeTypeLight ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </i>
        {/* іконка мови */}
        <i className="nav__item" title={t("headerMenu_titleLanguage")}>
          <FontAwesomeIcon icon={faGlobe} onClick={langMenuToggle} />
        </i>
      </ul>
      {/* Мобіцльна навігація*/}
      <div className="menu-icon">
        {/* іконк мобільного меню/гамбургер/ */}
        <i
          className="icon"
          onClick={() => mobileMenuToggle(mobileMenuOpen ? false : true)}
          title={t("headerMenu_titleNavMenu")}
        >
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <FontAwesomeIcon icon={faList} />
        </i>
        {/* іконка теми */}
        <i
          className="icon"
          title={t("headerMenu_titleTheme")}
          onClick={themeMenuToggle}
        >
          {!themeTypeLight ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </i>
        {/* іконка мови */}
        <i className="icon">
          <FontAwesomeIcon
            icon={faGlobe}
            title={t("headerMenu_titleLanguage")}
            onClick={langMenuToggle}
          />
        </i>
      </div>
      {/* Список мобильної навігації */}
      <MobileNav
        mobileMenuOpen={mobileMenuOpen}
        mobileMenuToggle={mobileMenuToggle}
      />
      {/* випадаючі списки теми і мовиselect */}
      {/* {themeMenuOpen ? <ThemeSwitcher themeMenuToggle={themeMenuToggle} /> : ""} */}
      {langMenuOpen ? <LocaleSwitcher langMenuToggle={langMenuToggle} /> : ""}

      <style jsx>{`
        /* ------------ Desktop navigation ----------- */
        .nav {
          list-style-type: none; /**Отменяет маркеры для списка. */
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: flex-end; /* Вирівнювання елементів по головній осі(x) вправо */
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
        }
        /* Условие для экранов с шириной от 0 до 1200px */
        @media (max-width: 1200px) {
          .nav {
            display: none; /*Временно удаляет элемент из документа */
          }
        }

        .nav__item {
          margin-right: 20px;
          //margin: 10px;
          padding: 0px;
        }

        .nav__item:last-child {
          margin-right: 5px;
        }

        .nav__link {
          font-size: 22px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
        }
        .nav__link:hover {
          color: #ffd600;
        }

        /* --------------- Mobile navigation button ----------- */

        .menu-icon {
          display: none;
          //z-index: 19;
        }

        /* Для екранів з шириною  0 до 1200px */

        @media (max-width: 1200px) {
          .menu-icon {
            display: flex;
            justify-content: flex-end; /* Вирівнювання елементів по головній осі(x) вправо */
            align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          }
          .icon {
            /* height: 20px; */
            align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
            margin: 5px;
            padding: 0px;
          }
        }
        .nav a,
        i {
          color: ${theme.colors.textHead};
          background: ${theme.colors.backgroundHead};
          font-family: ${theme.fontFamily.serif};
          font-size: 18px; //Рукавичка
          font-weight: 200;
        }
      `}</style>
    </React.Fragment>
  );
};

export default HeaderMenu;
