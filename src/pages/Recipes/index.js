import React from "react";
import Chronometer from "../../components/Chronometer";
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
        <Chronometer />
      </Container>
    </>
  );
};

export default Recipes;
