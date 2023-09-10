import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import { Stepper } from '../Stepper';

interface IProduto {
  imagem: string;
  descricao: string;
  preco: string;
}

export function Produto(props: IProduto) {
  return (
    <S.ContainerProduto>
      <Image width={500} height={500} src={props.imagem} alt="img-produto" />
      <S.DescProduto>
        <p>{props.descricao}</p>
        <S.ContainerPreco>
          <p>{props.preco}</p>
          <Stepper />
        </S.ContainerPreco>
      </S.DescProduto>
    </S.ContainerProduto>
  );
}
