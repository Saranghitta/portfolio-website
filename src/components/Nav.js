import React from "react";
import {Link} from "react-scroll"
import "../css/Nav.css"

export default function Nav () {
    return (
        <nav>
            <a href="/" className="nav-main">HITTA.DEV</a>
            <ul>
                <li><Link to="hero" smooth={true} offset={-150} duration={500}>HOME</Link></li>
                <li><Link to="about" smooth={true} offset={-10} duration={500}>ABOUT</Link></li>
                <li><Link to="projects" smooth={true} offset={-150} duration={500}>PROJECTS</Link></li>
            </ul>
            <Link to="contact" smooth={true} offset={-180} duration={500}>CONTACT</Link>
        </nav>
    )
};