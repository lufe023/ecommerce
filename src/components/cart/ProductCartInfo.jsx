import React from 'react'

const ProductCartInfo = () => {
  return (
    <article className='cart__item'>
        <header className='cart__item-header'>
        <h4 className='cart_category'>Samsung</h4>
        <h3 className='cart__name'>Samsung Galaxy S22</h3>
        </header>
        <i className="cart__trash fa-solid fa-trash-xmark"></i>
        <span className='cart__quantity'>1</span>
        <footer className='cart_item-footer'>
            <span className='cart__total-label'>Total:</span>
            <p className='cart__total-number'></p>
        </footer>
    </article>
  )
}

export default ProductCartInfo