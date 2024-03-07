import { useState } from 'react';
import { IoClose } from "react-icons/io5";

import './css/lateralMenu.scss';


function LateralMenu({ toggleLateralMenu }) {
    const [iconClicked, setIconClicked] = useState(false);

    const handleIconClick = () => {
        setIconClicked(!iconClicked);
        toggleLateralMenu(); // Llamar a la funcion para abrir el menu lateral
    };

    return (
        <div className={` ${!iconClicked ? 'overlay-active' : ''}`}>
            <div className="lateral-menu">
                <div className="menu-header">
                    <h3 className="menu-title">Menu</h3>
                    <button onClick={handleIconClick} className="close-button"><IoClose /></button>
                </div>

                <h3 className='menu-subTitle'>Contenido</h3>
                {/* Lista de categorias */}
                <div className="menu-item">
                    <i className="fas fa-home"></i>
                    <span>Inicio</span>
                </div>
                <div className="menu-item">
                    <i className="fas fa-user"></i>
                    <span>Perfil</span>
                </div>
                <div className="menu-item">
                    <i className="fas fa-cog"></i>
                    <span>Configuracion</span>
                </div>
                <h3 className="menu-subTitle">Seleccion sostenible</h3>
                {/* Lista de categorias de sostenibilidad  */}

                <h3 className="menu-subTitle">Seleccion por segmento</h3>
                {/* Lista de categorias de segmento */}
            </div>
        </div>
    );
}

export default LateralMenu;
