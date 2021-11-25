import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: var(--height-topbar);
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-bg-topbar);
  align-items: center;
  padding: 0 15px;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;

  input {
    width: 320px;
    margin-right: 15px;
  }
`;

export const Icons = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  cursor: pointer;
  margin: 0 10px;
  width: 40px;
  text-decoration: none;

  svg {
    font-size: 30px;
  }

  p {
    margin-top: 5px;
    font-size: 0.8rem;
  }

  &:hover {
    color: var(--color-bg-primary);
  }
`;
