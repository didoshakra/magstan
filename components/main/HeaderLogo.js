//logo.js
import Link from "next/link";
import { useContext } from "react";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

const HeaderLogo = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const { locale, t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <div className="logo">
      <div className="icon">
        <Link href="/[lang]" as={`/${locale}`}>
          <img
            title={t("logo_logoTitle")}
            src="/StanLogo-80.jpg"
            alert="logo"
          />
        </Link>
      </div>
      <Link href="/[lang]" as={`/${locale}`}>
        <a title={t("logo_logoTitle")} className="text">
          {t("logo_siteName")}
        </a>
      </Link>
      <style jsx>{`
        .logo {
          margin: 0;
          padding: 0;
          display: flex;
          //justify-content: flex-start; /* Вирівнювання елементів по головній осі(x) ввліво-по замовчуванню */
          // max-width: 400px;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
        }

        .text {
          padding: 5px 10px;
          //margin: 0;
          //margin-left: 10px; //Відступ від кожного елемента зліва
          font-weight: 600;
          font-family: ${theme.fontFamily.sansSerif};
          background: ${theme.colors.backgroundHead};
          color: ${theme.colors.textHead};
        }
        .icon {
          margin-left: 10px; //Відступ від кожного елемента зліва
          display: flex;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
          justify-content: center; /* Вирівнювання елементів по головній осі(x) вправо */
          color: ${theme.colors.textHead};
          background: ${theme.colors.backgroundHead};
          border-radius: 45px; /* Радіус*/
          height: 45px;
          width: 60px;
        }
        .icon:hover,
        .text:hover {
          color: ${theme.colors.textHeadHover};
          background: ${theme.colors.textBackgroundHeadHover};
          cursor: pointer;
        }
        .icon img {
          //margin: 0;
          //padding: 0;
          height: 35px;
          width: 50px;
        }
        @media (max-width: 600px) {
          /*mobile<600px*/
          .text {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
export default HeaderLogo;
