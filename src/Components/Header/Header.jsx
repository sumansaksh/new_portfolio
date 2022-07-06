import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";
const head = '<𝕤𝕦𝕞𝕒𝕟/>'
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={`bg-color-${themename} header center`  + themename}>
        <h3 style={{marginTop:'20px'}}>
          <a href="#home" style={{padding:"6px"}}className="link">
          {head}
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
