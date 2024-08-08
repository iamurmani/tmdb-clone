import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

function MainPage() {
  const {theme} = useTheme()
  return (
    <>
        <div className={`main-container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
            <Navbar/>
            <Outlet/>
        </div>
    </>
  )
}

export default MainPage