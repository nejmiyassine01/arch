import React from 'react'
import './Connect.scss'
import Arrow from '../../../static/icons/icon-arrow-white.svg'

function Connect() {
    return (
        <div className="connect">
            <div className="container">
                <div className="connect_container">
                    <div className="connect_title">
                        <h2>Connect with us</h2>
                    </div>
                    <form className="connect_form">
                        <input placeholder="Name" type="text" />
                        <input placeholder="Email" type="email" />
                        <textarea placeholder="Message" />
                        <button type="submit">
                            <img src={Arrow} alt="arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Connect
