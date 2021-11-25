/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Ingredients from "./Ingredients";
import Directions from "./Directions";
import Footer from "./Footer";
import Header from "./Header";
import { useTimer } from "../../providers/Timer";
import { useRecipes } from "../../providers/Recipes";

// mock data
import mock from "../../mock.json";

const Recipe = () => {
  const { id } = useParams();
  const { recipes } = useRecipes();
  const [recipe, setRecipe] = useState(mock[0]);
  const [startPrep, setStartPrep] = useState(false);
  const [isAllIngredients, setIsAllIngredients] = useState(false);
  const [isAllSteps, setIsAllSteps] = useState(false);
  const [progress, setProgress] = useState("0%");
  const { time, setStartTimer } = useTimer();

  const getRecipe = async () => {
    const filtered = await recipes.filter((recipe) => recipe._id === id);
    setRecipe(filtered);
  };

  // useEffect(() => {
  //   getRecipe();
  //   console.log("recipe", recipe);
  // }, []);

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
