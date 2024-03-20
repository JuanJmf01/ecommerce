import ComponenteConTamañoDePantalla from '../constants/ScreenSize';
import IndividualProduct from '../components/IndividualProduct';
import SustainableCategoriesContainer from '../components/SustainableCategoriesContainer';
import { getAllEcologicalCategories } from '../data/services/api/ecologicalCategories.api.ts'
import { getAllProducts } from '../api/products.api';

import React, { useEffect, useRef, useState } from 'react';
import { colorWhite, colorPinkLight, colorPink, colorBlueSuperLight, colorBlue, colorPinkSuperLight, colorBlueLight } from '../constants/variables';


import './css/products.scss';
import GlobalLinkContainer from '../components/globalLinkContainer.jsx';




function Products() {
    const widthContainerCategory = '140px';
    const heightContainerCategory = '180px';
    const screenSize = ComponenteConTamañoDePantalla();

    const [ecologicalCategories, setEcologicalCategories] = useState()


    const categoriesListRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - categoriesListRef.current.offsetLeft);
        setScrollLeft(categoriesListRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    };

    const handleMouseUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - categoriesListRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Velocidad del desplazamiento
        categoriesListRef.current.scrollLeft = scrollLeft - walk;
    };

    const [products, setProducts] = useState([]); // Agregar esta línea

    const getTopDiscountProducts = () => {
        const sortedProducts = [...products].sort((a, b) => b.discount - a.discount);
        return sortedProducts.slice(0, 4);
    };
    

    useEffect(() => { // Agregar esta función useEffect
        async function loadEcologicalCategories() {
            try {
                const res = await getAllEcologicalCategories();
                setEcologicalCategories(res);
    
            } catch (error) {
                console.error("Error al cargar categorías ecológicas:", error);
            }
        }

        async function loadProducts() {
          try {
            const res = await getAllProducts();
            setProducts(res.data);
            console.log(res);
          } catch (error) {
            console.error("Error al cargar productos:", error);
          }
        }
        loadProducts();
        loadEcologicalCategories()
      }, []);


    /*
    useEffect(() => {

        loadEcologicalCategories()

    }, [])
    */

    return (
        <div>
            <div className='products-content'>
                <div className='products-content-container'>
                
                
                    <div className='phrase-container'>
                        <p className='phrase'> English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover</p>
                        <p className='phrase-autor'>Autor</p>
                    </div>
                    <div className='products-content'>
                        <h3>All products</h3>
                        
                        <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                            {products.slice(-8).map((product, index) => (
                                <div key={index} className="individual-product">
                                    <IndividualProduct products={product} />
                                </div>
                            ))}
                        </div>
                        <div className='products-store-button'>
                            <GlobalLinkContainer name="Open store" color={colorPinkLight} hoverColor={colorPink}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
