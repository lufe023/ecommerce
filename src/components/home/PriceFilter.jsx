import React from 'react'
import './PriceFilter.css'
const PriceFilter = ({setObjFilterPrice}) => {

const submit = e => {
    e.preventDefault()

    const obj = {
        from: +e.target.fromPrice.value,
        to: +e.target.toPrice.value
    }
   setObjFilterPrice(obj)
}

  return (
    <form className='priceFilter-form' onSubmit={submit}>
        <h3>Filter by price</h3>
        <ul className='price-filter-list'>
            <li>
              <label className='label-price' htmlFor="fromPrice">
              <input className='input input-price' type="number" id='fromPrice' placeholder='Min Price'/>
              </label>
            </li>
            <li>
              <label className='label-price' htmlFor="toPrice">
                <input className='input input-price' type="number" id='toPrice' placeholder='Max Price' />
              </label>
            </li>
        </ul>
        <button className='filter-price-btn'>Filter Price</button>
    </form>
  )
}

export default PriceFilter