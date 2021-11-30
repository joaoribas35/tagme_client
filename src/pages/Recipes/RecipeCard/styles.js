import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid lightgray;
  margin: 0 auto;
`;

export const Description = styled.div`
  display: flex;
  width: 90%;

  img {
    width: 160px;
    height: 160px;
    margin-right: 15px;
  }

  div {
    display: flex;
    flex-direction: column;

    justify-content: center;

    h1 {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 20px;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const ShowRecipe = styled(Link)`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background-color: var(--color-bg-primary);
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;

  &:hover {
    color: #fff;
  }

  a {
    width: 100%;
  }
`;
