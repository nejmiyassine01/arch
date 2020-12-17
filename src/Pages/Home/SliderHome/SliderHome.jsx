import React, { useState } from 'react'
import './SliderHome.scss'
import SlideHomeData from './SlideHomeData'
import Button from '../../../components/Button/Button'

function SliderHome() {
    const [current, setcurrent] = useState(0);
    const slides = SlideHomeData[current];

    // if (!Array.isArray(slides) || slides.length <= 0) { return null }
    
    const onSlide = (e) => {
        e.preventDefault()
        setcurrent(parseInt(e.target.id))
    }
    
    return (
        <>
            <div className="slider">
                <div className="container" key={slides.id}>
                    <div className="slider_image">
                        <picture>
                            <source srcSet={`${slides.imgMob}`} media="(max-width: 800px)" />
                            <source srcSet={`${slides.imgTab}`} media="(max-width: 1180px)" />
                            <source srcSet={`${slides.img}`} media="(min-width: 1181px)" />
                            <img src={slides.img} alt="Paramor" />
                        </picture>
                    </div>
                    <div className="slider_content">
                        <h2>{slides.title}</h2>
                        <p>{slides.text}</p>
                        <Button to="/portfolio">
                            See Our Portfolio
                        </Button>
                    </div>
                </div>
                
                <div className="slider_numbers">
                    <div className="slider_number" id="0" onClick={onSlide}>01</div>
                    <div className="slider_number" id="1" onClick={onSlide}>02</div>
                    <div className="slider_number" id="2" onClick={onSlide}>03</div>
                    <div className="slider_number" id="3" onClick={onSlide}>04</div>
                </div>
            </div>
        </>
    )
}

export default SliderHome
