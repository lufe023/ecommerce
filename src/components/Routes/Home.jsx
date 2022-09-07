import React, { useEffect } from 'react'
import { getAllProducts } from '../../store/slices/products.slice'
import { useDispatch, useSelector} from 'react-redux'
import CardHome from '../home/CardHome'
import {  cutFavoritesProducts} from '../../store/slices/favoritesProducts.slice.js'
import Carousel from '../Carousel'
import SecctionNameAnimate from '../SecctionNameAnimate'



const Home = () => {

    const dispatch = useDispatch()


    const products = useSelector(state => state.products)

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
        <div className='home__container__card'>
        {
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