import React from "react";
import "../css/Nav.css"

export default function Nav () {
    return (
        <nav>
            <a className="nav-main">HITTA.DEV</a>
            <ul>
                <li><a>HOME</a></li>
                <li><a>ABOUT</a></li>
                <li><a>PROJECTS</a></li>
            </ul>
            <a>CONTACT</a>
        </nav>
    )
};