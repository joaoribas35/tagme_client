import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
  background-color: var(--color-bg-ingredients) center;
  border-bottom: 1px solid lightgray;

  h1 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const Ingredient = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;

  button {
    margin-right: 35px;
  }
`;
