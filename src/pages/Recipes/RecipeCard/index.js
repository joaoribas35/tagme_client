import { Container, Description, ShowRecipe } from "./styles";
import arroz_marisco_pq from "../../../assets/img/prato-arroz-marisco-peq.jpg";

const RecipeCard = () => {
  return (
    <Container>
      <Description>
        <img src={arroz_marisco_pq} alt="Arroz de Mariscos" />
        <div>
          <h1>Arroz de Mariscos para 2 pessoas</h1>
          <p>
            Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com
            pimentões e cebola juliene, temperos e um leve toque de açafrão.
            Servidos na paellera. Rico em sabor e apresentação.
          </p>
        </div>
      </Description>
      <ShowRecipe>Ver receita</ShowRecipe>
    </Container>
  );
};

export default RecipeCard;
