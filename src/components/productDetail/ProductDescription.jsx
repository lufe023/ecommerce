import React, { useState } from 'react'

const ProductDescription = ({productInfo}) => {

const [counter, setCounter] = useState(1)

const handlePlus = () => setCounter(counter +1)

const handleMinus = () => {
if (counter -1 >= 1){
  setCounter(counter - 1)
}
} 

  return (
    <section className='product-info'>
      <div className='col'>
      <img className='imgenDetail' src={productInfo?.productImgs[0]}/>
      </div>


      <div className='col'>
      
        <h2 className='product-info__name'>
        {productInfo?.title}
        </h2>
        <p className='product-info_description'>
        {
          productInfo?.description
        }
        </p>
        <div className='product-info__descripcion__body'>
          <article className='product-info__price'>
            <h3 className='product-info__price-label'>Price</h3>
            <span className='product-info__price__value'>
              {productInfo?.price}</span>
          </article>
          <article className='product-info__qantity'>
            <h3 className='product-info__quantity-label'>Quantity</h3>
            <div className='product-info__quantity-'>
              <button className='btn' onClick={handleMinus}>-</button>
              <div className='btn'>{counter}</div>
              <button className='btn' onClick={handlePlus}>+</button>
            </div>
          </article>
          
        </div>
        <button className='addToCart'>Add to cart <i className="fa-solid fa-cart-plus"></i></button>
        </div>
    </section>
  )
}

export default ProductDescription