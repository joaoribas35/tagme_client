import React from "react";
import RecipeCard from "./RecipeCard";
import { CardWrapper, Container, Title } from "./styles";
import Topbar from "./Topbar";

const Recipes = () => {
  return (
    <>
      <Topbar />
      <Container>
        <Title>Receitas</Title>
        <CardWrapper>
          <RecipeCard />
        </CardWrapper>
      </Container>
    </>
  );
};

export default Recipes;
