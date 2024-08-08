import React, { useEffect, useState } from 'react'
import Slider from '../Slider/Slider'
import './Popular.css'
import axios from 'axios'
import { getPopularMovies } from '../../services/MovieServices';

function Popular() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await getPopularMovies();
            setMovies(response.data.results);
        }
        fetchData();
    }, [])

    return (
        <>
            <div className="popular">
                <h4>Popular</h4>
                <Slider movies={movies} />
            </div>
        </>
    )
}

export default Popular