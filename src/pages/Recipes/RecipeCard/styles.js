import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgray;
`;

export const Description = styled.div`
  display: flex;

  img {
    width: 160px;
    height: 160px;
    margin-right: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 260px;
    justify-content: center;

    h1 {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 20px;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const ShowRecipe = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background-color: var(--color-bg-primary);
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
`;
