import styled from 'styled-components';

import ComponenteConTamañoDePantalla from '../constants/ScreenSize'



const ButtonIcon = styled.button`
    background: none;
    border: none;
    width: ${({ sizeContainer }) => sizeContainer};
    height: ${({ sizeContainer }) => sizeContainer};
    border-radius: 50%;
    background-color: ${({ backgroundContainer }) => backgroundContainer};
`;

const StyledIcon = styled.span`
    font-size: ${({ iconSize }) => iconSize || '17px'};
    color: ${({ iconColor }) => iconColor || 'black'};
`;

function ButtonIconContainer({ handleIconClick, backgroundContainer, icon, iconColor }) {

    const screenSize = ComponenteConTamañoDePantalla();
    let iconSize = screenSize.screenWidth < 950 ? '1em' : '1.2em'
    let sizeContainer = screenSize.screenWidth < 950 ? '2.3em' : '2.7em'


    return (
        <ButtonIcon sizeContainer={sizeContainer} backgroundContainer={backgroundContainer} onClick={handleIconClick}>
            <StyledIcon iconSize={iconSize} iconColor={iconColor}>{icon}</StyledIcon>
        </ButtonIcon>
    );
}

export default ButtonIconContainer;
