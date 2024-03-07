import { useState } from 'react';
import { AiOutlineAlignLeft } from "react-icons/ai";

import './css/secondaryMenu.css';

function SecondaryMenu({ toggleLateralMenu }) {
  const [iconClicked, setIconClicked] = useState(false);

  const handleIconClick = () => {
    setIconClicked(!iconClicked);
    toggleLateralMenu(); // Llamar a la funcion para abrir el menu lateral
  };

  return (
    <div className="secondaryMenu">
      <button className='sideMenuButton' onClick={handleIconClick}>
        <span><AiOutlineAlignLeft /></span>
        <p>Todo</p>
      </button>
      <ul className='items'>
        <li><a href="/servicio_cliente">Servicio al cliente</a></li>
        <li><a href="/vender">Vender</a></li>
      </ul>
    </div>
  );
}

export default SecondaryMenu;
