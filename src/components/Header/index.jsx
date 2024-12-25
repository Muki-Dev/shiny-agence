import { Link } from 'react-router-dom';

function Header(){
    return(
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/survey/1">Survey</Link>
            <Link to="/freelance">Freelance</Link>
        </nav>
    )
}

export default Header;