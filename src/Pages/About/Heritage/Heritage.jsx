import React from 'react'
import './Heritage.scss'
import heritageImg from '../../../static/about/desktop/image-heritage.jpg' 

function Heritage() {
    return (
        <div className="heritage">
            <div className="container">
                <div className="heritage_container">
                    <div className="heritage_content">
                        <h2>Our Heritage</h2>
                        <p>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>
                        <p>
                        Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.
                        </p>
                        <p>
                        Our small team of world-class professionals provides input on every project.
                        </p>
                    </div>
                    <div className="heritage_image">
                        <img src={heritageImg} alt="Heritage" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Heritage
