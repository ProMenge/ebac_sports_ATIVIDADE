import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import { produtosAPI } from '../services/produtosAPI'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosAPI.middleware, logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
