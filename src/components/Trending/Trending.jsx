import React, { useEffect, useState } from 'react'
import Slider from '../Slider/Slider'
import './Trending.css'
import axios from 'axios';
import {  getTrendingMovies } from '../../services/MovieServices';

function Trending() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getTrendingMovies();
            setMovies(response.data.results);
        }
        fetchData();
    }, [])


    // async function getMoviesData() {
    //     let data = await getPopularMovies();
    //     return data;
    // }
    return (
        <>
            <div className="trending">
                <h4>Trending</h4>
                <Slider movies={movies} />
            </div>
        </>
    )
}

export default Trending