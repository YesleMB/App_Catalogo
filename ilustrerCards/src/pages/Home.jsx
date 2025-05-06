import React from 'react';
import { BotaoSelecao } from "../components/Botoes";
import { ConteinerTelaInicial, ConteinerBotoes, ConteinerDestaque, ConteinerPesquisa, ConteinerLogin } from "../components/Conteiners";
import { Header,Nav,Main,SectionCardPrincipal,SectionBotoes } from "../components/Semantiico";

const Home = () => {
    return (
        <ConteinerTelaInicial>
              <Header>
                  <h1>Visizuer Cosmeticos</h1>
              </Header>
              <Main>
                    <SectionCardPrincipal>
                          <ConteinerDestaque>
                                <h2>Nossa linha premium</h2>
                          </ConteinerDestaque> 
                    </SectionCardPrincipal>
                    <SectionBotoes>
                        <BotaoSelecao>
                            <p>botao 1</p>
                        </BotaoSelecao>
                        <BotaoSelecao>
                            <p>botao 2</p>
                        </BotaoSelecao>
                        <BotaoSelecao>
                            <p>botao 3</p>
                        </BotaoSelecao>
                    </SectionBotoes>
              </Main>
            </ConteinerTelaInicial>
    );
};

export default Home;