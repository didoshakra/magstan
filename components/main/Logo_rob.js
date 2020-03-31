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
        <img
          title={t("logo_logoTitle")}
          src="/StanLogo-80.jpg"
          alt="StanLogo"
        />
      </Link>
      <Link href="/[lang]" as={`/${locale}`}>
        {/* <a title={t("logo_lo/goTitle")} className="text"> */}
        <a title={t("logo_logoTitle")}>Станіславський</a>
      </Link>
      <style jsx>{`
        .logo {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center; /* Вирівнювання елементів по перетину осі(y) центр */
        }
        .logo img {
          margin-left: 5px; //Відступ від кожного елемента зліва
        }
        /* .text { */
        .logo a {
          margin-left: 5px; //Відступ від кожного елемента зліва
          color: ${theme.colors.textHead};
          background: ${theme.colors.backgroundHead};
          font-family: ${theme.fontFamily.serif};
          font-size: 20px; //Рукавичка
          font-weight: 800;
        }

        @media (max-width: 600px) {
          .logo a {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
export default Logo;
