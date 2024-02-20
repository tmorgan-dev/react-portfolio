import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Navigation() {
    const location = useLocation();
    const [selectedLink, setSelectedLink] = useState("/");

    useEffect(() => {
        setSelectedLink(location.pathname);
    }, [location]);

    const handleLinkClick = (event, path) => {
        setSelectedLink(path);
    };

    return (
        <nav className="bg-gray-400 p-4">
            <ul className="flex flex-wrap justify-center items-center space-x-4">
                <li>
                    <Link
                        to="/"
                        className={`text-white py-2 px-4 rounded ${selectedLink === "/" ? "bg-gray-600" : ""
                            }`}
                        onClick={(e) => handleLinkClick(e, "/")}
                    >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link
                        to="/project"
                        className={`text-white py-2 px-4 rounded ${selectedLink === "/project" ? "bg-gray-600" : ""
                            }`}
                        onClick={(e) => handleLinkClick(e, "/project")}
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className={`text-white py-2 px-4 rounded ${selectedLink === "/contact" ? "bg-gray-600" : ""
                            }`}
                        onClick={(e) => handleLinkClick(e, "/contact")}
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to="/resume"
                        className={`text-white py-2 px-4 rounded ${selectedLink === "/resume" ? "bg-gray-600" : ""
                            }`}
                        onClick={(e) => handleLinkClick(e, "/resume")}
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
