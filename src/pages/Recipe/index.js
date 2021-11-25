/* eslint-disable no-unused-vars */
import { useState } from "react";
import Ingredients from "./Ingredients";
import Directions from "./Directions";
import Footer from "./Footer";
import Header from "./Header";
import { useTimer } from "../../providers/Timer";

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
      <Header
        prepTime={recipe.prepTime}
        title={recipe.title}
        description={recipe.description}
      />
      <Ingredients
        ingredients={recipe.ingredients}
        setIsAllIngredients={setIsAllIngredients}
      />
      <Directions
        directions={recipe.directions}
        setIsAllSteps={setIsAllSteps}
        setProgress={setProgress}
      />
      <Footer
        progress={progress}
        time={time}
        verifyIngredients={verifyIngredients}
        startPrep={startPrep}
        isAllSteps={isAllSteps}
      />
    </>
  );
};

export default Recipe;
