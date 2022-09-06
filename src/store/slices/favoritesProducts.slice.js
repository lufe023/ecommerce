import {createSlice} from "@reduxjs/toolkit"

export const favoritesProducts = createSlice({
    name: "favoritesProducts",
    initialState: [],
    reducers:{
        setFavoritesProducts: (state, action) => {
            state.push(action.payload)
        },
        cutFavoritesProducts: (state, action) => {
            state.splice(action.payload,1)
        }
    }
})

export const { setFavoritesProducts,  cutFavoritesProducts  } = favoritesProducts.actions

export default favoritesProducts.reducer

