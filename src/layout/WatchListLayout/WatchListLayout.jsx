import React, { useEffect, useState } from 'react'
import movieImg from '../../assets/movie.webp'
import './WatchListLayout.css'
import axios from 'axios'
function WatchListLayout() {
    const [watchList, setWatchList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5173/api/watchlist').then(res => {
            console.log(res);
            setWatchList(res.data)
        })
    },[])
    return (
        <>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Release</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchList.map(watch => (
                            <tr key={watch.id}>
                                <td className='image-heading'>
                                    <img src={`https://image.tmdb.org/t/p/w500/${watch.poster_path}`} />
                                    <p>{watch.original_title}</p>
                                </td>
                                <td>{watch.vote_average}</td>
                                <td>{watch.release_date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WatchListLayout