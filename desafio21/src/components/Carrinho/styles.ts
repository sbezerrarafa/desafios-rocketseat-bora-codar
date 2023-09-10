import styled from 'styled-components';
import theme from '../../styles/theme';

export const ContainerCarrinho = styled.div`
  background: ${theme.colors.black};

  position: fixed;
  width: 428px;
  height: 100vh;
  right: 0;
`;

export const HeaderCarrinho = styled.div`
  font-size: 20px;
  color: ${theme.colors.textColorSecondary};
  padding: 0px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: ${theme.colors.textColorPrimary};
  }
`;

export const ListaProdutos = styled.div`
  border-top: 1px solid ${theme.colors.strokeColor};
  padding: 32px;
  overflow-y: scroll;
  color: ${theme.colors.textColorSecondary};
  border-top: 1px solid #3f3f46;
  padding: 32px;
  overflow-y: scroll;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-height: 506px;
`;

export const ContainerTotalPagar = styled.div`
  color: ${theme.colors.textColorSecondary};
  padding: 32px;
  border-top: 1px solid ${theme.colors.strokeColor};
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

export const AreaCupom = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: flex-end;

  input {
    border: none;
    background: transparent;
    color: ${theme.colors.textColorPrimary};
    width: 103px;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${theme.colors.primary};
  }
  :-ms-input-placeholder {
    color: ${theme.colors.primary};
  }
`;
