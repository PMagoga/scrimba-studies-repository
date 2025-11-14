import React from "react";
import robotImage from "../src/assets/robot.png";

function Header() {
  return (
    <header>
      <img src={robotImage} alt="Robot" />
      <h1>Chef Claude</h1>
    </header>
  );
}

export default Header;
