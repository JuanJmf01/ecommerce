import { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { colorBlueLight, colorPinkLight } from "../constants/variables"

import ComponenteConTamañoDePantalla from '../constants/ScreenSize'

import './css/menu.scss';
import ButtonIconContainer from './ButtonIconContainer';
import { Link } from 'react-router-dom';


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
                    <Link to="/">Home</Link>
                    <Link to="/seleccion-sostenible">Seleccion Sostenible</Link>
                </ul>
            }

            <div className="right-items">
                <ButtonIconContainer
                    handleIconClick={handleIconClick}
                    backgroundcontainer={colorBlueLight}
                    icon={<PiShoppingCart />}
                />

                <ButtonIconContainer
                    handleIconClick={handleIconClick}
                    backgroundcontainer={colorPinkLight}
                    icon={<CiUser />}
                />
            </div>

        </div>
    );
}

export default Menu;
