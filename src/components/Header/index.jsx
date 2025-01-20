import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';


function Header(){
    const StyledLink = styled(Link)`
    padding: 15;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
    return(
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/freelance">Profils</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>
                 Faire le test
            </StyledLink>
        </nav>
    )
}

export default Header;