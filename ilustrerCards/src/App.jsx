import React from 'react';
import { BotaoSelecao } from "./components/Botoes";
import { ConteinerTelaInicial, ConteinerBotoes, ConteinerDestaque, ConteinerPesquisa, ConteinerLogin } from "./components/Conteiners";
import { Header, Nav, Main, SectionCardPrincipal, SectionBotoes } from "./components/Semantiico";
import { Link, Outlet } from "react-router-dom"

export default function App () {
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
                      <Link to="pagina1" >
                          <BotaoSelecao/>
                      </Link>
                      <Link to="pagina2" > 
                              <BotaoSelecao/>
                      </Link>
                      <Link to="pagina3" >
                          <BotaoSelecao/>
                      </Link>
  
                  </SectionBotoes>
              </Main>
              
          </ConteinerTelaInicial>
          
        
  )
}


