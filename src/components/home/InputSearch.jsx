import React from 'react'
import './InputSearch.css'

const InputSearch = ({setInputSearch}) => {

  const handleChange = e => {
    setInputSearch(e.target.value.trim())

  }
  return (
    <div className='input__search__container'>
      <h3 className='search__title'>Search products</h3>
      <input className='input-search' onChange={handleChange} type='text' placeholder='Search products by name'/>
    </div>
  
  )
}

export default InputSearch