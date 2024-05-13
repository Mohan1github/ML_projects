import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Searchresults from './components/searchresults'
import Footer from './components/footer'
import Createblog from './components/createblog'
import Login from './pages/login'
import Register from './pages/register'
import Myblogs from './pages/myblogs'
import Favourites from './pages/favourite'
import Contributors from './pages/contributors'
import Blogdetails from './pages/blogdetails'
import Contact from './pages/contact'

function App() {

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Searchresults />} />
        <Route path="components/create-blogs" element={<Createblog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/components/myblogs" element={<Myblogs/>} />
        <Route path="components/favourites" element={<Favourites />} />
        <Route path="/components/favorites" element={<Favourites />} />
        <Route path="/components/authors" element={<Contributors />} />
        <Route path="/pages/blog-details/:id" element={<Blogdetails/>}/>
        <Route path="/pages/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
      </>
  )
}

export default App
