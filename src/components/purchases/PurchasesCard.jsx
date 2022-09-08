import React from 'react'

const PurchasesCard = ({purchase}) => {
  return (
    <article>
        <header>
            <h3 className='card-purchase__date'>
                {purchase.createdAt}
            </h3>
            <ul className='card-purchase__body'>
                {
                    purchase.cart.products.map(product => (
                        <li key={product.id}>
                            {`${product.title} | ${product.productsInCart.quantity} | ${product.price} `}
                            
                        </li>
                    ))
                }
            </ul>
        </header>
     
        </article>
  )
}

export default PurchasesCard