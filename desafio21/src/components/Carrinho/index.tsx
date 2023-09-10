import React from 'react';
import * as S from './styles';
import { data } from '../../pages/api/produtos';
import { Produto } from '../Produto';
import { ButtonPadrao } from '../Button/styles';
import Image from 'next/image';
import etiqueta from '../../assets/Tag.svg';
import closed from '../../assets/Closed.svg';
export function Carrinho() {
  return (
    <S.ContainerCarrinho>
      <S.HeaderCarrinho>
        <p>
          Seu Carrinho tem <strong>5 itens</strong>
        </p>
        <Image width={24} height={24} src={closed} alt="closed" />
      </S.HeaderCarrinho>
      <S.ListaProdutos className="lista-produtos">
        {data.map((produto) => (
          <Produto
            descricao={produto.descProduto}
            imagem={produto.imgProduto}
            preco={produto.precoProduto}
          />
        ))}
      </S.ListaProdutos>
      <S.ContainerTotalPagar>
        <S.Total>
          <p>Total</p>
          <p>R$ 10.681,60</p>
        </S.Total>
        <S.AreaCupom>
          <Image width={24} height={24} src={etiqueta} alt="etiqueta" />
          <input type="text" placeholder="Adicionar cupom" />
        </S.AreaCupom>
        <ButtonPadrao children="Finalizar Compra" />
      </S.ContainerTotalPagar>
    </S.ContainerCarrinho>
  );
}
