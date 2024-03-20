import { useState } from 'react';
import { AiOutlineAlignLeft } from "react-icons/ai";

import './css/secondaryMenu.css';

function SecondaryMenu({ toggleLateralMenu, withLateralMenu }) {
  const [iconClicked, setIconClicked] = useState(false);

  const handleIconClick = () => {
    setIconClicked(!iconClicked);
    toggleLateralMenu(); // Llamar a la funcion para abrir el menu lateral
  };



  return (
    <div className="secondaryMenu">
      {withLateralMenu ? <button className='sideMenuButton' onClick={handleIconClick}>
        <span><AiOutlineAlignLeft /></span>
        <p>Todo</p>

      </button> : undefined}
      <ul className='items'>
        <li><a href="/products">Ver productos</a></li>
        <li><a href="/products-create">Vender</a></li>
      </ul>
    </div>
  );
}

export default SecondaryMenu;
