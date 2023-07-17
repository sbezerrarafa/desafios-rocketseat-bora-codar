import React, { useState } from 'react';
import { data } from '@/src/data';
import * as S from './style';
import { FaPlus, FaPen, FaTrashAlt } from 'react-icons/fa';

export function Contato() {
  const [busca, setBusca] = useState('');

  const filtro = data.filter((contato) => contato.name.includes(busca));

  return (
    <S.ContainerAgenda>
      <S.TopoAgenda>
        <S.TopoAcoes>
          <h4>Meus Contatos</h4>
          <S.Acoes>
            <FaPlus />
            <FaPen />
            <FaTrashAlt />
          </S.Acoes>
        </S.TopoAcoes>
        <input
          value={busca}
          type="text"
          placeholder="Busque por nome ou por dados de contato..."
          onChange={(e) => setBusca(e.target.value)}
        />
      </S.TopoAgenda>
      <S.ContainerInferior>
        <S.ContainersContatos className="containers-contatos">
          {filtro.map((itens, index) => (
            <S.ContainerContatosDesc>
              <S.InfoContatos>
                <img src={itens.avatar} alt="check" />
                <S.DescContatos>
                  <p key={index}>
                    {itens.name} {itens.lastName}
                  </p>
                  <p>{itens.phoneNumber}</p>
                </S.DescContatos>
              </S.InfoContatos>
            </S.ContainerContatosDesc>
          ))}
        </S.ContainersContatos>
      </S.ContainerInferior>
    </S.ContainerAgenda>
  );
}
