import styled from 'styled-components';

import ComponenteConTamañoDePantalla from '../constants/ScreenSize'


const ButtonIcon = styled.button`
    background: none;
    border: none;
    width: ${({ sizecontainer }) => sizecontainer};
    height: ${({ sizecontainer }) => sizecontainer};
    border-radius: 50%;
    background-color: ${({ backgroundcontainer }) => backgroundcontainer};
`;

const StyledIcon = styled.span`
    font-size: ${({ iconsize }) => iconsize || '17px'};
    color: ${({ iconcolor }) => iconcolor || 'black'};
`;

function ButtonIconContainer({ handleIconClick, backgroundcontainer, icon, iconcolor }) {

    const screenSize = ComponenteConTamañoDePantalla();
    let iconsize = screenSize.screenWidth < 950 ? '1em' : '1.2em'
    let sizecontainer = screenSize.screenWidth < 950 ? '2.3em' : '2.7em'


    return (
        <ButtonIcon sizecontainer={sizecontainer} backgroundcontainer={backgroundcontainer} onClick={handleIconClick}>
            <StyledIcon iconsize={iconsize} iconcolor={iconcolor}>{icon}</StyledIcon>
        </ButtonIcon>
    );
}

export default ButtonIconContainer;
