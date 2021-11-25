import React from "react";
import RecipeCard from "./RecipeCard";
import Topbar from "../../components/Topbar";
import { useRecipes } from "../../providers/Recipes";
import { CardWrapper, Container, Title } from "./styles";

const Recipes = () => {
  const { recipes } = useRecipes();

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
    </>
  );
};

export default Recipes;
