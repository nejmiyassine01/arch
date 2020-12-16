import React from 'react'
import Button from '../../../components/Button/Button'
import './Featured.scss'
import Feature1 from '../../../static/portfolio/desktop/image-del-sol.jpg'
import Feature1Tab from '../../../static/portfolio/tablet/image-del-sol.jpg'
import Feature1Mob from '../../../static/portfolio/mobile/image-del-sol.jpg'
// import Feature2 from '../../../static/portfolio/desktop/image-228b.jpg'
// import Feature3 from '../../../static/portfolio/desktop/image-prototype.jpg'
import { Link } from 'react-router-dom'
import FeaturedData from './FeaturedData'

function Featured() {
    return (
        <div className="featured">
            <div className="container">
                <div className="featured_container">
                    <div className="featured_header">
                        <h2>Featured</h2>
                        <Button>
                            See All
                        </Button>
                    </div>
                    <div className="featured_boxes">
                        <Link to="/portfolio">
                            {FeaturedData.map((item, index) => (
                                <div className="featured_box" key={index}>
                                    <div className="featured_box--img">
                                        <picture>
                                            <source srcSet={`${item.imgMob}`} media="(max-width: 767px)" />
                                            <source srcSet={`${item.imgTab}`} media="(max-width: 1199px)" />
                                            <source srcSet={`${item.img}`} media="(min-width: 1200px)" />
                                            <img src={item.img} alt="featured-1" />
                                        </picture>
                                    </div>
                                    <div className="featured_box--content">
                                        <h3>{item.title}</h3>
                                        <p>View All Projects</p>
                                    </div>
                                    <div className="featured_box--number">
                                        <h2>{item.num}</h2>
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

export default Featured
