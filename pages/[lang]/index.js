//
import { useContext } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import Gallery from "../../components/Gallery";
// import theme from "../../styles/theme";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

const images = [
  "/promotions/14.jpg",
  "/promotions/13.jpg",
  "/promotions/12.jpg",
  "/promotions/11.jpg"
];

const Homepage = () => {
  const { locale, t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  return (
    <Layout title="Home">
      <div className="cover">
        <div className="hello">
          {/* <img src="/StanLogo/-400.jpg" className="logo" /> */}
          <img src="/Ctan-400-231.jpg" className="logo" />
          <h1>{t("pageHome_Welcome")}👋</h1>
          <h3>{t("pageHome_aboutPage")}</h3>
          <Link href="/[lang]/about" as={`/${locale}/about`}>
            <a className="view-more">{t("pageHome_buttonAboutMe")}</a>
          </Link>
        </div>
      </div>
      <div className="latest-work">
        <h2>{t("pageHome_oldPromotions")}</h2>
        <Gallery images={images} />
        <div className="">
          <Link href="/[lang]/promotions" as={`/${locale}/promotions`}>
            <a className="view-more">{t("pageHome_viewAll")}</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .cover {
          position: relative;
          min-height: 600px;
          // background: transparent url(/cover.jpg) no-repeat center center;
          // background: transparent url(/sunrise-over-planet-earth-in.jpg) no-repeat
          // background: transparent url(/Karpaty.jpg) no-repeat
          // background: transparent url(/photo/bananu-alkogol.jpg) no-repeat
          background: transparent url(/photo/bananu-alkogol-obr.jpg) no-repeat
            center center;
          background-size: cover;
          word-wrap: break-word; /* Перенос слів */
        }
        .hello {
          position: absolute;
          top: 10px;
          left: 50px;
          // height: 300px;
          padding: 10px;
          // margin: 5 px;
          background: ${theme.colors.background};
          color: ${theme.colors.text};
          font-family: ${theme.fontFamily.sansSerif};
          // background: #3f3f3f;
        }
        .hello h1 {
          // margin: 0 0 10px 0;
          line-height: 0.01;
        }
        .hello h3 {
          line-height: inherit;
          line-height: 0.01;
        }
        a.view-more {
          text-transform: uppercase;
          font-size: 16px;
        }
        .latest-work {
          text-align: center;
          // padding: 30px 0;
          padding: 10px 0;
          // margin-bottom: 60px;
          margin-bottom: 20px;
        }
        .logo {
          display: block; //Блок стремится расшириться на всю доступную ширину. Можно указать ширину и высоту явно
          width: 400px;
          top: 20px; //відступ
        }

        @media (max-width: 480px) {
          .hello {
            left: 30px;
            right: 30px;
            font-size: 18px;
            // padding: 20px;
            padding: 10px;
          }
          h1 {
            font-size: 28px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Homepage;
