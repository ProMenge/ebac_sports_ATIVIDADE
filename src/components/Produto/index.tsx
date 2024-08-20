import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { favoritar } from '../../redux/favorite/slice'
import { adicionarAoCarrinho } from '../../redux/cart/slice'
import { RootState } from '../../redux/store'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const estaNosFavoritos = useSelector((state: RootState) =>
    state.favoritos.favoritos.some((p: ProdutoType) => p.id === produto.id)
  )

  const aoComprar = () => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const favoritarProduto = () => {
    dispatch(favoritar(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={favoritarProduto} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={aoComprar} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
