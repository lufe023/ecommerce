import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
import favoritesProducts from './slices/favoritesProducts.slice.js'

export default configureStore({
    reducer:{
        products, favoritesProducts
    }
}
)