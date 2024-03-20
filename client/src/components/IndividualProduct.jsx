import React from 'react';
import styled from 'styled-components';
import { PiShoppingCart } from "react-icons/pi";
import { colorBlack } from '../constants/variables';
import ButtonIconContainer from './ButtonIconContainer';
import camiseta from '../assets/camiseta.png';

import './css/individualProduct.scss';

const ProductContainer = styled.div`
    border-radius: ${({ borderRadius }) => borderRadius || '17px'};
    background-color: ${({ backgroundcolor }) => backgroundcolor || 'white'};
    width: ${({ width }) => width || '190px'};
    height: ${({ height }) => height || 'auto'};

    transition: width 0.7s ease; 
    
    &:hover {
        width: ${({ hoverWidth }) => hoverWidth || '200px'};
    }
`;

const ProductImage = styled.div`
    background - color: ${props => props.color};
    height: ${props => props.height};
`;

function IndividualProduct({ borderRadius, backgroundcolor, width, height, imageHeight, products, hoverWidth }) {
    if (!products) {
        return null; // O manejar el caso en que product es undefined
    }

    return (
        <ProductContainer className='product-container' borderRadius={borderRadius} backgroundcolor={backgroundcolor} width={width} height={height} hoverWidth={hoverWidth}>
            <div className='discount'>
                <p>{products.discount}%</p>
            </div>
            <ProductImage className='product-image' height={imageHeight || '130px'}>
                <img src={camiseta} alt="Product" />
            </ProductImage>
            <div className='product-info'>
                <p className='product-name'>{products.name}</p>
                {products.description !== null && products.description !== undefined ? (
                    <p className='product-description'>{products.description}</p>
                ) : null}

                <div className='price-cart-container'>
                    <div className='price-container'>
                        {products.discount !== 0 ? <p className='previous-price'>$54.00</p> : undefined}
                        <p className='current-price'>${products.price}</p>
                    </div>
                    <div className='cart-button'>
                        <ButtonIconContainer
                            backgroundcontainer={colorBlack}
                            iconcolor="white"
                            icon={<PiShoppingCart />}
                        />
                    </div>
                </div>
            </div>
        </ProductContainer>
    );
}

export default IndividualProduct;
