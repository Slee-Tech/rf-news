import React, { ReactElement } from 'react'
import { News } from './News';
import Ribbon from "./../images/ribbon.png"
import Logo from "./../images/logo.png"

export const Navbar: React.FC = () => {

    return (
        <div className="container-fluid bg-light">
            <nav className="container navbar navbar-expand-lg navbar-light bg-light pl-0 pr-0">
                <img src={Logo} className="logo" alt="logo" />

                <a className="header-logo pt-2 pb-2 " href="#">rfnews<span className="header-green">.com</span></a>
                <div className="ml-auto" id="navbarNav">
                    <ul className="navbar-nav align-items-center">

                        <img src={Ribbon} className="ribbon" alt="ribbon" />

                        <a className="nav-link ribbon-text">Critically Denounced</a>


                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>


                    </ul>
                </div>

            </nav>
        </div>


    )
}

