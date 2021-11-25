/* eslint-disable no-unused-vars */
import { useState } from "react";
import Ingredients from "./Ingredients";
import Directions from "./Directions";
import StartModal from "./Modals/StartModal";
import FinishModal from "./Modals/FinishModal";
import { Button } from "../../components/Button";
import { useTimer } from "../../providers/Timer";
import { showMinutes } from "../../services/helpers";
import {
  HeaderBottom,
  HeaderTop,
  Header,
  Footer,
  Bar,
  BarSuccess,
} from "./styles";

// mock data
import mock from "../../mock.json";

const Recipe = () => {
  const [recipe, setRecipe] = useState(mock[0]);
  const [startPrep, setStartPrep] = useState(false);
  const [isAllIngredients, setIsAllIngredients] = useState(false);
  const [isAllSteps, setIsAllSteps] = useState(false);
  const [progress, setProgress] = useState("0%");
  const { time, setStartTimer } = useTimer();

  const verifyIngredients = () => {
    if (isAllIngredients) {
      setStartPrep(true);
      setIsAllIngredients(false);
      setStartTimer(true);
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
        setProgress={setProgress}
      />
      <Footer>
        <div>
          Status <strong>{progress}</strong> pronto e {showMinutes(time)}{" "}
          minuto(s) utilizado(s)
          {progress === "100%" ? (
            <BarSuccess now={progress} />
          ) : (
            <Bar now={progress} />
          )}
        </div>
        <div onClick={verifyIngredients}>
          {startPrep ? (
            isAllSteps ? (
              <FinishModal />
            ) : (
              <Button success disabled>
                Finalizar
              </Button>
            )
          ) : (
            <StartModal />
          )}
        </div>
      </Footer>
    </>
  );
};

export default Recipe;
