import './css/individualProduct.scss'
import styled from 'styled-components';
import { PiShoppingCart } from "react-icons/pi";
import { colorBlack } from '../constants/variables';

import ButtonIconContainer from './ButtonIconContainer';
import camiseta from '../assets/camiseta.png';


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

const PreviusPricce = styled.p`
    text-decoration: line-through;
`;


function IndividualProduct({ borderRadius, backgroundcolor, width, height, imageHeight, description, name, price, discount, hoverWidth }) {


    function priceWithDiscount() {
        // Verificar que el descuento esté en el rango correcto (0-100)
        if (discount < 0 || discount > 100) {
            return "El descuento debe estar entre 0 y 100.";
        }
        // Calcular el monto de descuento
        var montoDescuento = price * (discount / 100);
        // Calcular el precio con descuento
        var precioConDescuento = price - montoDescuento;
        // Devolver el precio con descuento
        return precioConDescuento;
    }



    return (
        <ProductContainer className='product-container' borderRadius={borderRadius} backgroundcolor={backgroundcolor} width={width} height={height} hoverWidth={hoverWidth}>
            <div className='discount'>
                <p>20%</p>
            </div>
            <ProductImage className='product-image' height={imageHeight || '130px'}>
                <img src={camiseta} />
            </ProductImage>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                {description !== null && description !== undefined ? (
                    <p className='product-description'>{description}</p>
                ) : null}

                <div className='price-cart-container'>
                    {discount !== 0 ?
                        <div className='price-container'>
                            <PreviusPricce className='previous-price'>{price}</PreviusPricce>
                            <p className='current-price'>${priceWithDiscount()}</p>
                        </div> :
                        <div className='price-container'>
                            <p className='current-price'>{price}</p>
                        </div>
                    }
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