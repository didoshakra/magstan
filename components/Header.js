//Header.js
import { useContext, useEffect } from "react";

import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import { ComponentContext } from "../context/ComponentContext";
// import DrawerButton from "./Navigation/DrawerBootton";
// import Drawer from "./Navigation/Drawer";
// import { faColumns } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  // const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [headerOpen, setHeaderOpen] = React.useState(true);
  // const drawerOnClick = () => {
  //   setDrawerOpen(!drawerOpen);
  // };

  //***** щоб ховалась/появлялась Head при скролі ********/
  var prevScrollpos = 0;
  function mouseMove() {
    var currentScrollPos = pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setHeaderOpen(true);
    } else {
      setHeaderOpen(false);
    }
    prevScrollpos = currentScrollPos;
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
      {/* <Drawer drawerOpen={drawerOpen} drawerOnClick={drawerOnClick} />
      <DrawerButton drawerOpen={drawerOpen} drawerOnClick={drawerOnClick} /> */}
      <div className="header-wrapper">
        <Logo />
        <HeaderMenu />
      </div>

      <style jsx>{`
        .header-fixed {
          position: fixed;
          top: ${headerOpen ? "0" : "-60px"};
          transition: top 0.4s ease-in;
          height: 60px;
          width: 100%;
          z-index: 100;
        }
        .header-wrapper {
          padding: 10px; /*Відступ зверху*/
          max-height: 60px;
          display: flex;
          justify-content: space-between; /*Вирівнювання вправо*/
          align-items: center;
        }
        @media (max-width: 1200px) {
          /*@media (max-width: 600px) {*/
          .header-fixed {
            position: relative;
            /*display: block;*/
            text-align: center;
          }
        }
      `}</style>
      <style jsx>{`
      .header-wrapper {
        background: ${theme.colors.background1};`}</style>
    </div>
  );
};

export default Header;
