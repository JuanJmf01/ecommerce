import './css/sustainableCategoriesContainer.scss'
import ComponenteConTamañoDePantalla from '../constants/ScreenSize'
import styled from 'styled-components';
import { GiRecycle } from "react-icons/gi";

import { colorGreyLight, colorGrey, mediumScreenWidth } from '../constants/variables';

const CategoryContainer = styled.div`
    background-color: ${({ background }) => background || 'white'};
    width: ${({ width }) => width || '150px'};
    height: ${({ height }) => height || '200px'};
`

const CategoryImageContainer = styled.div`
    background-color: ${({ background }) => background || 'white'};
    border: 1.5px solid ${({ borderColor }) => borderColor || colorGreyLight};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ iconcolor }) => iconcolor || colorGrey};
`

function SustainableCategoriesContainer({ width, height, background, borderColor, iconcolor, name, description }) {
    const screenSize = ComponenteConTamañoDePantalla();

    let sizeImageContainer = screenSize.screenWidth < mediumScreenWidth ? '55px' : '65px';
    let fontSizeImage = screenSize.screenWidth < mediumScreenWidth ? '30px' : '40px';

    return (
        <CategoryContainer className='sustainable-category-container' width={width} height={height} background={background} >
            <div className='sustainable-category-content'>
                <CategoryImageContainer className='sustainable-category-image-container' width={sizeImageContainer} height={sizeImageContainer} fontSize={fontSizeImage} background={background} borderColor={borderColor} iconcolor={iconcolor}>
                    <GiRecycle />
                </CategoryImageContainer>
                <h4 className='sustainable-category-name'>{name}</h4>
            </div>
            <p className='sustainable-category-description'>{description}</p>
        </CategoryContainer>
    );
}

export default SustainableCategoriesContainer;
