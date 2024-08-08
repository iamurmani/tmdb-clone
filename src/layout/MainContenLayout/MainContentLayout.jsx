import React from 'react'
import './MainContentLayout.css'
import Banner from '../../components/Banner/Banner'
import Slider from '../../components/Slider/Slider'
import Trending from '../../components/Trending/Trending'
import Popular from '../../components/Popular/Popular'

function MainContentLayout() {
    return (
        <>
            <div className='main-content-layout'>
                <Banner />
                <Trending/>
                <Popular/>
            </div>
        </>
    )
}

export default MainContentLayout