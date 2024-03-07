import React, { useState } from 'react';
import Menu from "./Menu";
import SecondaryMenu from "./SecondaryMenu";
import LateralMenu from "./LateralMenu";


function Base() {
  const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false);

  const toggleLateralMenu = () => {
    setIsLateralMenuOpen(!isLateralMenuOpen);
  };

  return (
    <div>
      <Menu />
      <SecondaryMenu toggleLateralMenu={toggleLateralMenu} />
      {isLateralMenuOpen && <LateralMenu toggleLateralMenu={toggleLateralMenu} />}
    </div>
  );
}

export default Base;