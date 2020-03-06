//Shops.js
import Link from "next/link";
import Layout from "../../components/Layout";
import useTranslation from "../../translations/useTranslation";
import GoogleMaps from "../../components/React-google-map";

const Shops = () => {
  const { t } = useTranslation();
  return (
    <Layout
      title={t("pageShops_title")}
      description={t("pageShops_description")}
    >
      <h1>{t("pageShops_title")}</h1>
      <div className="shops">
        <div className="shops-list">
          <Link href="#map">
            <div className="item" title={t("pageShops_onMap")}>
              <h3 id="m1">{t("pageShops_m1Title")}</h3>
              <img src="/shops/Ctan2-500-375.jpg" alt="Ctan2 " />
              <p>{t("pageShops_m1Descr")}</p>
            </div>
          </Link>
          <Link href="#map">
            <div className="item" title={t("pageShops_onMap")}>
              <h3 id="m2">{t("pageShops_m2Title")}</h3>
              <img src="/shops/m66-500-375.jpg" alt="m66" />
              <p>{t("pageShops_m2Descr")}</p>
            </div>
          </Link>
          <Link href="#map">
            <div className="item" title={t("pageShops_onMap")}>
              <h3 id="m3">{t("pageShops_m3Title")}</h3>
              <img src="/shops/Pushk-500-375.jpg" alt="Pushk" />
              <p>{t("pageShops_m3Descr")}</p>
            </div>
          </Link>
          <Link href="#map">
            <div className="item" title={t("pageShops_onMap")}>
              <h3 id="m4">{t("pageShops_m4Title")}</h3>
              <img src="/shops/Dvoruk-500-375.jpg" alt="Dvoruk" />
              <p>{t("pageShops_m4Descr")}</p>
            </div>
          </Link>
          <Link href="#map">
            <div className="item" title={t("pageShops_onMap")}>
              <h3 id="m5">{t("pageShops_m5Title")}</h3>
              <img src="/shops/Tytyn-500-375.jpg" alt="Tytyn" />
              <p>{t("pageShops_m5Descr")}</p>
            </div>
          </Link>
          <Link href="#map">
            <div className="item" title={t("pageShops_onMap")}>
              <h3 id="m6">{t("pageShops_m6Title")}</h3>
              <img src="/shops/m55-500-375.jpg" alt="m55" />
              <p>{t("pageShops_m6Descr")}</p>
            </div>
          </Link>
          <Link href="#map">
            <div className="item" title={t("pageShops_onMap")}>
              <h3 id="m7">{t("pageShops_m7Title")}</h3>
              <img src="/shops/mStan-500-355.jpg" alt="mStan" />
              <p>{t("pageShops_m7Descr")}</p>
            </div>
          </Link>
        </div>
        <p id="map">
          <GoogleMaps />
        </p>
      </div>

      <style jsx>{`
        .shops {
          max-width: 1000px;
          margin: 0 auto;
          scroll-behavior: smooth; /*Плавна прокрутка всередині сторінки*/
        }
        .shops-list {
          padding: 0 30px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .shops .item {
          overflow: hiden;
          overflow: hidden; //щоб изображение не выходило за рамки блока при увеличении. Не працює!!!
          //transition: all 0.4s linear; //Для плавної зміни розміру
          padding: 20px;
          margin-bottom: 40px;
          width: 50%;
        }

        .shops .item img:hover {
          transform: scale(1.1);
          transition: transform 0.4s ease-in;
          // transform: scale(0.5); // пропорциональное уменьшение элемента наполовину
          cursor: pointer; //рука
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

export default Shops;
