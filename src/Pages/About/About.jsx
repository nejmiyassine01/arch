import React from 'react'
import Professionals from './Professionals/Professionals'

import Hero from '../../static/about/desktop/image-hero.jpg'
import HeroTab from '../../static/about/tablet/image-hero.jpg'
import HeroMob from '../../static/about/mobile/image-hero.jpg'
import Heritage from './Heritage/Heritage'

function About() {
    return (
        <div>
            <Professionals
                mobile={HeroMob}
                tab={HeroTab}
                desk={Hero}
                title="Your team of professionals"
                text="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
                type="About"
            />
            <Heritage />
        </div>
    )
}

export default About
