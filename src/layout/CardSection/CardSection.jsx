import React from 'react'
import Card from '../../components/Card/Card'
import './CardSection.css'

function CardSection({movies, jsonServerMovies}) {
  let watchListIds = jsonServerMovies.map(ele => ele.id);

  function checkIfAddedToWatchlist(movie) {
    return watchListIds.includes(movie.id);
  }
  return (
    <>
        <div className='card-section-container'>
            {movies.map(movie => (
                <Card key={movie.id} movie={movie} checkIfAddedToWatchlist={checkIfAddedToWatchlist}/>
            ))}
        </div>
    </>
  )
}

export default CardSection