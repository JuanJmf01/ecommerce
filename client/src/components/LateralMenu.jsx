import { IoClose } from "react-icons/io5";
import React, { useState } from 'react';



function LateralMenu({ toggleLateralMenu, categories, ecologicalcategories, genderCategories }) {
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
                {/* Categories list */}
                {categories}
                <h3 className="menu-subTitle">Seleccion sostenible</h3>
                {/* List of sustainable categories */}

                {ecologicalcategories}

                <h3 className="menu-subTitle">Seleccion por segmento</h3>
                {/* List of categories by gender */}

                {genderCategories}
            </div>
        </div>
    );
}

export default LateralMenu;
