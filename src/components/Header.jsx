import React from "react";
import { Link, Router } from "react-router-dom";

const Header = () => {
    return (
        <nav className="#03a9f4 light-blue">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo right">
                    Logo
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contacts">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
