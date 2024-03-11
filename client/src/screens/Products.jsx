import LateralMenu from '../components/LateralMenu';
import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";

import IndividualProduct from '../components/IndividualProduct';
import ComponenteConTamañoDePantalla from '../constants/ScreenSize'

import { smallScreenWidth, mediumScreenWidth } from '../constants/variables';


import './css/products.scss'

function Products() {
    const screenSize = ComponenteConTamañoDePantalla();

    const [categories, setCategories] = useState([]);
    const [ecologicalCategory, setEcologicalCategory] = useState([]);
    const [genderCategories, setGenderCategories] = useState([]);


    let width = screenSize.screenWidth > smallScreenWidth ? '220px' : '180px'

    if (screenSize.screenWidth > smallScreenWidth && screenSize.screenWidth <= mediumScreenWidth) {
        width = '170px'
    }

    const handleSelectCategory = (category) => {
        // Actualizar el estado correspondiente con la nueva categoría seleccionada
        setCategories([...categories, category]); // Agregar la categoría seleccionada a la lista existente
        console.log(categories)
    };

    const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false);


    const toggleLateralMenu = () => {
        setIsLateralMenuOpen(!isLateralMenuOpen);
        toggleLateralMenu(); 

    };


    return (

        <div className='container'>
            {screenSize.screenWidth > smallScreenWidth ? <LateralMenu withLateralMenu={false} onSelectCategory={handleSelectCategory} /> : undefined}
            <div className='search-products-content'>
                <div className='filters-by-category-container'>
                    <div className='category-container'>
                        <p className='filter-category-name'>category</p>
                        <button className='close-Button'>
                            <IoClose />
                        </button>
                    </div>
                    <div className='category-container'>
                        <p className='filter-category-name'>category</p>
                        <button className='close-Button'>
                            <IoClose />
                        </button>
                    </div>
                </div>
                <div className='filtered-products-list'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                        <div key={index} className='individual-product'>
                            <IndividualProduct width={width} hoverWidth={width} description="English. Many desktop publishing packages and web page editors now use" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;


