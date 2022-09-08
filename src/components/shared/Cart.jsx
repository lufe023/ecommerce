import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCartInfo from '../cart/ProductCartInfo'
import getConfig from '../../utils/getConfig'
import './Cart.css'
const Cart = () => {
    const [cartProducts, setCartProducts] = useState()

const getAllProductsCart = () =>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    axios.get(URL, getConfig())
    .then(res => setCartProducts(res.data.data.cart.products))
    .catch(err=>console.log(err))
}
    useEffect(() => {
        getAllProductsCart()
    }, [])
    
const handleCheckout = () =>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
 const obj = {
    street: "Green St. 1456",
    colony: "Southwest",
    zipCode: 12345,
    city: "USA",
    references: "Some references"
  }

axios.post(URL, obj, getConfig())
.then(res=>{
    console.log(res.data)
    getAllProductsCart
})
.catch(err=>console.log(err))
}


let total=0
for (let i =0; i<cartProducts?.length; i++){
    total += Number(cartProducts[i]?.price)
}
total = new Intl.NumberFormat().format( total )

return (
    <div className='Cart__container'>
    <section className='cart'>
       <h2 className='cart__title'>Cart</h2>
       {
        cartProducts?.map(product => (
            <ProductCartInfo
            key={product.id}
            product={product}
            getAllProductsCart={getAllProductsCart}
            />
        ))
       }
        <hr className='cart__hr'/>
        <footer className='cart__footer'>
            <span className='cart__total-global-label'>Total:{total}</span>
            <button className='checkout' onClick={handleCheckout}>Checkout</button>
        </footer>
    </section>
    </div>
)
}

export default Cart