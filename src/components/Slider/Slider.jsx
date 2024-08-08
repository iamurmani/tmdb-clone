import React from 'react'
import Card from '../Card/Card'
import './Slider.css'

function Slider({movies}) {
  return (
    <>
        <div className='slider-container'>
            {movies.map(ele => (
                <Card key={ele.id} movie={ele}/>
            ))}
        </div>
    </>
  )
}

export default Slider