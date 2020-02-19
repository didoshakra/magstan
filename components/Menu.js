import { useContext } from "react";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import useTranslation from "../translations/useTranslation";
import { ComponentContext } from "../context/ComponentContext";

const Menu = () => {
  const { locale, t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  return (
    <div>
      <ul className="menu">
        <li>
          <ThemeSwitcher />
        </li>
        <li>
          <LocaleSwitcher />
        </li>
        <li>
          <Link href="/[lang]" as={`/${locale}`}>
            <a>{t("header_titleHomeIcon")}</a>
          </Link>
        </li>

        <li>
          <Link href="/[lang]/promotions" as={`/${locale}/promotions`}>
            <a>{t("header_titlePromotions")}</a>
          </Link>
        </li>
        <li>
          <Link href="/[lang]/shops" as={`/${locale}/shops`}>
            <a>{t("header_titleShops")}</a>
          </Link>
        </li>
        <li>
          <Link href="/[lang]/about" as={`/${locale}/about`}>
            <a>{t("header_titleAboutME")}</a>
          </Link>
        </li>
        {/* <li>
          <Link
            href="/[lang]/react-google-map"
            as={`/${locale}/react-google-map`}
          >
            <a>r-g-map</a>
          </Link>
        </li>
        <li>
          <Link href="/[lang]/google-map" as={`/${locale}/google-map`}>
            <a>g-map</a>
          </Link>
        </li> */}

        <style jsx>{`
          .menu {
            margin: 5px 0 0;
            padding: 0;
            list-style: none;
            display: flex;
          }
          .menu li a {
            cursor: pointer;
            // color: #111;
            font-size: 20px;
            // font-weight: 300;//товщина(жирність) шрифта.//За замовчуванням (Normal або 400(300-це тонший))
            padding: 5px 2px;
            margin: 0 10px;
            text-decoration: none;
          }
          .menu li a:hover {
            padding-bottom: 3px;
            border-bottom: 2px solid #ffe525;
          }
          @media (max-width: 600px) {
            //Для малих екранів
            .menu {
              display: block;
              margin-top: 10px;
            }
            .menu li {
              display: inline-block;
            }
            .menu li a {
              font-size: 16px;
            }
          }
        `}</style>

        <style jsx>{`
        //Динамічні стилі (Окремо, щоб при зміні були перераховані лише динамічні)
        .menu li a {
          color: ${theme.colors.text};
          // background: ${theme.colors.background1};
          font-family: ${theme.fontFamily.sansSerif};
      `}</style>
      </ul>
    </div>
  );
};

export default Menu;
