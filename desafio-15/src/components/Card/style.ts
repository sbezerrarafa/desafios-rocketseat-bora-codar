import styled, { css } from 'styled-components';

interface ICard {
  tipo?: 'dark' | 'light';
  tipoButton?: 'padrao' | 'transparent';
}
const CardsColorsVariations = {
  dark: css`
    background: #0f172a;
    color: #fff;
  `,
  light: css`
    background: #fff;
    color: #1e293b;

    .vantajoso {
      display: none;
      p {
        color: #0f172a;
      }
    }
  `,
};
const TiposButtons = {
  padrao: css`
    background: #996dff;
    border: none;
    color: #fff;
  `,
  transparent: css`
    background: #fff;
    border: 1px solid;
    color: #1e293b;
  `,
};

export const ContainerCard = styled.section<ICard>`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: #e2e8f0;
  padding: 32px;
  width: 384px;
  border-radius: 10px;
  height: 454px;
  gap: 32px;

  .vantajoso {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    position: absolute;
    left: calc(50% - 133px / 2 - 0.5px);
    top: -18px;

    p {
      background: #fba94c;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 12px;
      color: #0f172a;
      font-weight: bold;
    }
  }
  ${(props) => CardsColorsVariations[props.tipo || 'light']}
`;

export const TitleCard = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #7c3aed;
`;

export const ContentPlanos = styled.div<ICard>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 32px;
    color: ${(props) => CardsColorsVariations[props.tipo || 'light']};
  }

  span {
    font-size: 18px;
    color: ${(props) => CardsColorsVariations[props.tipo || 'light']};
  }
`;
export const Button = styled.button<ICard>`
  border-radius: 4px;
  font-weight: bold;
  width: 100%;
  padding: 16px;
  text-align: center;
  ${(props) => TiposButtons[props.tipoButton || 'padrao']}
`;

export const Separador = styled.div`
  height: 1px;
  width: 100%;
  background: #e2e8f0;
`;

export const ContainerBeneficios = styled.div``;

export const ListaBeneficios = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
`;
export const Beneficio = styled.div<ICard>`
  display: flex;
  align-items: center;
  gap: 8px;

  text-transform: capitalize;
  color: ${(props) => CardsColorsVariations[props.tipo || 'light']};

  p {
    margin: 0px;
  }
`;
