//portfolio.js
import Layout from "../../components/layout";
import Gallery from "../../components/gallery";
import useTranslation from "../../translations/useTranslation";

const Promotions = () => {
  const { t } = useTranslation();
  const images = [];
  const imageCount = 17;

  for (let i = imageCount; i > 0; i--) {
    images.push(`/promotions/${i}.jpg`); //Добавляє в масив
  }

  return (
    // <Layout title="Portfolio">
    <Layout title={t("pagePromotions_title")}>
      <h1>{t("pagePromotions_title")}</h1>
      <Gallery images={images} />
    </Layout>
  );
};

export default Promotions;
