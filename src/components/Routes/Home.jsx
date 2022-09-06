import React, { useEffect } from 'react'
import { getAllProducts } from '../../store/slices/products.slice'
import { useDispatch, useSelector} from 'react-redux'
import CardHome from '../home/CardHome'
import {  cutFavoritesProducts} from '../../store/slices/favoritesProducts.slice.js'

const Home = () => {

    const dispatch = useDispatch()
    const favorites =useSelector(state => state.favoritesProducts)
    
    useEffect(() => {
    dispatch(getAllProducts())
    }, [])
    
    const products = useSelector(state => state.products)

    const deletefromFavorite = (id) => {    
        dispatch(cutFavoritesProducts(id))
    }

    return (
    <div className='home'>
    
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
}

export default Home