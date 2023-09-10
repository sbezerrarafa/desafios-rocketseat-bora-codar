import React from 'react';
import * as S from './styles';

interface IButton {
  children?: string;
}

export function Button(props: IButton) {
  return <S.ButtonPadrao>{props.children}</S.ButtonPadrao>;
}
