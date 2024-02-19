import { Link, Outlet, useLocation } from "react-router-dom";

function Navigation() {
    const location = useLocation();

    return (
        <nav className="bg-gray-400 p-4">
            <ul className="flex flex-wrap justify-center items-center space-x-4">
                <li>
                    <Link
                        to="/"
                        className={`text-white py-2 px-4 rounded focus:outline-none ${location.pathname === "/" ? "bg-gray-600" : ""
                            }`}
                    >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link
                        to="/project"
                        className="text-white py-2 px-4 rounded focus:outline-none focus:bg-gray-600"
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="text-white py-2 px-4 rounded focus:outline-none focus:bg-gray-600"
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to="/resume"
                        className="text-white py-2 px-4 rounded focus:outline-none focus:bg-gray-600"
                    >
                        Resume
                    </Link>
                </li>
            </ul>
            <Outlet />
        </nav>
    );
}

export default Navigation;
