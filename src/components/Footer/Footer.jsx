import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import FooterLogo from '../../static/logo-white.svg'
import NavbarData from '../Navbar/NavbarData'
import Button from '../Button/Button'

function Footer() {
    return (
        <div className="footer">
            <div className="container footer_container">
                <div className="footer_links">
                    <Link to="/">
                        <div className="footer_logo">
                            <img src={FooterLogo} alt="footer-logo" />
                        </div>
                    </Link>
                    <ul className="footer_link">
                        {NavbarData.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.link}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer_btn">
                    <Button>
                        See Our Portfolio
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Footer
