import React, { useRef, useState } from 'react';
import Base from '../components/Base';
import './css/home.scss';
import ComponenteConTamañoDePantalla from '../constants/ScreenSize';
import { colorWhite, colorPinkLight, colorPink, colorBlueSuperLight, colorBlue, colorPinkSuperLight } from '../constants/variables';
import SustainableCategoriesContainer from '../components/SustainableCategoriesContainer';

import IndividualProduct from '../components/IndividualProduct';


function Home() {
    const widthContainerCategory = '140px';
    const heightContainerCategory = '180px';
    const screenSize = ComponenteConTamañoDePantalla();


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
        const walk = (x - startX) * 2; // Ajusta la velocidad del desplazamiento
        categoriesListRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div>
            <Base />
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
                                            height={index === 1 ? "300px" : undefined}
                                            imageHeight={index === 1 ? '180px' : undefined}
                                            backgroundcolor={index === 1 ? colorPinkLight : colorWhite}
                                        /> : <IndividualProduct width="155px"
                                            height="240px"
                                            backgroundcolor={index === 1 ? colorPinkLight : colorWhite}
                                        />
                                    }
                                </div>
                            ))}
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
                            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                                <div key={index} className={`sustainable-categories-content`}>
                                    {screenSize.screenWidth > 950
                                        ? index % 6 === 0 || index === 1
                                            ? <SustainableCategoriesContainer
                                                background={colorBlueSuperLight}
                                                borderColor={colorBlue}
                                                iconcolor={colorBlue} />
                                            : index !== 1 && index % 2 !== 0
                                                ? < SustainableCategoriesContainer
                                                    background={colorPinkSuperLight}
                                                    borderColor={colorPink}
                                                    iconcolor={colorPink} />
                                                : <SustainableCategoriesContainer />
                                        : index % 6 === 0 || index === 1
                                            ? <SustainableCategoriesContainer
                                                width={widthContainerCategory}
                                                height={heightContainerCategory}
                                                background={colorBlueSuperLight}
                                                borderColor={colorBlue}
                                                iconcolor={colorBlue} />
                                            : index !== 1 && index % 2 !== 0
                                                ? < SustainableCategoriesContainer
                                                    width={widthContainerCategory}
                                                    height={heightContainerCategory}
                                                    background={colorPinkSuperLight}
                                                    borderColor={colorPink}
                                                    iconcolor={colorPink} />
                                                : <SustainableCategoriesContainer
                                                    width={widthContainerCategory}
                                                    height={heightContainerCategory} />

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
                        <h3>Todos los productos</h3>
                        <div className='product-list'>
                            <div className='individual-product'>
                                <IndividualProduct />
                            </div>
                            <div className='individual-product'>
                                <IndividualProduct />
                            </div>
                            <div className='individual-product'>
                                <IndividualProduct />
                            </div>
                            <div className='individual-product'>
                                <IndividualProduct />
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
