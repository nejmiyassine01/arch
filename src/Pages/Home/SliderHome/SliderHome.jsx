import React from 'react'
import Paramor from '../../../static/home/desktop/image-hero-paramour.jpg'
import ParamorTab from '../../../static/home/tablet/image-hero-paramour.jpg'
import ParamorMob from '../../../static/home/mobile/image-hero-paramour.jpg'
import { Link } from 'react-router-dom'
import * as Ai from 'react-icons/ai'

function SliderHome() {
    return (
        <div className="slider">
            <div className="container">
                <div className="slider_image">
                    <picture>
                        <source srcSet={`${ParamorMob}`} media="(max-width: 650px)" />
                        <source srcSet={`${ParamorTab}`} media="(max-width: 1100px)" />
                        <img src={Paramor} alt="Paramor" />
                    </picture>
                </div>
                <div className="slider_content">
                    <h2>Project Paramour</h2>
                    <p>Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</p>
                    <button className="btn-cta">
                        <Link to="/">
                            See Our Portfolio <Ai.AiOutlineArrowRight/>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SliderHome
