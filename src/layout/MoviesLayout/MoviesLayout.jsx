import React, { useEffect, useState } from 'react'
import CardSection from '../CardSection/CardSection'
import { getPaginationMovies, getTrendingMovies, getWeekTrendingMovies } from '../../services/MovieServices';
import Pagination from '../../components/Pagination/Pagination';
import axios from 'axios';

function MoviesLayout() {
    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [jsonServerMovies, setJsonServerMovies] = useState([]);

    function increasePagination(){
        setPageNo(pageNo+1)
    }

    function decreasePagination(){
        if(pageNo === 1) {
            setPageNo(1)
        } else {
            setPageNo(pageNo - 1)
        }
    }

    useEffect(()=>{
        async function getMovies() {
            const response = await getPaginationMovies(pageNo);
            setMovies(response.data.results);
        }
        getMovies();

        axios.get('http://localhost:5173/api/watchlist').then(res => {
            console.log(res);
            setJsonServerMovies(res.data)
        })

    },[pageNo])
    return (
        <>
            <div className="container">
                <CardSection movies={movies} jsonServerMovies={jsonServerMovies}/>
                <Pagination pageNo={pageNo} increasePagination={increasePagination} decreasePagination={decreasePagination}/>
            </div>
        </>
    )
}

export default MoviesLayout
