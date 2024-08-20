import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoriteState = {
  favoritos: Produto[]
}

const initialState: FavoriteState = {
  favoritos: []
}

const favoriteSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoJaFavoritado = state.favoritos.find(
        (favorito) => favorito.id === produto.id
      )

      if (produtoJaFavoritado) {
        state.favoritos = state.favoritos.filter(
          (favorito) => favorito.id !== produto.id
        )
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { favoritar } = favoriteSlice.actions

export default favoriteSlice.reducer
