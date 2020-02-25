//Header.js
import { useContext } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { ComponentContext } from "../context/ComponentContext";

const Header = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  return (
    <div className="header-wrapper">
      <Logo />
      <Menu />

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
      }
    `}</style>
      <style jsx>
        {`
      .header-wrapper {
        background: ${theme.colors.background1};`}
      </style>
    </div>
  );
};

export default Header;
