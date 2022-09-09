import React from 'react'
import './InputSearch.css'

const InputSearch = ({setInputSearch}) => {

  const handleChange = e => {
    setInputSearch(e.target.value.trim())
  }
  return (
    <div className='input__search'>
      <h1>Formulario</h1>
      <input onChange={handleChange} type='text'/>
    </div>
  
  )
}

export default InputSearch