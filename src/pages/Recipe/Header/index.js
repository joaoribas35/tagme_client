import React from "react";
import arrow from "../../../assets/img/icon-back.png";
import clock from "../../../assets/img/icon-time.png";
import {
  Container,
  HeaderTop,
  HeaderBottom,
  Back,
  PreparationTime,
} from "./styles";

const Header = ({ title, description, prepTime }) => {
  return (
    <Container>
      <HeaderTop>
        <Back to="/receitas">
          <img src={arrow} alt="voltar" /> <p>Voltar</p>
        </Back>
        <PreparationTime>
          <img src={clock} alt="relógio" />
          <div>
            <h1>Tempo de preparo</h1>
            <p> {prepTime} minutos</p>
          </div>
        </PreparationTime>
      </HeaderTop>
      <HeaderBottom>
        <h1>{title}</h1>
        <p>{description}</p>
      </HeaderBottom>
    </Container>
  );
};

export default Header;
