import styled from 'styled-components';
import theme from '../../styles/theme';

export const ContainerQuantidadeItens = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  input {
    border: none;
    width: 16px;
    text-align: center;
    background: transparent;
    font-weight: bold;
    color: ${theme.colors.textColorPrimary};
  }

  button {
    background: transparent;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const ButtonMinus = styled.button`
  border: 1px solid ${theme.colors.strokeColor};
`;
export const ButtonPlus = styled.button`
  border: 1px solid ${theme.colors.primaryLight};
`;
