/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Ingredients from "./Ingredients";
import Directions from "./Directions";
import Footer from "./Footer";
import Header from "./Header";
import { useTimer } from "../../providers/Timer";
import { getRecipe } from "../../services/server";
import LoadingSpinner from "../../components/LoadingSpinner";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState("");
  const [startPrep, setStartPrep] = useState(false);
  const [isAllIngredients, setIsAllIngredients] = useState(false);
  const [isAllSteps, setIsAllSteps] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [progress, setProgress] = useState("0%");
  const { time, setStartTimer } = useTimer();
  const [loading, setLoading] = useState(false);

  const listRecipe = async () => {
    setLoading(true);

    try {
      const response = await getRecipe(id);
      setRecipe(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    listRecipe();
  }, []);

  const verifyIngredients = () => {
    if (isAllIngredients) {
      setStartPrep(true);
      setIsAllIngredients(false);
      setStartTimer(true);
      setIsDisabled(false);
    }
  };

  return (
    <>
      {recipe && (
        <>
          <Header
            prepTime={recipe.prepTime}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
          />
          <Ingredients
            ingredients={recipe.ingredients}
            setIsAllIngredients={setIsAllIngredients}
          />
          <Directions
            directions={recipe.directions}
            setIsAllSteps={setIsAllSteps}
            setProgress={setProgress}
            isDisabled={isDisabled}
          />
          <Footer
            progress={progress}
            time={time}
            verifyIngredients={verifyIngredients}
            startPrep={startPrep}
            isAllSteps={isAllSteps}
          />
          {loading && <LoadingSpinner />}
        </>
      )}
      {loading && <LoadingSpinner />}
    </>
  );
};

export default Recipe;
