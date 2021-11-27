import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${(props) => props.image}) center center/cover no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  height: 589px;
  justify-content: space-between;
  padding: 15px 30px;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #fff;
`;

export const Back = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 100px;
  color: #fff;
  align-items: center;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
`;

export const PreparationTime = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 190px;
  height: 70px;
  background-color: #fff;
  color: #000;
  border-radius: 2px;

  h1 {
    font-size: 0.75rem;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const HeaderBottom = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-font-recipe);

  h1 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
  }
`;
