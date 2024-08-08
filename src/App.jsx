import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage/MainPage'
import MainContentLayout from './layout/MainContenLayout/MainContentLayout'
import IndividualLayout from './layout/IndividualLayour/IndividualLayout'
import MoviesLayout from './layout/MoviesLayout/MoviesLayout'
import TvShowsLayout from './layout/TvShowsLayout/TvShowsLayout'
import WatchListLayout from './layout/WatchListLayout/WatchListLayout'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} >
          <Route index element={<MainContentLayout/>}/>
          <Route path='movies' element={<MoviesLayout/>}/>
          <Route path='tvshows' element={<TvShowsLayout/>}/>
          <Route path='watchlist' element={<WatchListLayout/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
