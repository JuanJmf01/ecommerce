import './css/individualProduct.scss'
import styled from 'styled-components';
import { PiShoppingCart } from "react-icons/pi";
import { colorBlack } from '../constants/variables';

import ButtonIconContainer from './ButtonIconContainer';
import camiseta from '../assets/camiseta.png';


const ProductContainer = styled.div`
    border-radius: ${({ borderRadius }) => borderRadius || '17px'};
    background-color: ${({ backgroundcolor }) => backgroundcolor || 'white'};
    width: ${({ width }) => width || '180px'};
    height: ${({ height }) => height || 'auto'};
`;

const ProductImage = styled.div`
    background-color: ${props => props.color}; 
    height: ${props => props.height};
`;


function IndividualProduct({ borderRadius, backgroundcolor, width, height, imageHeight, description }) {


    return (
        <ProductContainer className='product-container' borderRadius={borderRadius} backgroundcolor={backgroundcolor} width={width} height={height}>
            <div className='discount'>
                <p>20%</p>
            </div>
            <ProductImage className='product-image' height={imageHeight || '130px'}>
                <img src={camiseta} />
            </ProductImage>
            <div className='product-info'>
                <p className='product-name'>Nombre del producto</p>
                {description !== null && description !== undefined ? (
                    <p className='product-description'>{description}</p>
                ) : null}
                <div className='price-cart-container'>
                    <div className='price-container'>
                        <p className='previous-price'>$54.99</p>
                        <p className='current-price'>$32.99</p>
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