import React from "react";
import BKG from "../assets/images/Header_bkg.svg";
import Profile from "../assets/images/Profile.svg";
import "../css/Header.css";

export default function Header() {
  return (
    <header>
        <div className="header-container" id="hero">
        <img className="background-image" src={BKG} alt="Background" />
            <div className="header-content">
                <h2 className="header-title">MANUEL FLORES</h2>
                <div className="vertical-content">
                    <p className="top-text">FRONT-END DEVELOPER</p>
                    <div className="horizontal-content">
                    <p className="vertical-text">HITTA.DEV</p>
                    <img className="profile-image" src={Profile} alt="Profile" />
                    </div>
                    <div className="bottom-text">
                    <p>CREATIVE FRONT-END DESIGN THAT REVOLVES AROUND UNIQUE STYLE.</p>
                    <p>REACT-HTML-CSS-JAVASCRIPT</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}
