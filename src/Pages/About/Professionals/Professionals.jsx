import React from 'react'
import './Professionals.scss'

function Professionals(props) {
    return (
        <div className="professionals">
            <div className="container">
                <div className="professionals_container">
                    <div className="professionals_img">
                        <picture>
                            <source srcSet={`${props.mobile}`} media="(max-width: 800px)" />
                            <source srcSet={`${props.tab}`} media="(max-width: 1180px)" />
                            <source srcSet={`${props.desk}`} media="(min-width: 1181px)" />
                            <img src={props.desk} alt="Hero" />
                        </picture>
                    </div>

                    <div className="professionals_content">
                        <h2>{props.title}</h2>
                        <p> {props.text}</p>
                        <div className="professionals_content--about">
                            <h3>{props.type}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Professionals
