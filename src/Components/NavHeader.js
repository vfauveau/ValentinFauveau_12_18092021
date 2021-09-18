import React from "react";
import "../Styles/NavHeader.css";
import Logo from "../assets/logo.png"
const NavHeader = () => {
    return (
        <React.Fragment>
            <div className="logo-wrapper">
                <img className="logo-image" src={Logo} alt="Sportify Logo"></img>
                <p className="logo-title"></p>
            </div>
            <nav className="header-wrapper">
                <ul className="header-list">
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglages</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default NavHeader;
