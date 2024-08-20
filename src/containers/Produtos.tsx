import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

import { useGetProdutosQuery } from '../services/produtosAPI'

const ProdutosComponent = () => {
  // Hook para buscar produtos da API
  const { data: produtos = [] } = useGetProdutosQuery()

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
