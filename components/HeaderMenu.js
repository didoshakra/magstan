import React, { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faGlobe } from "@fortawesome/free-solid-svg-icons";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import useTranslation from "../translations/useTranslation";
import { ComponentContext } from "../context/ComponentContext";
import MobileNav from "./navigation/MobileNav";

const HeaderMenu = () => {
  const { locale, t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = React.useState(false);
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  const langMenuToggle = () => {
    setLangMenuOpen(!langMenuOpen);
  };

  const themeMenuToggle = () => {
    setThemeMenuOpen(!themeMenuOpen);
  };

  const mobileMenuToggle = arg => {
    setMobileMenuOpen(arg);
    // console.log("Menu.js/mobileMenuOpen2/arg =", arg);
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
        {/* іконки теми і мови */}
        <li className="nav__item" title={t("headerMenu_titleTheme")}>
          <FontAwesomeIcon icon={faSun} onClick={themeMenuToggle} />
        </li>
        <li className="nav__item" title={t("headerMenu_titleLanguage")}>
          <FontAwesomeIcon icon={faGlobe} onClick={langMenuToggle} />
        </li>
      </ul>
      {/* Мобіцльна навігація*/}
      <div className="menu-icon">
        {/* іконки теми і мови */}
        <i className="icon">
          <FontAwesomeIcon icon={faSun} onClick={themeMenuToggle} />
        </i>
        <i className="icon">
          <FontAwesomeIcon icon={faGlobe} onClick={langMenuToggle} />
        </i>
        {/* іконка мобільного меню */}
        <i className="icon" onClick={() => mobileMenuToggle(true)}>
          <FontAwesomeIcon icon={faBars} />
        </i>
      </div>

      {/* випадаючі списки теми і мовиselect */}
      {themeMenuOpen ? <ThemeSwitcher themeMenuToggle={themeMenuToggle} /> : ""}
      {langMenuOpen ? <LocaleSwitcher langMenuToggle={langMenuToggle} /> : ""}
      {/* Список мобильної навігації */}
      <MobileNav
        mobileMenuOpen={mobileMenuOpen}
        mobileMenuToggle={mobileMenuToggle}
      />

      <style jsx>{`
        /* ------------ Desktop navigation ----------- */
        .nav {
          list-style-type: none; /**Отменяет маркеры для списка. */
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: flex-end; /* Вирівнювання елементів по головній осі(x) вправо */
          /*align-items: center; /* Вирівнювання елементів по перетину осі(y) центр??? Коли забрав то вирівняло */
        }
        /* Условие для экранов с шириной от 0 до 1200px */
        @media (max-width: 1200px) {
          .nav {
            display: none; /*Временно удаляет элемент из документа */
          }
        }

        .nav__item {
          margin-right: 50px;
          /* padding: 10px; */
          /* height: 20px; */
          margin: 10px;
          padding: 0px;
        }

        .nav__item:last-child {
          margin-right: 0px;
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
          z-index: 19;
          /* ustify-content: flex-end;
          position: relative;
          max-width: 100px;
          height: 30px;
          cursor: pointer;
          margin: 10px;
          padding: 10px; */
        }

        /* Для екранів з шириною  0 до 1200px */

        @media (max-width: 1200px) {
          .menu-icon {
            display: flex;
            /* justify-content: center; */
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
      `}</style>
      <style jsx>{`
        /* //Динамічні стилі (Окремо, щоб при зміні були перераховані лише динамічні)*/
        .nav li a {
          color: ${theme.colors.text};
          /* background: ${theme.colors.background1};*/
          font-family: ${theme.fontFamily.sansSerif};
      `}</style>
    </React.Fragment>
  );
};

export default HeaderMenu;
