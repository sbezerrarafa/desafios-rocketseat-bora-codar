import styled from 'styled-components';

export const ContainerCard = styled.div`
  gap: 50px;
  background: #fff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 56px;
  align-items: center;

  hr {
    background: #e5d8ea;
    height: 12px;
    width: 100px;
    border-radius: 100px;
    border: none;
  }
`;
export const TitleCard = styled.div`
  color: #372d3b;
  h2 {
    font-size: 24px;
    strong {
      color: #864293;
    }
  }
  p {
    font-size: 18px;
  }
`;
export const InfoDrive = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DescDrive = styled.div`
  display: flex;
  img {
    width: 150px;
    object-fit: contain;
  }
`;
export const DataDrive = styled.div`
  position: relative;
  img {
    width: 80px;
    height: 80px;
    border-radius: 100px;
  }
  div {
    text-align: center;
    background: #372d3b;
    padding: 3px 10px;
    border-radius: 34px;
    color: #fbf8fc;
    font-weight: 600;
    font-size: 13px;
    position: absolute;
    bottom: -10px;
    right: 9px;
  }
  p {
    display: flex;
    align-items: center;
    gap: 5px;

    img {
      width: 14px;
      height: 14px;
    }
  }
`;
export const InfoCar = styled.div`
  color: #372d3b;
  font-size: 22px;
  font-weight: bold;

  span {
    font-weight: 400;
    font-size: 14px;
  }
`;
export const ContainerContact = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 7fr 1fr 1fr;
  gap: 16px;

  input {
    padding: 17px 29px;
    border-radius: 24px;
    border: none;
    background: #f5edf7;
  }
  button {
    background: transparent;
    border: none;

    img {
      width: 28px;
    }
  }
`;
