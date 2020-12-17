import React from 'react'
import './Fixed.scss'

function Fixed({ children }) {
    return (
        <div className="fixed">
            <div className="fixed_bar"></div>
            <div className="fixed_title">
                <h4>{ children }</h4>
            </div>
        </div>
    )
}

export default Fixed
