import styled from 'styled-components';

export const ContainerAgenda = styled.div`
  margin: 20px auto;
  max-width: 420px;
`;
export const TopoAgenda = styled.div`
  background: #16151e;
  padding: 40px;

  input {
    color: #e1e1e6;
    padding: 12px 24px;
    width: 100%;
    background: #24243d;
    border: none;
    height: 40px;
    border-radius: 5px;
  }
`;
export const TopoAcoes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #e1e1e6;
  font-size: 20px;
  margin-bottom: 24.5px;
`;
export const Acoes = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ContainersContatos = styled.div`
  background: #1a1924;
  padding: 40px;
  max-height: 470px;
  overflow-y: auto;
  margin: 0 40px;
`;

export const ContainerContatosDesc = styled.div`
  color: #e1e1e6;
  font-size: 14px;
`;

export const ContainerInferior = styled.div`
  background: #1a1924;
`;

export const DescContatos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  p:nth-child(2) {
    font-size: 12px;
    color: #8c8cba;
  }
`;

export const InfoContatos = styled.div`
  padding-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }
`;
