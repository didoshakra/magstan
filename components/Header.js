//Header.js
import { useContext, useEffect } from "react";

import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import { ComponentContext } from "../context/ComponentContext";
// import DrawerButton from "./Navigation/DrawerBootton";
// import Drawer from "./Navigation/Drawer";
// import { faColumns } from "@fortawesome/free-solid-svg-icons";

var lastScrollTop = 0;
var scrolUP = false;

const Header = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  // const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [headerOpen, setHeaderOpen] = React.useState(true);
  // const drawerOnClick = () => {
  //   setDrawerOpen(!drawerOpen);
  // };

  //*** щоб ховалась/появлялась Head при скролі
  function mouseMove() {
    // alert("Ти порухав мишкою!/mousemove");
    // console.log("Header.js/скрол=", pageYOffset);
    // console.log("Header.js/Y=", event.pageY);
    var st = pageYOffset;
    console.log("Header.js/st=", st + "/lastScrollTop=", lastScrollTop);
    if (st > 100) {
      if (st - lastScrollTop > 0 || (st - lastScrollTop == 0 && !scrolUP)) {
        console.log("Скрол вниз!");
        scrolUP = false;
        // alert("Скрол вниз!");
        setHeaderOpen(false);
        // downscroll code
      } else {
        setHeaderOpen(true);
        scrolUP = true;
        console.log("Скрол вверх!");
      }
    } else {
      setHeaderOpen(true);
    }
    lastScrollTop = st;
  }

  // var prevScrollpos = window.pageYOffset;
  // function mouseMove() {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     setHeaderOpen(true);
  //   } else {
  //     setHeaderOpen(false);
  //   }
  //   prevScrollpos = currentScrollPos;
  // }

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
          height: 60px;
          width: 100%;
          transition: top 0.4s ease-in;
          z-index: 100;
        }
        .header-wrapper {
          padding: 10px; /*Відступ зверху*/
          max-height: 60px;
          display: flex;
          justify-content: space-between; /*Вирівнювання вправо*/
          align-items: center;
        }
      `}</style>
      <style jsx>{`
      .header-wrapper {
        background: ${theme.colors.background1};`}</style>
    </div>
  );
};

export default Header;
