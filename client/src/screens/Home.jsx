import ComponenteConTamañoDePantalla from '../constants/ScreenSize';
import IndividualProduct from '../components/IndividualProduct';
import SustainableCategoriesContainer from '../components/SustainableCategoriesContainer';
import { getAllEcologicalCategories } from '../data/services/api/ecologicalCategories.api.ts'

import React, { useEffect, useRef, useState } from 'react';
import { colorWhite, colorPinkLight, colorPink, colorBlueSuperLight, colorBlue, colorPinkSuperLight, colorBlueLight } from '../constants/variables';


import './css/home.scss';
import GlobalLinkContainer from '../components/globalLinkContainer.jsx';



function Home() {
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

    async function loadEcologicalCategories() {
        try {
            const res = await getAllEcologicalCategories();
            setEcologicalCategories(res);

        } catch (error) {
            console.error("Error al cargar categorías ecológicas:", error);
        }
    }

    useEffect(() => {

        loadEcologicalCategories()

    }, [])

    return (
        <div>
            <div className='home-content'>
                <div className='home-content-container'>
                    <div className="discount-products">
                        <h3 className='discount-products-title'>Productos con descuento</h3>
                        <div className="discount-product-list">
                            {[1, 2, 3, 4].map((index) => (
                                <div key={index} className={`discount-products-content ${index === 1 ? 'primer-elemento' : ''}`}>
                                    {screenSize.screenWidth > 800 ?
                                        <IndividualProduct
                                            width={index === 1 ? "200px" : undefined}
                                            height={index === 1 ? "270px" : undefined}
                                            imageHeight={index === 1 ? '160px' : undefined}
                                            backgroundcolor={index === 1 ? colorPinkLight : colorWhite}
                                        /> : <IndividualProduct width="175px"
                                            height="220px"
                                            imageHeight="110px"
                                            backgroundcolor={index === 1 ? colorPinkLight : colorWhite}
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                        <div className='discount-store-button'>
                            <GlobalLinkContainer name="Open store" color={colorBlueLight} hoverColor={colorBlue}/>
                        </div>
                    </div>
                    <div className="sustainable-categories">
                        <h3 className='sustainable-categories-title'>Seleccion sostenible</h3>
                        <div
                            ref={categoriesListRef}
                            className='sustainable-categories-list'
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                        >

                            {ecologicalCategories && ecologicalCategories.map((category, index) => (
                                <div key={index} className={`sustainable-categories-content`}>
                                    {screenSize.screenWidth > 950
                                        ? index % 6 === 0 || index === 0
                                            ? <SustainableCategoriesContainer
                                                background={colorBlueSuperLight}
                                                borderColor={colorBlue}
                                                iconcolor={colorBlue}
                                                name={category.name}
                                                description={category.description} />
                                            : index !== 1 && index % 2 !== 0
                                                ? < SustainableCategoriesContainer
                                                    background={colorPinkSuperLight}
                                                    borderColor={colorPink}
                                                    iconcolor={colorPink}
                                                    name={category.name}
                                                    description={category.description} />
                                                : <SustainableCategoriesContainer
                                                    name={category.name}
                                                    description={category.description} />
                                        : index % 6 === 0 || index === 0
                                            ? <SustainableCategoriesContainer
                                                width={widthContainerCategory}
                                                height={heightContainerCategory}
                                                background={colorBlueSuperLight}
                                                borderColor={colorBlue}
                                                iconcolor={colorBlue}
                                                name={category.name}
                                                description={category.description} />
                                            : index !== 1 && index % 2 !== 0
                                                ? < SustainableCategoriesContainer
                                                    width={widthContainerCategory}
                                                    height={heightContainerCategory}
                                                    background={colorPinkSuperLight}
                                                    borderColor={colorPink}
                                                    iconcolor={colorPink}
                                                    name={category.name}
                                                    description={category.description} />
                                                : <SustainableCategoriesContainer
                                                    width={widthContainerCategory}
                                                    height={heightContainerCategory}
                                                    name={category.name}
                                                    description={category.description}
                                                />

                                    }
                                </div>

                            ))}
                        </div>
                    </div>

                    <div className='phrase-container'>
                        <p className='phrase'> English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover</p>
                        <p className='phrase-autor'>Autor</p>
                    </div>
                    <div className='products-content'>
                        <h3>All products</h3>
                        <div className='product-list'>
                            {[1, 2, 3, 4].map((item, index) => (
                                <div key={index} className='individual-product'>
                                    <IndividualProduct description="English. Many desktop publishing packages and web page editors now use" />
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

export default Home;
