import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavHeader.css";
import Logo from "../assets/logo.png";

/** nav menu in the header */
const NavHeader = () => {
    return (
        <React.Fragment>
            <Link to={"/"}>
                <div className="logo-wrapper">
                    <img className="logo-image" src={Logo} alt="Sportify Logo"></img>
                    <p className="logo-title"></p>
                </div>
            </Link>
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
