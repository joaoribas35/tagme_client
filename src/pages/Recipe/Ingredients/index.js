import { useState, useEffect } from "react";
import { Container, Ingredient } from "./styles";
import Checkbox from "../../../components/Checkbox";

const Ingredients = ({ ingredients, setIsAllIngredients }) => {
  const totalIngredients = ingredients.length;
  const [counter, setCounter] = useState(0);
  const [click, setClick] = useState(false);

  const handleCounter = () => {
    setClick(!click);
  };

  useEffect(() => {
    if (counter === totalIngredients) {
      setIsAllIngredients(true);
    }
  }, [counter]);

  return (
    <>
      <Container>
        <h1>Ingredientes</h1>

        {ingredients.map((ingredient, i) => (
          <Ingredient key={i} onClick={handleCounter}>
            <Checkbox setCounter={setCounter} counter={counter} />
            <p>{ingredient}</p>
          </Ingredient>
        ))}
      </Container>
    </>
  );
};

export default Ingredients;
