import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Articles from './pages/Articles'
import Write from './pages/Write'
import Requests from './pages/Requests'
import Blog from './pages/Blog'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/article' element={<Articles/>}/>
      <Route path='/write-new' element={<Write/>}/>
      <Route path='/blog/:b_id' element={<Blog/>}/>
      <Route path='/requests' element={<Requests/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>

    
  )
}

export default App