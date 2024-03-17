import React, { useState, useEffect } from 'react';
import Menu from "./Menu";
import SecondaryMenu from "./SecondaryMenu";
import LateralMenu from "./LateralMenu";
import ProductSearch from './ProductSearch';
import styled from 'styled-components';



function Navigation({ withLateralMenu }) {
  const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false);


  const toggleLateralMenu = () => {
    setIsLateralMenuOpen(!isLateralMenuOpen);
  };


  return (
    <div>
      <Menu />
      {withLateralMenu ? <SecondaryMenu toggleLateralMenu={toggleLateralMenu} withLateralMenu={withLateralMenu} /> : undefined}
      {isLateralMenuOpen ? <LateralMenu
        toggleLateralMenu={toggleLateralMenu} withLateralMenu={withLateralMenu} goToProductsDirectly={false}
      /> : undefined}
      <ProductSearch />
    </div>
    
  );
}

export default Navigation;