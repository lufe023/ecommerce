import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import CardHome from '../home/CardHome'
import {  cutFavoritesProducts} from '../../store/slices/favoritesProducts.slice.js'

import SecctionNameAnimate from '../SecctionNameAnimate'
import InputSearch from '../home/InputSearch'
import CategoryFilter from '../home/CategoryFilter'
import PriceFilter from '../home/PriceFilter'
import './Home.css'

import SimpleSlider from '../SimpleSlider/SimpleSlider'
import axios from 'axios'

const Home = () => {

    const dispatch = useDispatch()


    const products = useSelector(state => state.products)

    const [inputSearch, setInputSearch] = useState('')
    const [filterProducts, setFilterProducts] = useState()
    const [objFilterPrice, setObjFilterPrice] = useState({})
    const [addToCart, setAddToCart] = useState()
    const [categories, setCategories] = useState()

    useEffect(() => {
     const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
     axios.get(URL)
     .then(res => (setCategories(res.data.data.categories)))
     .catch(err => console.log(err))
    }, [])



    useEffect(() => {
        if(inputSearch.length !== 0) {
          const filter = products?.filter(e => e.title.toLowerCase().includes(inputSearch.toLowerCase()))
          setFilterProducts(filter)
        } else {
        setFilterProducts('')
        }
    }, [inputSearch])
    
    // Filtro por price
  useEffect(() => {
    if(objFilterPrice.to || objFilterPrice.from){
      const filter = products?.filter(e => {
        const price = Number(e.price)
        const min = objFilterPrice.from
        const max = objFilterPrice.to
        // Este if es para cuando colocan un valor en los dos lados
        if(min && max){
          return min <= price && price <= max
          // Este es cuando colocan un valor solo en min
        } else if(min && !max){
          return min <= price
          // Este es cuando colocan un valir solo en max
        } else if(!min && max){
          return price <= max
          // Este es cuando no rellenan ningun input
        } else {
          return true
        }
      })
      setFilterProducts(filter)
    } else {
      setFilterProducts('')
    }
  }, [objFilterPrice.to, objFilterPrice.from])
    

    const deletefromFavorite = (id) => {    
        dispatch(cutFavoritesProducts(id))
    }

    const handleCloseMessage = () => {  

      setAddToCart()
    }

    if(products){

    return (
    <div className='home'>
      {
      addToCart?
      <div onClick={handleCloseMessage} className='message__container'>
      <i onClick={handleCloseMessage} className="fa-solid fa-square-xmark closeB"></i>
        <p className='message'>
      {addToCart}

      </p>

      </div>
      :<div></div>
    }
    
    <SimpleSlider categories = {categories} />
    <div className='secction_name'>
        <SecctionNameAnimate/>
       <div>
        <i className="gif fa-solid fa-gift"></i>
        
       </div>
      
    </div>
 
      <div className='filters'>
        <PriceFilter setObjFilterPrice = {setObjFilterPrice}/>
        <CategoryFilter categories={categories}/>
        <InputSearch  setInputSearch={setInputSearch}/>
        </div>
        <div className='home__container__card'>
        {
            filterProducts?
            filterProducts?.map(product=>(
                <CardHome key={product.id}
                product={product}
                deletefromFavorite={deletefromFavorite}
                setAddToCart = {setAddToCart}
                />
                
            ))
         :
         products?.map(product=>(
             <CardHome key={product.id}
             product={product}
             deletefromFavorite={deletefromFavorite}
             setAddToCart = {setAddToCart}
             />
         )) 
        }
        </div>
        
        </div>
    )
    }else{
        return(
        <div className='home'>
<div className='loading__container'>
<img className='loading' src='./images/loading.gif'/>
</div>
    
        </div>

        )
    }
}

export default Home