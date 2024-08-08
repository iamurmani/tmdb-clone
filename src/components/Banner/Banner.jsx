import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <>
        <div className='banner'>
            <img src="/src/assets/banner.jpeg" alt="" />
            <div className='text-content'>
                <h1>Welcome</h1>
                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
        </div>
    </>
  )
}

export default Banner