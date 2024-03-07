import React, { useState } from 'react';
import Menu from "./../components/Menu";
import SecondaryMenu from "./../components/SecondaryMenu";
import LateralMenu from "./../components/LateralMenu";

import './css/home.scss'

function Home() {
  const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false);

  const toggleLateralMenu = () => {
    setIsLateralMenuOpen(!isLateralMenuOpen);
  };

  return (
    <div className="home-container">
      <div className="menu-container">
        <Menu />
        <SecondaryMenu toggleLateralMenu={toggleLateralMenu} />
        {isLateralMenuOpen && <LateralMenu toggleLateralMenu={toggleLateralMenu} />}
      </div>
      <div className={`content-container ${isLateralMenuOpen ? 'overlay-active' : ''}`}>
        {/* Contenido principal de tu página */}
        <div className="content">
          {/* Contenido principal de tu página */}
        </div>
      </div>
    </div>
  );
}

export default Home;