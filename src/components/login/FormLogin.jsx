import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './Login.css'
const FormLogin = () => {
    const [error, setError] = useState()
    const [isLogged, setIsLogged] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState(localStorage.getItem('user'))
const [signUp, setSignUp] = useState(true)

    const {register, handleSubmit, reset} = useForm()

        const submit = data => {

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)

        .then(res =>
          {
            localStorage.setItem('token',res.data.data.token)
            localStorage.setItem('user',res.data.data.user.firstName)
            setError()
            setIsLogged(localStorage.getItem('token'))
            setUser(localStorage.getItem('user'))
          }
        )
        .catch(err => {
          setError(err.response.data.message)
        console.log(err.response.data.message)
        })

        reset({
        password:''
        })
    }

    const createUser = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
        axios.post(URL, data)

        .then(res =>
          {
            setSignUp(true)
            setError()
            console.log(res.data)
          }
        )
        .catch(err => {
          setError(err.response.data.message)
        console.log(err.response.data.message)
        })
    }

    const handleSignUp = () =>{
      setSignUp(!signUp)
      setError()
    }

    const handleClose =() =>{
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setIsLogged('')
      setUser('')
    }
    
    if(isLogged){
      return(
      <div className="login__form_container">
        
        <div className="loged">
        <p>Bienvenido <span>{user}</span></p>
        <i className="fa-solid fa-user userico"></i>
        <button onClick={handleClose} className="logOut">Log Out</button>
        </div>
  
      </div>
      )
    }
    else{
    return (
      <div className="login__form_container">
        {signUp?
        <form onSubmit={handleSubmit(submit)} className='login__form'>
        <h2 className='login__title'>Login</h2>
        {error? <p className="login__error">{error}</p>:''
        }
        <div className='login__div-email'>
          <label className='login__label' htmlFor="email">Email</label>
          <input 
            {...register('email')}
            className='login__input' 
            type="email" 
            id="email" 
            placeholder="Type your email"
            required/>
        </div>
        <div className='login__div-password'>
          <label className='login__label' htmlFor="password">Password</label>
          <input 
            {...register('password')} 
              className='login__input' 
              type="password" 
              id="password" 
              placeholder="Type your password"
              required
          />
        </div>
        <button className='login__btn'>Login</button>
        <p className="signUp">
        <span>Or </span>
        <a onClick={handleSignUp}>Sign Up</a>
        </p>
      </form>
      :
      /*Form to Create User */
      <form onSubmit={handleSubmit(createUser)} className='signUp__form'>
        <h2 className='login__title'>Sing Up</h2><div className="relleno"></div>
        {error? <p className="login__error">{error}</p>:''
        }
        <div className='signUp__box'>
          <label className='login__label' htmlFor="firstName">First Name</label>
          <input 
            {...register('firstName')}
            className='signUp__input' 
            type="text" 
            id="firstName" 
            placeholder="Type your First Name"
            required/>
        </div>
        <div className='signUp__box'>
          <label className='login__label' htmlFor="lastName">Last Name</label>
          <input 
            {...register('lastName')}
            className='signUp__input' 
            type="text" 
            id="lastName" 
            placeholder="Type your Last Name"
            required/>
        </div>
        <div className='signUp__box'>
          <label className='login__label' htmlFor="email">Email</label>
          <input 
            {...register('email')}
            className='signUp__input' 
            type="email" 
            id="email" 
            placeholder="Type your email"
            required/>
        </div>
        <div className='signUp__box'>
          <label className='login__label' htmlFor="password">Password</label>
          <input 
            {...register('password')} 
              className='signUp__input' 
              type="password" 
              id="password" 
              placeholder="Type your password"
              required
          />
        </div>
        <div className='signUp__box'>
          <label className='login__label' htmlFor="phone">Phone</label>
          <input 
            {...register('phone')} 
              className='signUp__input' 
              type="tel" 
              id="phone" 
              placeholder="Type your phone"
              required
          />
        </div>
        <div className='signUp__box'>
          <label className='login__label' htmlFor="role">Role</label>
          <select 
            {...register('role')} 
              className='signUp__input' 
              id="role"   
          >
            <option value='admin'>admin</option>
          </select>
        </div>
        <button className='login__btn'>Create User</button>
      <p className="signUp">
        <span>Or </span>
        <a onClick={handleSignUp}>Sign In</a>
        </p>
      </form>
      }
      </div>
    );
};
}

export default FormLogin;