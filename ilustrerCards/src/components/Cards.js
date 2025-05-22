// src/components/Cards.js
import styled from 'styled-components';

// Container geral: empilha linhas verticalmente
export const CardsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 2rem;
`;

// Cada linha: coloca card e descrição lado a lado
export const CardRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// O quadrado principal
export const CardsImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 15rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 25px;
  cursor: pointer;
`;

// A descrição, igual ao card mas fundo diferente
export const CardsDescricao = styled(CardsImage)`
  background-color: rgba(255, 255, 255, 0.77);
  transition: transform 0.5s ease-in-out;
`;

// Para facilitar importação:
export const Cardlist = {
  CardC: CardsImage,
  Descricao: CardsDescricao,
  Row: CardRow,
};
