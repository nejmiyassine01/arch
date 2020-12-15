import React from 'react'
import { Link } from 'react-router-dom'
import NavbarData from './NavbarData.js'
import * as Ai from 'react-icons/ai'
import Logo from '../../static/logo.svg'
import './Navbar.scss'

function Navbar() {
    return (
        <div className="navbar">
            <div className="container navbar_container">
                <div className="navbar_logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <ul className="navbar_links">
                    {NavbarData.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path}>{item.link}</Link>
                        </li>
                    ))}
                </ul>
                <div className="navbar_icons">
                    <Ai.AiOutlineMenu/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
