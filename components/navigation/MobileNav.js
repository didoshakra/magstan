//MenuToggle.js //https://coursehunter.net/course/reactjs-s-nulya-do-profi
import React from "react";
import Link from "next/link";
import useTranslation from "../../translations/useTranslation";

const MobileNav = props => {
  const { locale, t } = useTranslation();
  return (
    //  Мобільна навігація
    <div className="mobile-nav">
      <div className="mobile-nav__title">Навігація</div>
      <ul className="mobile-nav__list">
        <li className="mobile-nav__item">
          <Link href="/[lang]" as={`/${locale}`}>
            <a className="mobile-nav__link">{t("headerMenu_titleHomeIcon")}</a>
          </Link>
        </li>

        <li className="mobile-nav__item">
          <Link href="/[lang]/promotions" as={`/${locale}/promotions`}>
            <a className="mobile-nav__link">
              {t("headerMenu_titlePromotions")}
            </a>
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link href="/[lang]/shops" as={`/${locale}/shops`}>
            <a className="mobile-nav__link">{t("headerMenu_titleShops")}</a>
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link href="/[lang]/about" as={`/${locale}/about`}>
            <a className="mobile-nav__link">{t("headerMenu_titleAboutME")}</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
      /* ----------------- Мобліна навігація ----------------- */

.mobile-nav {
  z-index: 9;
  /*display: block;*/
  /*position: absolute;*//*на мобілках видно мені коли переміститись вправо*стрілка)*/
  position: fixed;
  top: 0;
  /* height: 100%; */
  height: 500px;
  width: 350px;
  right: -350px;
  padding: 50px;
  border-radius: 5px;
  /*background-color: rgba(11, 92, 65, 0.623);*/
  background-color: rgba(66, 47, 58, 0.856);
  /*background-color: rgba(11, 92, 65, 0.623);*/
   transform: ${props.mobileMenuOpen ? "translateX(-100%)" : "translateX(0px)"};
   /* transform: "translateX(-100%)"; */
   transition: transform 0.4s ease-in;
}
/* При зменшенні екрану якщо не виключена кнопка щоб не показувало-не обовязково*/
@media (min-width: 1199px) {
  .mobile-nav {
display: none; /* Не показує мобільне меню на екранах>1199px */
  }
}


.mobile-nav__title {
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 30px;
  color: #f6d142;
}

.mobile-nav__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.mobile-nav__item {
  margin-bottom: 30px;
}

.mobile-nav__link {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 22px;
}

.mobile-nav__link:hover {
  color: #ffd600;
}
/*Для iphone 5*/
 @media (max-width: 600px) {
  .mobile-nav {
    width: 320px;
    /*right: -320px;*/
}
      `}</style>
    </div>
  );
};

export default MobileNav;
