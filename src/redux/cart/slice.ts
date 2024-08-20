import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  itens: Produto[]
}

const initialState: CartState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produtos = action.payload

      if (state.itens.find((produto) => produto.id === produtos.id)) {
        alert('Item ja está no carrinho')
      } else {
        state.itens.push(produtos)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
