import React from 'react'
import Featured from './FeaturedHome/Featured'
import IdeasHome from './IdeasHome/IdeasHome'
import SliderHome from './SliderHome/SliderHome'
import WelcomeHome from './WelcomeHome/WelcomeHome'

function Home() {
    return (
        <>
            <SliderHome/>
            <WelcomeHome/>
            <IdeasHome/>
            <Featured/>
        </>
    )
}

export default Home
