import React from 'react';
import * as S from './style';
import phone from '../../assets/phone.svg';
import shield from '../../assets/shield.svg';
import star from '../../assets/star.svg';
import { data } from '../../pages/api/hello';
import Image from 'next/image';

export function CardMotorista() {
  return (
    <>
      {' '}
      {data.map((motorista) => (
        <S.ContainerCard>
          <hr />
          <S.TitleCard>
            <h2>
              Encontre <strong>{motorista.name}</strong> no local de partida
            </h2>
            <p>Chega em 3 minutos (800 metros)</p>
          </S.TitleCard>
          <S.InfoDrive>
            <S.DescDrive>
              <S.DataDrive>
                <img src={motorista.avatar} alt="avatar" />
                <div>
                  <p>
                    {' '}
                    <Image src={star} alt="star" />
                    5.0
                  </p>
                </div>
              </S.DataDrive>
              <img src={motorista.imgCar} alt="carro" />
            </S.DescDrive>
            <S.InfoCar>
              <p>{motorista.placa}</p>
              <span>{motorista.modelCar}</span>
            </S.InfoCar>
          </S.InfoDrive>
          <S.ContainerContact>
            <input type="text" placeholder="Enviar mensagem para..." />
            <button>
              <Image src={phone} alt="phone" />
            </button>
            <button>
              <Image src={shield} alt="phone" />
            </button>
          </S.ContainerContact>
        </S.ContainerCard>
      ))}
    </>
  );
}
