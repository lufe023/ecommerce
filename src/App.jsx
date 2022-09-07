import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Favorites from './components/Routes/Favorites'
import Home from './components/Routes/Home'
import Login from './components/Routes/Login'
import ProductDetail from './components/Routes/ProductDetail'
import Purchases from './components/Routes/Purchases'
import Cart from './components/shared/Cart'
import Header from './components/shared/Header'
import {  cutFavoritesProducts} from './store/slices/favoritesProducts.slice.js'
import { useDispatch, useSelector} from 'react-redux'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
import { useEffect } from 'react'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
    }, [])
    
  const deletefromFavorite = (id) => {    
    dispatch(cutFavoritesProducts(id))
}
  return (
    <div>
    <Header/>
    <div>""</div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/favorites' element={<Favorites deletefromFavorite={deletefromFavorite}/>}/>
    <Route path='/product/:id' element={<ProductDetail/>}/>

    <Route element={<ProtectedRoutes />}>
      <Route path='/purchases' element={<Purchases/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Route>
    </Routes>
    </div>
  )
}

export default App
