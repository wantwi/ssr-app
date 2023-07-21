import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContentPage from './pages/ContentPage'



const Main = () => {
  return (
    <>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/content">Content</Link></li>
    </ul>
    <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route  path='/about' element={<AboutPage/>} />
      <Route  path='/content' element={<ContentPage/>} />
    </Routes>
    </>
    
  )
}

export default Main