import { HeaderBottom, HeaderTop, Header, Footer } from "./styles";
import Ingredients from "./Ingredients";
import Directions from "./Directions";

const Recipe = () => {
  return (
    <>
      <Header>
        <HeaderTop>
          <div>Voltar</div>
          <div>Tempo de preparo</div>
        </HeaderTop>
        <HeaderBottom>
          <h1>Arroz de Mariscos para 2 pessoas</h1>
          <p>
            Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com
            pimentões e cebola juliene, temperos e um leve toque de açafrão.
            Servidos na paellera. Rico em sabor e apresentação.
          </p>
        </HeaderBottom>
      </Header>
      <Ingredients />
      <Directions />
      <Footer>
        <div>STATUS</div>
        <button>Finalizar</button>
      </Footer>
    </>
  );
};

export default Recipe;
