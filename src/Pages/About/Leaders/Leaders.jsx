import React from 'react'
import { Link } from 'react-router-dom'
import * as Ai from 'react-icons/ai'
import './Leaders.scss'
import LeadersData from './LeadersData'

function Leaders() {
    return (
        <div className="leaders">
                <div className="leaders_container">
                    <div className="leaders_title">
                        <h2>The Leaders</h2>
                    </div>
                    <div className="leaders_boxes">
                        {LeadersData.map((item, index) => (
                            <div className="leaders_box" key={index}>
                                <div className="leaders_box--img">
                                    <img src={item.img} alt="leaders-img" />
                                </div>
                                <div className="leaders_box--content">
                                    <h3>{item.name}</h3>
                                    <p>{item.rule}</p>
                                </div>
                                <div className="leaders_box--links">
                                    <Link to={{ pathname: 'https://www.linkedin.com' }} target="_blank">
                                        <Ai.AiFillLinkedin />
                                    </Link>
                                    <Link to={{ pathname: 'https://www.twitter.com' }} target="_blank">
                                        <Ai.AiOutlineTwitter />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default Leaders
