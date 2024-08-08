import axios from "axios";
axios.defaults.baseURL = `${import.meta.env.VITE_SERVER_BASE_URL}`;
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzNkMjQ2ODEzOTY1MWM0ZDU4MTYyNjg4YzhiYmU0OSIsIm5iZiI6MTcyMDQ0OTMzNC44NTczNzQsInN1YiI6IjY2ODhkYjg2M2EyNjg5NzQ0ZWEzOTBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Brrk-bOcbknSmqH5RmVwkRgcqj01fGKkd7azcZK8HZw';
axios.defaults.headers.common['accept'] = 'application/json'

export async function getPopularMovies() {
    let data = await axios.get(`/3/movie/popular?language=en-US&page=1`);
    return data;
}

export async function getTrendingMovies() {
    let data = await axios.get(`/3/movie/now_playing?language=en-US&page=1`)
    return data;
}

export async function getWeekTrendingMovies() {
    let data = await axios.get(`/3/trending/movie/week?language=en-US'`)
    return data;
}
export async function getPaginationMovies(pageNo) {
    let data = await axios.get(`/3/movie/now_playing?language=en-US&page=${pageNo}`)
    return data;
}