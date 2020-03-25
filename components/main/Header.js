//Header.js
import { useContext, useEffect } from "react";

import Logo from "./Logo";
import { ComponentContext } from "../../context/ComponentContext";
import HeaderMenu from "./HeaderMenu";

var lastScrollTop = 0;
var scrolUP = false;

const Header = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const [headerOpen, setHeaderOpen] = React.useState(true); //*** щоб ховалась/появлялась Head при скролі

  //*** щоб ховалась/появлялась Head при скролі
  function mouseMove() {
    var st = pageYOffset;
    if (st > 100) {
      if (st - lastScrollTop > 0 || (st - lastScrollTop == 0 && !scrolUP)) {
        scrolUP = false;
        setHeaderOpen(false);
      } else {
        setHeaderOpen(true);
        scrolUP = true;
      }
    } else {
      setHeaderOpen(true);
    }
    lastScrollTop = st;
  }

  useEffect(() => {
    // Прив’яжіть прослуховувач події
    document.addEventListener("scroll", mouseMove); //Для скролу
    // document.addEventListener("mousemove", mouseMove);//для переміщення мишки (координати)
    return () => {
      // Від’єднайте слухача події під час очищення
      document.removeEventListener("scroll", mouseMove);
      // document.removeEventListener("mousemove", mouseMove);
    };
  });

  return (
    <div className="header-fixed">
      <div className="header-wrapper">
        <Logo />
        <HeaderMenu />
      </div>

      <style jsx>{`
        .header-fixed {
          position: fixed;
          //Сховати header
          top: ${headerOpen ? "0" : "-60px"};
          height: 60px;
          width: 100%;
          transition: top 0.4s ease-in;
          z-index: 100;
        }
        .header-wrapper {
          //padding: 10px; /*Відступ зверху*/
          //max-height: 60px;
          height: 60px;
          display: flex;
          justify-content: space-between; /*Вирівнювання вправо*/
          align-items: center;
        }
      `}</style>
      <style jsx>{`
      .header-wrapper {
        background: ${theme.colors.backgroundHead};`}</style>
    </div>
  );
};

export default Header;
