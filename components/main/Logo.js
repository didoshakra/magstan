//logo.js
import Link from "next/link";
import { useContext } from "react";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

// const Logo = () => (
const Logo = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const { locale, t } = useTranslation();
  return (
    <div className="logo">
      <Link href="/[lang]" as={`/${locale}`}>
        <a title={t("logo_logoTitle")}>
          <img src="/StanLogo-80.jpg" alt="StanLogo" />
        </a>
      </Link>
      <Link href="/[lang]" as={`/${locale}`}>
        <a title={t("logo_logoTitle")} className="text">
          Станіславський
        </a>
      </Link>
      <style jsx>{`
        .logo {
          margin: 0;
          padding: 0;
          /* margin: 5px 0 0; */
          /*padding: 10;*/
          display: flex;
          /* align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
        }
        .logo img {
          display: block;
          /* width: 80px;*/
          /* top: 20px; */
        }
        .text {
          margin: 5px;
          color: ${theme.colors.textHead};
          background: ${theme.colors.backgroundHead};
          font-family: ${theme.fontFamily.serif};
          font-size: 20px; //Рукавичка
          font-weight: 800;
        }

        @media (max-width: 600px) {
          .text {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
export default Logo;
