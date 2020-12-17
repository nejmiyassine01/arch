import React from 'react'
import { Link } from 'react-router-dom'
import * as Ai from 'react-icons/ai'
import './Button.scss'

function Button({ children, to }) {
    return (
        <button className="btn-cta">
            <Link to={to}>
                {children}
                <Ai.AiOutlineArrowRight/>
            </Link>
        </button>
    )
}

export default Button
