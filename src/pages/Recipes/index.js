import { useState, useEffect } from "react";
import Topbar from "../../components/Topbar";
import RecipeCard from "./RecipeCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useRecipes } from "../../providers/Recipes";
import { getRecipes } from "../../services/server";
import { CardWrapper, Container, Title } from "./styles";

const Recipes = () => {
  const [loading, setLoading] = useState(false);
  const { recipes, setRecipes } = useRecipes();

  const listRecipes = async () => {
    setLoading(true);

    try {
      const response = await getRecipes();
      setRecipes(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    listRecipes();
  }, []);

  return (
    <>
      <Topbar />
      <Container>
        <Title>Receitas</Title>
        <CardWrapper>
          {recipes.map((recipe, i) => (
            <RecipeCard key={i} recipe={recipe} />
          ))}
        </CardWrapper>
      </Container>
      {loading && <LoadingSpinner />}
    </>
  );
};

export default Recipes;
