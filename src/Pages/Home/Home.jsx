import React from 'react'
import Featured from './FeaturedHome/Featured'
import IdeasHome from './IdeasHome/IdeasHome'
import SliderHome from './SliderHome/SliderHome'
import WelcomeHome from './WelcomeHome/WelcomeHome'
import Fixed from '../../components/Fixed/Fixed'

function Home() {
    return (
        <>
            <Fixed>
                HOME
            </Fixed>
            <SliderHome/>
            <WelcomeHome/>
            <IdeasHome/>
            <Featured/>
        </>
    )
}

export default Home
