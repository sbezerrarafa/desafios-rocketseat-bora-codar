import styled from 'styled-components';
import theme from '../../styles/theme';

export const ContainerProduto = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  img {
    width: 104px;
    height: 104px;
    border-radius: 8px;
  }
`;

export const DescProduto = styled.div`
  width: 100%;
`;

export const ContainerPreco = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
