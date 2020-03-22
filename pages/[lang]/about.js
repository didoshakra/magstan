//About.js
import { useContext } from "react";
import { ComponentContext } from "../../context/ComponentContext";
import Layout from "../../components/main/Layout";
import useTranslation from "../../translations/useTranslation";

const About = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const { t } = useTranslation();
  return (
    // <Layout title="Shops">
    <Layout
      title={t("pageAboutMe_title")}
      description={t("pageAboutMe_description")}
    >
      <div className="conteiner">
        {/* //<div>-потрібен для того що чітко окреслити розміри внутрішнього контейнера */}
        <div className="paper">
          <h1>{t("pageAboutMe_title")}</h1>
          <div className="shops">
            <div className="shops-list">
              <div className="card__item">
                <h3 id="m1">{t("pageAboutMe_firstShop")}</h3>
                <img src="/shops/Ctan2-500-375.jpg" alt="Ctan2" />
                <p>{t("pageShops_m1Descr")}</p>
              </div>
              <div className="item">
                <h3>{t("home_aboutPage")}</h3>
                {t("pageAboutMe_text1")}
                <h4>{t("pageAboutMe_text2")}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .conteiner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          //padding-top: 20px;
          padding: 20px;

          flex-grow: 1; //Кофіцієнт збільшення
          width: 100%;
          background: ${theme.colors.background};
        }
        .paper {
          width: 100%;
          padding-bottom: 20px;
          padding: 0 20px; //Внутріщні відступи Paper
          margin-bottom: 10px;
          display: flex;
          flex-direction: column;
          border-radius: 15px;
          background: ${theme.colors.backgroundPaper};
          box-shadow: ${theme.colors.boxShadowPaper};
        }
        .shops {
          max-width: 1000px;
          margin: 0 auto;
        }
        .shops-list {
          padding: 0 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .item {
          // animation: radial-pulse 1s infinite;
          overflow: hidden; //щоб изображение не выходило за рамки блока при увеличении. Не працює!!!
          transition: all 0.4s linear; //Для плавної зміни розміру
          padding: 10px;
          margin-bottom: 40px;
          width: 50%;
          text-align: justify; //вирівновання тексту по всій ширині блоку
        }
        .item .imgs:hover {
          //scale(1.2);пропорциональное увеличение элемента в 3 раза
          transform: scale(1.1, 1.1);
          // transform: scale(0.5); // пропорциональное уменьшение элемента наполовину
        }

        img {
          max-width: 100%;
        }
        h2 {
          margin: 0 0 5px 0;
        }
        p {
          font-size: 18px;
          color: #777;
        }
        @media (max-width: 600px) {
          .shops .item {
            width: auto;
            padding: 10px 20px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default About;
