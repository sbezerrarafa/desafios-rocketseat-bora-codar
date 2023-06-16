import * as S from './style';
import React from 'react';
import check from '../../assets/check.svg';
import info from '../../assets/info.svg';
import Image from 'next/image';

interface ICard {
  title: string;
  children?: string;
  tipo?: 'dark' | 'ligth' | any;
  titlePlano?: string;
  valorPlano?: string;
  tipoButton?: 'transparent' | 'padrao';
  textoButton?: string;
  listBeneficios: string[];
}

export function Card(props: ICard) {
  return (
    <S.ContainerCard tipo={props.tipo}>
      <div className="vantajoso">
        <p>MAIS VANTAJOSO</p>
      </div>
      <S.TitleCard>{props.title}</S.TitleCard>
      <S.ContentPlanos tipo={props.tipo}>
        <p>{props.titlePlano}</p>
        <span>{props.valorPlano}</span>
      </S.ContentPlanos>
      <S.Button tipoButton={props.tipoButton}>{props.textoButton}</S.Button>
      <S.Separador />
      <S.ContainerBeneficios>
        {props.listBeneficios.map((beneficio, index) => (
          <S.ListaBeneficios>
            <S.Beneficio tipo={props.tipo}>
              <Image src={check} alt="check" />
              <p key={index}>{beneficio}</p>
            </S.Beneficio>
            <Image src={info} alt="info" />
          </S.ListaBeneficios>
        ))}
      </S.ContainerBeneficios>
    </S.ContainerCard>
  );
}
