import { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { colorBlueLight, colorPinkLight } from "../constants/variables"

import ComponenteConTamañoDePantalla from '../constants/ScreenSize'

import './css/menu.scss';
import ButtonIconContainer from './ButtonIconContainer';


function Menu() {
    const screenSize = ComponenteConTamañoDePantalla();

    const [iconClicked, setIconClicked] = useState(false);


    const handleIconClick = () => {
        setIconClicked(!iconClicked);
        console.log("El icono ha sido presionado");
    };

    return (
        <div className="menu">
            <div className="left-item">ECOMMERCE</div>

            {screenSize.screenWidth > 650 &&
                <ul className="middle-item">
                    <li><a href="/">Home</a></li>
                    <li><a href="/seleccion-sostenible">Seleccion Sostenible</a></li>
                </ul>
            }

            <div className="right-items">
                <ButtonIconContainer
                    handleIconClick={handleIconClick}
                    backgroundContainer={colorBlueLight}
                    icon={<PiShoppingCart />}
                />

                <ButtonIconContainer
                    handleIconClick={handleIconClick}
                    backgroundContainer={colorPinkLight}
                    icon={<CiUser />}
                />
            </div>

        </div>
    );
}

export default Menu;
