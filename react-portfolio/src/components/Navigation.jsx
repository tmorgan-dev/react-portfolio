import '../styles/Navigation.css';
import { Link, Outlet } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navbar">
            <ul className="navWrap">
                <li>
                    <Link to="/">
                    About Me
                    </Link>
                </li>
                <li>
                    <Link to="/project">
                    Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                    Contact
                    </Link>
                </li>
                <li>
                    <Link to="/resume">
                    Resume
                    </Link>
                </li>
            </ul>
            <Outlet />
        </nav>
    );
}

export default Navigation;