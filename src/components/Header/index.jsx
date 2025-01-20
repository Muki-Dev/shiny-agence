import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    padding: 15;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
`

function Header(){
    return(
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/survey/1">Survey</StyledLink>
            <StyledLink to="/freelance">Freelance</StyledLink>
        </nav>
    )
}

export default Header;