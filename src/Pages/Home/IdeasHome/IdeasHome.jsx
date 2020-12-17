import React from 'react'
import Button from '../../../components/Button/Button'
import small from '../../../static/home/desktop/image-small-team.jpg'
import smallTab from '../../../static/home/tablet/image-small-team.jpg'
import smallMob from '../../../static/home/mobile/image-small-team.jpg'
import './IdeasHome.scss'

function IdeasHome() {
    return (
        <div className="ideas">
            <div className="container">
                <div className="ideas_container">
                    <div className="ideas_image">
                        <picture>
                            <source srcSet={`${smallMob}`} media="(max-width: 800px)" />
                            <source srcSet={`${smallTab}`} media="(max-width: 1180px)" />
                            <source srcSet={`${small}`} media="(min-width: 1181px)" />
                            <img src={small} alt="Paramor" />
                        </picture>
                    </div>
                    <div className="ideas_content">
                        <h2>Small team, big ideas</h2>
                        <Button to="/about">
                            About Us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdeasHome
