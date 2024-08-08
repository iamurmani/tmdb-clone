import React, { useContext } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { CiLight } from "react-icons/ci";
import { ThemeContext, useTheme } from '../../context/ThemeContext';
import { CiDark } from "react-icons/ci";

function Navbar() {
  const {theme, toggleTheme} = useTheme();
  return (
    <>
      <div className={`nav-bar ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
        <ul>
          <li><NavLink to='/'>TMDB</NavLink></li>
          <li><NavLink to='/movies'>Movies</NavLink></li>
          <li><NavLink to='/tvshows'>TV Shows</NavLink></li>
          <li><NavLink to='/watchlist'>Watchlist</NavLink></li>
        </ul>
        <div className="theme" onClick={toggleTheme}>
          {theme === 'light' ? <CiLight /> : <CiDark />}
          
        </div>
      </div>
    </>
  )
}

export default Navbar