import LateralMenu from '../components/LateralMenu';
import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";

import IndividualProduct from '../components/IndividualProduct';
import ComponenteConTamañoDePantalla from '../constants/ScreenSize'

import SecondaryMenu from '../components/SecondaryMenu';

import { smallScreenWidth, mediumScreenWidth } from '../constants/variables';
import { useParams } from 'react-router-dom';


import './css/products.scss'

function Products() {
    const { categoryType, categoryId } = useParams();

    const screenSize = ComponenteConTamañoDePantalla();

    const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [ecologicalCategory, setEcologicalCategory] = useState([]);
    const [genderCategories, setGenderCategories] = useState([]);


    let width = screenSize.screenWidth > smallScreenWidth ? '220px' : '180px'
    let withLateralMenu = screenSize.screenWidth > smallScreenWidth ? false : true

    if (screenSize.screenWidth > smallScreenWidth && screenSize.screenWidth <= mediumScreenWidth) {
        width = '170px'
    }

    const handleSelectCategory = (category) => {
        console.log(categoryType)
        console.log(categoryId)
        console.log(category)

        if (categoryType === 'category') {
            setCategories([...categories, category]);
            console.log(categories)

        }
        // } else if (categoryType === 'ecological') {
        //     setEcologicalCategory([...ecologicalCategory, category]);
        // } else if (categoryType === 'gender') {
        //     setGenderCategories([...genderCategories, category]);
        // }
    };


    const toggleLateralMenu = () => {
        setIsLateralMenuOpen(!isLateralMenuOpen);
    };

    useEffect(() => {
        console.log(categoryType)
        console.log(categoryId)

        const category = {
            "id": categoryId,
            "name": categoryType
        };

        handleSelectCategory(category)
    }, []);

    return (

        <div>
            <SecondaryMenu toggleLateralMenu={toggleLateralMenu} withLateralMenu={withLateralMenu} />
            <div className='container'>
                {screenSize.screenWidth > smallScreenWidth
                    ? <LateralMenu withLateralMenu={false} onSelectCategory={handleSelectCategory} />
                    : undefined}

                {isLateralMenuOpen ? <LateralMenu
                    toggleLateralMenu={toggleLateralMenu} withLateralMenu={true} onSelectCategory={handleSelectCategory}
                /> : undefined}

                <div className='search-products-content'>
                    <div className='filters-by-category-container'>
                        {categories.map((category, index) => (
                            <div key={index} className='category-container'>
                                <p className='filter-category-name'>{category.name}</p>
                                <button className='close-Button'>
                                    <IoClose />
                                </button>
                            </div>
                        ))
                        }
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


