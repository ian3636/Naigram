import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup'>
      <h1>Sign Up</h1>
      <input type='text' name='' placeholder='username'></input>
      <input type='text' name='' placeholder='email'></input>
      <input type='password' name='' placeholder='password'></input>
      <Link to='/sidebar'>
      <button>Get Started</button>
      </Link>
      <p>Have an account <br /> <a href=''>Login</a> </p>
    </div>
  )
}

export default Signup
