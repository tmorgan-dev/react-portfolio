import { Link, Outlet } from "react-router-dom";

function Navigation() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-center items-center space-x-4">
                <li>
                    <Link
                        to="/"
                        className="text-white py-2 px-4 rounded focus:outline-none focus:bg-gray-600"
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