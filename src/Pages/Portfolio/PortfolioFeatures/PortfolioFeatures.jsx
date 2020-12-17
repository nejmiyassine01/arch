import React from 'react'
import FeaturedPortfolioData from './PortfolioFeaturesData'
import { Link } from 'react-router-dom'
import './PortfolioFeatures.scss'

function PortfolioFeatures() {
    return (
        <div className="featured featuredData">
            <div className="container">
                <div className="featured_container">
                    <div className="featured_boxes">
                        <Link to="/portfolio" className="featured_links">
                            {FeaturedPortfolioData.map((item, index) => (
                                <div className="featured_box" key={index}>
                                    <div className="featured_box--img featured_box--imgHover">
                                        <picture>
                                            <source srcSet={`${item.imgMob}`} media="(max-width: 767px)" />
                                            <source srcSet={`${item.imgTab}`} media="(max-width: 1199px)" />
                                            <source srcSet={`${item.img}`} media="(min-width: 1200px)" />
                                            <img src={item.img} alt="featured-1" />
                                        </picture>
                                    </div>
                                    <div className="featured_box--content">
                                        <h3>{item.title}</h3>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioFeatures
