import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 30px;

  h1 {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export const Direction = styled.div`
  display: flex;
  margin-bottom: 50px;

  button {
    margin-right: 35px;
  }

  div {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 5px;
    }

    p {
      font-size: 1rem;
      margin: 0;
    }
  }
`;
