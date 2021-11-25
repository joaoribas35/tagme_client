import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: var(--height-topbar);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  color: var(--color-font);
  font-size: 1rem;
  font-weight: bold;
  margin: 30px 15px 0 15px;
  width: 95%;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgray;
`;
