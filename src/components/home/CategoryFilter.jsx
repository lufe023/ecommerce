import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'
import './CategoryFilter.css'

const CategoryFilter = ({categories}) => {


    


const dispatch = useDispatch()

const handleClickCategory = categoryForm => {
    let category = categoryForm.target.value

    if(category!=='All'){
    dispatch(getProductsByCategory(category))
    }else{
        dispatch(getAllProducts())  
    }

} 

const handleClickAllProducts = () => {
dispatch(getAllProducts())
}

  return (
    <div className='category-filter-container'>
        <h3>Category</h3>

        <select className='input category-filter-list' onChange={handleClickCategory}>
            <option value='All'>All Category</option>
            {
            categories?.map(category => (
                <option value={category.id} key={category.id}>{category.name}</option>
            ))
        }
        </select>
       
     
    </div>
  )
}

export default CategoryFilter