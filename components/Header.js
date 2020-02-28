//Header.js
import { useContext } from "react";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import { ComponentContext } from "../context/ComponentContext";
// import DrawerButton from "./Navigation/DrawerBootton";
// import Drawer from "./Navigation/Drawer";

const Header = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const drawerOnClick = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div className="header-wrapper">
      {/* <Drawer drawerOpen={drawerOpen} drawerOnClick={drawerOnClick} /> */}
      {/* <DrawerButton drawerOpen={drawerOpen} drawerOnClick={drawerOnClick} /> */}
      <Logo />
      <HeaderMenu />

      <style jsx>{`
        .header-wrapper {
          padding: 10px; //Відступ зверху
          display: flex;
          justify-content: space-between; //Вирівнювання вправо
          align-items: center;
        }
        @media (max-width: 600px) {
          display: block;
          text-align: center;
        }
      `}</style>
      <style jsx>{`
      .header-wrapper {
        background: ${theme.colors.background1};`}</style>
    </div>
  );
};

export default Header;
