import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <h1>Login</h1>
      <input type='text' onChange={(e) => {
        console.log(e.target.value)
      }} name='' placeholder='email'></input>
      <input type='password' name='' placeholder='password'></input>
      <Link to='/signup'>
      <button>Login</button>
      </Link>
      <p>Dont have an account <br /> <a href=''>Sign up</a> </p>
    </div>
  )
}

export default Login
