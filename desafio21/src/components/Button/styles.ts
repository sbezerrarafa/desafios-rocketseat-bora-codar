import styled from 'styled-components';
import theme from '../../styles/theme';

export const ButtonPadrao = styled.button`
  color: ${theme.colors.textColorPrimary};
  padding: 20px 48px;
  border-radius: 8px;
  background: ${theme.colors.primary};
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
  border: none;
  font-size: 18px;
  width: 100%;

  &:hover {
    background: ${theme.colors.primaryLight};
  }
  &:focus {
    border: 1px solid ${theme.colors.strokeColor};
  }
`;
