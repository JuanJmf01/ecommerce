import React, { useState, useEffect } from 'react';
import Menu from "./Menu";
import SecondaryMenu from "./SecondaryMenu";
import LateralMenu from "./LateralMenu";
import styled from 'styled-components';



function Navigation({ withLateralMenu }) {
  const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false);


  const toggleLateralMenu = () => {
    setIsLateralMenuOpen(!isLateralMenuOpen);
  };
  

  return (
    <div>
      <Menu />
      <SecondaryMenu toggleLateralMenu={toggleLateralMenu} withLateralMenu={withLateralMenu} />
      {withLateralMenu && isLateralMenuOpen ? <LateralMenu
        toggleLateralMenu={toggleLateralMenu} withLateralMenu={withLateralMenu}
      /> : undefined}
    </div>
  );
}

export default Navigation;