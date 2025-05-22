// src/pages/Pagina1.jsx
import React, { useState } from 'react';
import { Cardlist, CardsConteiner } from '../components/Cards';

const CardConteudo = [
  { id: 1, card: 'Card 1', descricao: 'Descrição do Card 1' },
  { id: 2, card: 'Card 2', descricao: 'Descrição do Card 2' },
  { id: 3, card: 'Card 3', descricao: 'Descrição do Card 3' },
  { id: 4, card: 'Card 4', descricao: 'Descrição do Card 4' },
];

export default function Pagina1() {
  const [ativo, setAtivo] = useState(null);

  const HoverOn = (id) => {
    if (ativo === null) setAtivo(id);
  };

  const handleClick = () => {
    setAtivo(null);
  };

  return (
    <div>
      <h1>Pagina 1</h1>
      <CardsConteiner>
        {CardConteudo.map((item) => (
          <Cardlist.Row key={item.id}>
            <Cardlist.CardC onMouseEnter={() => HoverOn(item.id)}>
              {item.card}
            </Cardlist.CardC>

            {ativo === item.id && (
              <Cardlist.Descricao onClick={handleClick}>
                {item.descricao}
              </Cardlist.Descricao>
            )}
          </Cardlist.Row>
        ))}
      </CardsConteiner>
    </div>
  );
}
