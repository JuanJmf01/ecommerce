import './css/globalButtonContainer.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const ButtonContainer = styled.div`
    background-color: ${({ color }) => color || 'pink'};
    transition: background-color 0.5s ease; 
    
    &:hover {
        background-color: ${({ hoverColor }) => hoverColor || 'lightpink'}; 
    }
`;

function GlobalButtonContainer({ name, color, hoverColor, link }) {
    return (
        <Link className="button" to={link}>
            <ButtonContainer className="button-container" color={color} hoverColor={hoverColor}>
                {name}
            </ButtonContainer>
        </Link>
    );
}

export default GlobalButtonContainer;
