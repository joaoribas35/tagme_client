import { useState } from "react";
import Ingredients from "./Ingredients";
import Directions from "./Directions";
import LiveModal from "../../components/Modal";
import { HeaderBottom, HeaderTop, Header, Footer } from "./styles";

// mock data
import mock from "../../mock.json";

const Recipe = () => {
  const [recipe, setRecipe] = useState(mock[0]);
  const [startPrep, setStartPrep] = useState(false);
  const [isAllIngredients, setIsAllIngredients] = useState(false);
  const [isAllSteps, setIsAllSteps] = useState(false);

  const verifyIngredients = () => {
    if (isAllIngredients) {
      setStartPrep(true);
    }
  };

  return (
    <>
      <Header>
        <HeaderTop>
          <div>Voltar</div>
          <div>Tempo de preparo</div>
        </HeaderTop>
        <HeaderBottom>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </HeaderBottom>
      </Header>
      <Ingredients
        ingredients={recipe.ingredients}
        setIsAllIngredients={setIsAllIngredients}
      />
      <Directions
        directions={recipe.directions}
        setIsAllSteps={setIsAllSteps}
      />
      <Footer>
        <div>STATUS</div>
        <div onClick={verifyIngredients}>
          {startPrep ? (
            isAllSteps ? (
              <LiveModal label="Finalizar">Acabou!</LiveModal>
            ) : (
              <button disabled>Finalizar</button>
            )
          ) : (
            <LiveModal label="Iniciar preparação">
              Precisa de todos os ingredientes
            </LiveModal>
          )}
        </div>
      </Footer>
    </>
  );
};

export default Recipe;
