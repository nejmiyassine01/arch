import React from 'react'
import './Details.scss'
import arrow from '../../../static/icons/icon-arrow.svg'
import DetailsData from './DetailsData'

function Details() {
    return (
        <div className="details">
            <div className="container">
                <div className="details_container">
                    <div className="details_title">
                        <h2>Contact Details</h2>
                    </div>
                    <div className="details_contents">
                    {DetailsData.map((detail, index) => (
                        <div className="details_content" key={index}>
                            <div className="details_office">
                                <h4>{detail.title}</h4>
                                <div className="details_info">
                                    <p>Mail:</p>
                                    <p>{detail.mail}</p>
                                </div>
                                <div className="details_info">
                                    <p>Address:</p>
                                    <p>{detail.address}</p>
                                </div>
                                <div className="details_info">
                                    <p>Phone:</p>
                                    <p>{detail.phone}</p>
                                </div>
                            </div>
                            <div className="details_btn">
                                <button>
                                    View on Map
                                </button>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
