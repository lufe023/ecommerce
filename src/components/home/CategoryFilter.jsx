import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'

const CategoryFilter = () => {

    const [categories, setCategories] = useState()

    useEffect(() => {
     const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
     axios.get(URL)
     .then(res => (setCategories(res.data.data.categories)))
     .catch(err => console.log(err))
    }, [])
    
console.log(categories)

const dispatch = useDispatch()

const handleClickCategory = id => {
    dispatch(getProductsByCategory(id))
} 

const handleClickAllProducts = () => {
dispatch(getAllProducts())
}

  return (
    <div>
        <h3>Category</h3>
        <ul>
            <li onClick={handleClickAllProducts} >All Category</li>
            {
            categories?.map(category => (
                <li onClick={() => handleClickCategory(category.id)} key={category.id}>{category.name}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default CategoryFilter