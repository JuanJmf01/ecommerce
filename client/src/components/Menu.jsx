import { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";

import './css/menu.css';


function Menu() {
    const [iconClicked, setIconClicked] = useState(false);


    const handleIconClick = () => {
        setIconClicked(!iconClicked);
        console.log("El icono ha sido presionado");
    };

    return (
        <div className="menu">
            <div className="left-item">ECOMMERCE</div>
            <ul className="middle-item">
                <li><a href="/">Home</a></li>
                <li><a href="/seleccion-sostenible">Selección Sostenible</a></li>
            </ul>
            <div>
                <button className="cart" onClick={handleIconClick}>
                    <span><PiShoppingCart /></span>
                </button>

                <button className="login" onClick={handleIconClick}>
                    <span><CiUser  /></span>
                </button>
            </div>

        </div>
    );
}

export default Menu;
