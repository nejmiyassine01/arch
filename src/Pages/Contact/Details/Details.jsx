import React from 'react'
import './Details.scss'
import arrow from '../../../static/icons/icon-arrow-s.svg'

function Details() {
    return (
        <div className="details">
            <div className="container">
                <div className="details_container">
                    <div className="details_title">
                        <h2>Contact Details</h2>
                    </div>
                    <div className="details_content">
                        <div className="details_office">
                            <h4>Main Office</h4>
                            <div className="details_info">
                                <p>Mail:</p>
                                <p>archone@mail.com</p>
                            </div>
                            <div className="details_info">
                                <p>Address:</p>
                                <p>1892 Chenoweth Drive TN</p>
                            </div>
                            <div className="details_info">
                                <p>Phone:</p>
                                <p>123-456-3451</p>
                            </div>
                        </div>
                        <div className="details_btn">
                            <button>
                                View on Map <img src={arrow} alt="arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
