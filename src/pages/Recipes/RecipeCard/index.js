import { Container, Description, ShowRecipe } from "./styles";
import arroz_marisco_pq from "../../../assets/img/prato-arroz-marisco-peq.jpg";

const RecipeCard = ({ recipe }) => {
  return (
    <Container>
      <Description>
        <img src={arroz_marisco_pq} alt="Arroz de Mariscos" />
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
