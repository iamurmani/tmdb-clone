import React, { useState } from 'react'
import './Card.css'
import movieImg from '../../assets/movie.webp'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import axios from 'axios';

function Card({movie, checkIfAddedToWatchlist}) {

  const [addedToWatchList, setAddedToWatchList] = useState(false);
  

  function handleWatchlistClick() {
    if(addedToWatchList) {
      setAddedToWatchList(false);
      return ;
    }
    setAddedToWatchList(!addedToWatchList);
    axios.post('http://localhost:5173/api/watchlist',movie).then(res => {
      console.log(res.data)
    })
  }

  function deleteFromWatchList() {
    axios.delete(`http://localhost:5173/api/watchlist/${movie.id}`).then(res => {
      console.log('deleted form watchlist');
    })
  }

  return (
    <>
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            {/* <img src={movieImg}/> */}
            <p>{movie.original_title}</p>
            <p>{movie.release_date}</p>
            <div className='watch-list'>
              {addedToWatchList ? <FaHeart className='red' onClick={deleteFromWatchList}/> : <FaRegHeart onClick={handleWatchlistClick}/>}
            </div>
        </div>
    </>
  )
}

export default Card