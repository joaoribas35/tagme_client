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

export const ButtonError = styled(Button)`
  background: ${(props) => (props.secondary ? "white" : "var(--color-error)")};
  color: ${(props) => (props.secondary ? "var(--color-error)" : "white")};
  border: 2px solid var(--color-error);
`;
