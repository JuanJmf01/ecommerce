import LateralMenu from '../components/LateralMenu';
import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";

import IndividualProduct from '../components/IndividualProduct';
import ComponenteConTamañoDePantalla from '../constants/ScreenSize'

import SecondaryMenu from '../components/SecondaryMenu';

import { smallScreenWidth, mediumScreenWidth } from '../constants/variables';
import { useParams, useNavigate } from 'react-router-dom';

import { useCategories } from '../data/services/providers/categoriesContext';

import { getAllProducts, getProductsByCategory, getProductsByEcologicalCategory, getProductsByGenderCategory } from '../data/services/api/products.api'


import './css/products.scss'

function Products() {
    const { categoryType, categoryId, categoryName } = useParams();
    const { categories, ecologicalCategories, genderCategories, addCategory, deleteCategory } = useCategories();
    const screenSize = ComponenteConTamañoDePantalla();
    const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    let width = screenSize.screenWidth > smallScreenWidth ? '220px' : '180px'
    let withLateralMenu = screenSize.screenWidth > smallScreenWidth ? false : true


    if (screenSize.screenWidth > smallScreenWidth && screenSize.screenWidth <= mediumScreenWidth) {
        width = '170px'
    }

    async function loadAllProducts() {
        try {
            const res = await getAllProducts();
            setProducts(res.data);
            console.log(res.data)

        } catch (error) {
            console.error("Error al cargar categorías ecológicas:", error);
        }
    }

    async function loadProductsByCategories(idCategory) {
        try {
            const res = await getProductsByCategory(idCategory);
            setProducts(res.data);
        } catch (error) {
            console.error("Error al cargar categorías ecológicas:", error);
        }
    }


    async function loadProductsByEcologicalCategories(idCategory) {
        try {
            const res = await getProductsByEcologicalCategory(idCategory);
            setProducts(res.data);
        } catch (error) {
            console.error("Error al cargar categorías ecológicas:", error);
        }
    }

    async function loadProductsByGenderCategories(idCategory) {
        try {
            const res = await getProductsByGenderCategory(idCategory);
            setProducts(res.data);
            console.log(res.data)
        } catch (error) {
            console.error("Error al cargar categorías ecológicas:", error);
        }
    }

    const toggleLateralMenu = () => {
        setIsLateralMenuOpen(!isLateralMenuOpen);
    };



    useEffect(() => {
        addCategory(categoryType, { id: categoryId, name: categoryName });

    }, [categoryType, categoryId, categoryName]);

    const handleDeleteCategory = (type, id) => {
        const areAllCategoriesEmpty = deleteCategory(type, id);
        if (areAllCategoriesEmpty) {
            navigate('/products')
            loadAllProducts()
        }
    };


    useEffect(() => {
        if (categories.length > 0) {
            loadProductsByCategories(categories[0].id)
        }
        if (ecologicalCategories.length > 0) {
            loadProductsByEcologicalCategories(ecologicalCategories[0].id)
        }
        if (genderCategories.length > 0) {
            loadProductsByGenderCategories(genderCategories[0].id)
        }


    }, [categories, ecologicalCategories, genderCategories]);


    return (
        <div>
            <SecondaryMenu toggleLateralMenu={toggleLateralMenu} withLateralMenu={withLateralMenu} />
            <div className='container'>
                {screenSize.screenWidth > smallScreenWidth
                    ? <LateralMenu withLateralMenu={false} />
                    : undefined}

                {isLateralMenuOpen ? <LateralMenu
                    toggleLateralMenu={toggleLateralMenu} withLateralMenu={true}

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
                        {products.map((product, index) => (
                            <div key={index} className='individual-product'>
                                <IndividualProduct 
                                width={width} 
                                hoverWidth={width} 
                                name = { product.name } 
                                description = { product.description }
                                price = { product.price } 
                                discount={ product.discount }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;


