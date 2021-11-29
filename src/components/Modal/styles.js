import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 160px;
`;

export const Content = styled.div`
  width: 500px;
  height: 350px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    margin-top: 55px;
    margin-bottom: -35px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    margin: 55px 35px;
    font-size: 1.2rem;
  }

  button {
    margin: 30px 35px;
  }
`;

export const CloseIcon = styled.div`
  width: 500px;
  text-align: right;
  padding-bottom: 15px;

  img {
    cursor: pointer;
  }
`;
