import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.success ? "var(--color-bg-green)" : "var(--color-bg-primary)"};
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  width: 185px;
  height: 45px;
  border: none;

  &:disabled {
    background: gray;
  }
`;

export const ModalButton = styled.button`
  background: #fff;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  width: 180px;
  height: 60px;
  border: 3px solid black;

  &:hover {
    background: lightgray;
  }
`;
