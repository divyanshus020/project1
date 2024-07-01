import React, { useState } from "react";

// Define the nav links array
const navLinks = [
    { name: "Home", path: "/" },
    { name: "Customer Profile", path: "/CoursePage" },
    { name: "Customer Analysis", path: "/ServicesPage" },
    { name: "Follow Up", path: "/About" },
    { name: "Deshboard", path: "/Contact" },
    { name: "Working Sheets", path: "/Contact" },
    { name: "Reports", path: "/Contact" },
    { name: "Setting Master", path: "/Contact" },
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="">
                <div className="nav-container-1">
                    <nav>
                        <div className="menu-btn" onClick={toggleMenu}>
                            ☰
                        </div>
                        <ul className={isMenuOpen ? "open" : ""}>
                            {navLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="nav-link"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default NavBar;
