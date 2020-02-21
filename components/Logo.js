//logo.js
import Link from "next/link";
import { useContext } from "react";
import useTranslation from "../translations/useTranslation";
import { ComponentContext } from "../context/ComponentContext";

// const Logo = () => (
const Logo = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const { locale, t } = useTranslation();
  return (
    <div className="logo">
      <Link href="/[lang]" as={`/${locale}`}>
        <a title={t("logo_logoTitle")}>
          {/* <img src="/SunRa.png" /> */}
          <img src="/StanLogo-80.jpg" alt="StanLogo" />
        </a>
      </Link>
      <Link href="/[lang]" as={`/${locale}`}>
        <a title={t("logo_logoTitle")}>Станіславський</a>
      </Link>
      <style jsx>{`
        .logo {
          margin: 5px 0 0;
          padding: 0;
          list-style: none;
          display: flex;
        }
        .logo img {
          display: block; //Блок стремится расшириться на всю доступную ширину. Можно указать ширину и высоту явно
          width: 80px;
          top: 20px; //відступ
        }
        .logo a {
          background: ${theme.colors.background1};
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.sansSerif};
        }
        @media (max-width: 600px) {
          .logo {
            display: block;
            margin-top: 20px;
          }
          .link {
            display: inline-block;
          }
        }
      `}</style>
    </div>
  );
};
export default Logo;
