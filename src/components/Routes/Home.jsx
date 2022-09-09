import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../store/slices/products.slice'
import { useDispatch, useSelector} from 'react-redux'
import CardHome from '../home/CardHome'
import {  cutFavoritesProducts} from '../../store/slices/favoritesProducts.slice.js'
import Carousel from '../Carousel'
import SecctionNameAnimate from '../SecctionNameAnimate'
import InputSearch from '../home/InputSearch'
import CategoryFilter from '../home/CategoryFilter'
import PriceFilter from '../home/PriceFilter'



const Home = () => {

    const dispatch = useDispatch()


    const products = useSelector(state => state.products)

    const [inputSearch, setInputSearch] = useState('')
    const [filterProducts, setFilterProducts] = useState()
    const [objFilterPrice, setObjFilterPrice] = useState('')
    
    useEffect(() => {
        if(inputSearch.length !== 0){
  const filter = products?.filter(e => e.title.toLowerCase().includes(inputSearch))
  setFilterProducts(filter)
}else{
    setFilterProducts('')
}
    }, [inputSearch])
    
    //filtro por price
    useEffect(() => {
    const filter = products?.filter(e => {
        const price = Number(e.price)
        const min = objFilterPrice.from
        const max = objFilterPrice.to
        if(min && max){
        return min <= price && price <= max
    }else if (min && !max){
        return min <= price
    } else if(!min && max){
        price <= max
    }else{
        return true
    }
    })
      setFilterProducts(filter)
    }, [objFilterPrice])
    

    const deletefromFavorite = (id) => {    
        dispatch(cutFavoritesProducts(id))
    }
 const images =[
    {
        id: '1',
        title:'Awsome Forest',
        image: 'https://cdn.pixabay.com/photo/2022/09/02/13/35/mountains-7427623_960_720.jpg'
    },
    {
        id: '2',
        title:'Second Title',
        image: 'https://cdn.pixabay.com/photo/2022/08/17/04/07/tree-7391504_960_720.jpg'
    },
    {
        id: '3',
        title:'Third Title',
        image: 'https://cdn.pixabay.com/photo/2022/08/25/20/34/river-7411236_960_720.jpg'
    },
    {
        id: '4',
        title:'Forth Title',
        image: 'https://cdn.pixabay.com/photo/2022/09/01/09/08/road-7425079_960_720.jpg'
    },
    {
        id: '5',
        title:'Five Title',
        image: 'https://cdn.pixabay.com/photo/2022/08/19/13/21/dog-7396912_960_720.jpg'
    }
 ]
    if(products){
       
    return (
    <div className='home'>
    <Carousel products = {products}/>
       
    <div className='secction_name'>
        <SecctionNameAnimate/>
       <div>
        <i className="gif fa-solid fa-gift"></i>
        
       </div>
      
    </div>
 
        <InputSearch  setInputSearch={setInputSearch}/>
        <PriceFilter setObjFilterPrice = {setObjFilterPrice}/>
       <CategoryFilter/>
        <div className='home__container__card'>
       
        {
            filterProducts?
            filterProducts?.map(product=>(
                <CardHome key={product.id}
                product={product}
                deletefromFavorite={deletefromFavorite}
                />
                
            ))
         :
         products?.map(product=>(
             <CardHome key={product.id}
             product={product}
             deletefromFavorite={deletefromFavorite}
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