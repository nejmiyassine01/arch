import React from 'react'
import Professionals from '../About/Professionals/Professionals'
import HeroMob from '../../static/contact/mobile/image-hero.jpg'
import HeroTab from '../../static/contact/tablet/image-hero.jpg'
import Hero from '../../static/contact/desktop/image-hero.jpg'
import Connect from './Connect/Connect'
import Details from './Details/Details'
import MapApi from './MapApi/MapApi'
import Fixed from '../../components/Fixed/Fixed'

function Contact() {
    return (
        <>
            <Fixed>
                Contact
            </Fixed>
            <Professionals
                mobile={HeroMob}
                tab={HeroTab}
                desk={Hero}
                title="Tell us about your project"
                text="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
                type="Contact"
            />
            <Details/>
            <MapApi/>
            <Connect/>
        </>
    )
}

export default Contact
