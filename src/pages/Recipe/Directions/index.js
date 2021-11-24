import Checkbox from "../../../components/Checkbox";
import { Container, Direction } from "./styles";

const Directions = () => {
  return (
    <>
      <Container>
        <h1>Modo de preparo</h1>

        <Direction>
          <Checkbox />
          <div>
            <h1>Passo 1</h1>
            <p>
              Faça um refogado com o azeite a cebola e os dentes de alho bem
              picados. Esmague os tomates maduros sem pele e junte ao refogado.
              Tempere com sal. Deixe "namorar" durante alguns minutos.
            </p>
          </div>
        </Direction>

        <Direction>
          <Checkbox />
          <div>
            <h1>Passo 1</h1>
            <p>
              Faça um refogado com o azeite a cebola e os dentes de alho bem
              picados. Esmague os tomates maduros sem pele e junte ao refogado.
              Tempere com sal. Deixe "namorar" durante alguns minutos.
            </p>
          </div>
        </Direction>
      </Container>
    </>
  );
};

export default Directions;
