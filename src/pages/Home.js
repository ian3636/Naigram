import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='page1'>
      <h1>NAI_GRAM</h1>
      <p>The Best App For You.</p>
      <Link to='/login'>
      <button>Get Started</button>
      </Link>
    </div>
  )
}

export default Home
