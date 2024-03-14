import LateralMenu from '../components/LateralMenu';
import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";

import IndividualProduct from '../components/IndividualProduct';
import ComponenteConTamañoDePantalla from '../constants/ScreenSize'

import SecondaryMenu from '../components/SecondaryMenu';

import { smallScreenWidth, mediumScreenWidth } from '../constants/variables';
import { useParams } from 'react-router-dom';

import { useCategories } from '../data/services/providers/categoriesContext';


import './css/products.scss'

function Products() {
    const { categoryType, categoryId, categoryName } = useParams();
    const { categories, ecologicalCategories, genderCategories, addCategory, deleteCategory } = useCategories();
    const screenSize = ComponenteConTamañoDePantalla();
    const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false);

    let width = screenSize.screenWidth > smallScreenWidth ? '220px' : '180px'
    let withLateralMenu = screenSize.screenWidth > smallScreenWidth ? false : true

    if (screenSize.screenWidth > smallScreenWidth && screenSize.screenWidth <= mediumScreenWidth) {
        width = '170px'
    }

    const toggleLateralMenu = () => {
        setIsLateralMenuOpen(!isLateralMenuOpen);
    };

    useEffect(() => {
        addCategory(categoryType, { id: categoryId, name: categoryName });
    }, [categoryType, categoryId, categoryName]);

    const handleDeleteCategory = (type, id) => {
        deleteCategory(type, id);
    };



    return (
        <div>
            <SecondaryMenu toggleLateralMenu={toggleLateralMenu} withLateralMenu={withLateralMenu} />
            <div className='container'>
                {screenSize.screenWidth > smallScreenWidth
                    ? <LateralMenu withLateralMenu={false} goToProductsDirectly={true} />
                    : undefined}

                {isLateralMenuOpen ? <LateralMenu
                    toggleLateralMenu={toggleLateralMenu} withLateralMenu={true} goToProductsDirectly={true}

                /> : undefined}

                <div className='search-products-content'>
                    <div className='filters-by-category-container'>
                        {categories.map((category, index) => (
                            <div key={index} className='category-container'>
                                <p className='filter-category-name'>{category.name}</p>
                                <button className='close-Button' onClick={() => handleDeleteCategory('category', category.id)}>
                                    <IoClose />
                                </button>
                            </div>
                        ))}
                        {ecologicalCategories.map((category, index) => (
                            <div key={index} className='category-container'>
                                <p className='filter-category-name'>{category.name}</p>
                                <button className='close-Button' onClick={() => handleDeleteCategory('ecological', category.id)}>
                                    <IoClose />
                                </button>
                            </div>
                        ))}
                        {genderCategories.map((category, index) => (
                            <div key={index} className='category-container'>
                                <p className='filter-category-name'>{category.name}</p>
                                <button className='close-Button' onClick={() => handleDeleteCategory('gender', category.id)}>
                                    <IoClose />
                                </button>
                            </div>
                        ))}
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
        </div>
    );
}

export default Products;


