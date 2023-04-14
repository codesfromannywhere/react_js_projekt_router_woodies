import { Link } from "react-router-dom";
import Logo from "../images/Logo.png"

const NavBar = () => {
    return (
        <header>
            <img src={Logo} />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/products'>Products</Link>
            </nav>
        </header>
    );
}

export default NavBar;