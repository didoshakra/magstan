//logo.js
import Link from "next/link";
import useTranslation from "../translations/useTranslation";

// const Logo = () => (
const Logo = () => {
  const { locale, t } = useTranslation();
  return (
    <div className="logo">
      <Link href="/[lang]" as={`/${locale}`}>
        <a title={t("logo_logoTitle")}>
          {/* <img src="/SunRa.png" /> */}
          <img src="/StanLogo-80.jpg" />
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
