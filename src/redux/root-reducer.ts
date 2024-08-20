import { combineReducers } from '@reduxjs/toolkit'
import { produtosAPI } from '../services/produtosAPI'
import cartReducer from './cart/slice'
import favoriteReducer from './favorite/slice'

const rootReducer = combineReducers({
  carrinho: cartReducer,
  favoritos: favoriteReducer,
  [produtosAPI.reducerPath]: produtosAPI.reducer
})

export default rootReducer
