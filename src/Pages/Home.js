import React from 'react'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="big">
    <Dashboard/>
    <h1>Home</h1>
    </div>
    </>
  )
}

export default Home

