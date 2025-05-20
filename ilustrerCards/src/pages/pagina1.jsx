import {Cardlist,CardsImage, CardsConteiner,CardsDescricao } from "../components/Cards";

const CardConteudo =[
    {
        id: 1,
        card: <CardsImage>Card 1</CardsImage>,
        descricao: <CardsDescricao>Descrição do Card 1</CardsDescricao>
    },
    {
        id: 2,
        card: <CardsImage>Card 2</CardsImage>,
        descricao: <CardsDescricao>Descrição do Card 2</CardsDescricao>
    },
    {
        id: 3,
        card: <CardsImage>Card 3</CardsImage>,
        descricao: <CardsDescricao>Descrição do Card 3</CardsDescricao>
    },
    {
        id: 4,
        card: <CardsImage>Card 4</CardsImage>,
        descricao: <CardsDescricao>Descrição do Card 4</CardsDescricao>
    }
]

 const Pagina1 = () => {
    return (
        <div>
        <h1>Pagina 1</h1>
        <CardsConteiner>
            {CardConteudo.map((card) => (
                <Cardlist.CardC key={card.id}>
                    {card.card}
                    {card.descricao}
                </Cardlist.CardC>
            ))}
        </CardsConteiner>


 </div> 
    )
    };

    export default Pagina1;