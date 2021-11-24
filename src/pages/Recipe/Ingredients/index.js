import { Container, Ingredient } from "./styles";
import Checkbox from "../../../components/Checkbox";

const Ingredients = () => {
  return (
    <>
      <Container>
        <h1>Ingredientes</h1>

        <Ingredient>
          <Checkbox />
          <p> 1 cebola</p>
        </Ingredient>
      </Container>
    </>
  );
};

export default Ingredients;
