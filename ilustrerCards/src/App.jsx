import { BotaoSelecao } from "./components/Botoes";
import { ConteinerTelaInicial, ConteinerBotoes, ConteinerDestaque, ConteinerPesquisa, ConteinerLogin } from "./components/Conteiners";
import { Header,Nav,Main,SectionCardPrincipal,SectionBotoes } from "./components/Semantiico";
import { Imagens } from "./components/Imagem";
import fotodestaque from "./assets/imagem1.webp";
function App() {
  return (
    <ConteinerTelaInicial>
      <Header>
          <h1>pagina inicial</h1>
      </Header>
      <Main>
            <SectionCardPrincipal>
                  <ConteinerDestaque>
                        <h2>venha conhecer nossos catalogo especial</h2>
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
}

export default App;

