import './css/individualProduct.scss'
import styled from 'styled-components';
import { PiShoppingCart } from "react-icons/pi";
import { colorBlack } from '../constants/variables';

import ButtonIconContainer from './ButtonIconContainer';


const ProductContainer = styled.div`
    border-radius: ${({ borderRadius }) => borderRadius || '17px'};
    background-color: ${({ backgroundcolor }) => backgroundcolor || 'white'};
    width: ${({ width }) => width || '180px'};
    height:  ${({ height }) => height || '270px'};
`;

const ProductImage = styled.div`
    background-color: ${props => props.color}; 
    height: ${props => props.height};
`;


function IndividualProduct({ borderRadius, backgroundcolor, width, height, imageHeight }) {


    return (
        <ProductContainer className='product-container' borderRadius={borderRadius} backgroundcolor={backgroundcolor} width={width} height={height}>
            <div className='discount'>
                <p>20%</p>
            </div>
            <ProductImage className='product-image' color="grey" height={imageHeight || '180px'}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/023/329/714/small/heart-tree-love-for-nature-red-landscape-at-sunset-generativ-ai-photo.jpg" />
            </ProductImage>
            <div className='product-info'>
                <p className='product-name '>Nombre del producto</p>
                <div className='price-container'>
                    <p>$54.99</p>
                    <p>$32.99</p>
                    <ButtonIconContainer
                        backgroundcontainer={colorBlack}
                        iconcolor="white"
                        icon={<PiShoppingCart />}
                    />
                </div>

            </div>
        </ProductContainer>

    );
}

export default IndividualProduct;