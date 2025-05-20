import styled from 'styled-components';

export const CardsConteiner = styled.div`
  display: flex;
  flex-direction: row;
  width: 10rem;
  height: 10rem;

 
`;

export const CardsImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 25px;
`;

export const CardsDescricao = styled(CardsImage)`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(174, 170, 170, 0.77);
  box-shadow: 5px -8px rgb(200, 200, 200);
  transition: all 0.5s ease-in-out;
  z-index: 1;
`;

export const Cardlist =
  {
    CardC: CardsImage,
    Descricao: CardsDescricao

  }
