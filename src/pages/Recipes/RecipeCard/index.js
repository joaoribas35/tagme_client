import { Container, Description, ShowRecipe } from "./styles";
import { baseURL } from "../../../services/server";

const RecipeCard = ({ recipe }) => {
  return (
    <Container>
      <Description>
        <img src={`${baseURL}/${recipe.thumbnail}`} alt={recipe.title} />
        <div>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </div>
      </Description>
      <ShowRecipe to={`/receitas/${recipe._id}`}>Ver receita</ShowRecipe>
    </Container>
  );
};

export default RecipeCard;
