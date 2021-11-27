/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Topbar from "../../components/Topbar";
import RecipeCard from "./RecipeCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getRecipes } from "../../services/server";
import { searchRecipes } from "../../services/helpers";
import { CardWrapper, Container, Title } from "./styles";

const Recipes = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

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
      <Topbar setSearch={setSearch} />
      <Container>
        <Title>Receitas</Title>
        <CardWrapper>
          {recipes
            .filter((recipe) => searchRecipes(recipe, search))
            .map((recipe, i) => (
              <RecipeCard key={i} recipe={recipe} />
            ))}
        </CardWrapper>
      </Container>
      {loading && <LoadingSpinner />}
    </>
  );
};

export default Recipes;
