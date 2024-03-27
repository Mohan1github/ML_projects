import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Sidepanel from './components/sidepanel'
import Searchresults from './components/searchresults'
import Footer from './components/footer'
function App() {

  return (
    <>
     <Navbar/>
     <Sidepanel/>
     <Searchresults/>
     <Footer/>
    </>
  )
}

export default App
