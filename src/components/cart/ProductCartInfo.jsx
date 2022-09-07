import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'


const ProductCartInfo = ({product, getAllProductsCart}) => {

const handleDeleteProduct = () =>{
  const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
axios.delete(URL, getConfig())
.then(res => {
  console.log(res.data)
  getAllProductsCart()
})
.catch(err => console.log(err))
}
  return (
    <article className='cart__item'>
        <header className='cart__item-header'>
        <h4 className='cart_category'>{product.brand}</h4>
        <h3 className='cart__name'>{product.title}</h3>
        </header>
        <i className="cart__trash fa-solid fa-trash-xmark"></i>
        <span className='cart__quantity'>{product.price}</span>
        <footer className='cart_item-footer'>
            <span className='cart__total-label'>Total:</span>
            <p className='cart__total-number'></p>
            <i onClick={handleDeleteProduct} className="fa-solid fa-trash"></i>
        </footer>
        <hr/>
    </article>
  )
}

export default ProductCartInfo