import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './Login.css'
const FormLogin = () => {
    const [error, setError] = useState()
    const {register, handleSubmit, reset} = useForm()

    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
        .then(res =>{
        console.log(res.data)
        localStorage.setItem('token',res.data.data.token)
        setError()

    }
        )
        .catch(err => setError(err.response.data.message))

         reset({
         password:''
        })
    }


    return (
      <div className="login__form_container">
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
          />
        </div>
        <div className='login__div-password'>
          <label className='login__label' htmlFor="password">Password</label>
          <input 
            {...register('password')} 
              className='login__input' 
              type="password" 
              id="password" 
              placeholder="Type your password"
          />
        </div>
        <button className='login__btn'>Login</button>
      </form>
      </div>
    );
};

export default FormLogin;
