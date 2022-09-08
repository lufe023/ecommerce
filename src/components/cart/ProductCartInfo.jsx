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





// console.log(product)
  return (
    <div  className='cart__item'>
      <div className='cart__quantity_secction'>
        <h3>Cuantity</h3>
        <div className='cart__quantity'>
          <button className='quantity__btn'> - </button>
          <p className='quantity'>
          {product.productsInCart.quantity}
          </p>
        <button className='quantity__btn'> + </button>
        </div>
   
      </div>
    <article>
        <header className='cart__item-header'>
        <h4 className='cart_category'>{product.brand}</h4>
        <h3 className='cart__name'>{product.title}</h3>
     
        </header>
        <span className='cart__price'>Price: {product.price}</span>
        <footer className='cart_item-footer'>
            <span className='cart__total-label'>Total: {product.price*product.productsInCart.quantity}</span>
            <p className='cart__total-number'></p>
            <i onClick={handleDeleteProduct} className="fa-solid fa-trash"></i>
        </footer>

    </article>
    </div>
  )
}

export default ProductCartInfo