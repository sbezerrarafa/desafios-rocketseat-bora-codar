import React, { useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import menos from '../../assets/Minus.svg';
import mais from '../../assets/Plus.svg';

export function Stepper() {
  const [quantidade, setQuantidade] = useState(1);

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };
  return (
    <S.ContainerQuantidadeItens>
      <S.ButtonMinus onClick={diminuirQuantidade}>
        <Image src={menos} alt="menos" />
      </S.ButtonMinus>
      <input type="text" value={quantidade} readOnly />
      <S.ButtonPlus onClick={aumentarQuantidade}>
        <Image src={mais} alt="mais" />
      </S.ButtonPlus>
    </S.ContainerQuantidadeItens>
  );
}
