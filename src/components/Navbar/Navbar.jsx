import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavbarData from './NavbarData.js'
import * as Ai from 'react-icons/ai'
import Logo from '../../static/logo.svg'
import './Navbar.scss'

function Navbar() {
    const [menu, setMenu] = useState(true);

    const toggleMenu = () => setMenu(!menu);
    
    return (
        <div className="navbar">
            <div className="container navbar_container">
                <NavLink to="/">
                    <div className="navbar_logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                </NavLink>
                <ul className="navbar_links">
                    {NavbarData.map((item, index) => (
                        <li key={index}>
                            <NavLink activeClassName="selected" to={item.path}>{item.link}</NavLink>
                        </li>
                    ))}
                </ul>
                <div className="navbar_icons">
                    {menu ? <Ai.AiOutlineMenu onClick={toggleMenu} /> : <Ai.AiOutlineClose onClick={toggleMenu} />}
                </div>
            </div>

            <nav className={menu ? "nav" : "nav nav_active"}>
                <div className="container">
                    <ul>
                        {NavbarData.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.link}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
