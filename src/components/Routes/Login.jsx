import React from 'react'
import FormLogin from '../login/FormLogin'

const isLogged = localStorage.getItem('token')

const Login = () => {
  return (
    <div className='containerComponents'>
      <FormLogin/>
    </div>
  )
}

export default Login