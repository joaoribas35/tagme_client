import styled from "styled-components";
import bg_login from "../../assets/img/img-bg-login.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: url(${bg_login}) no-repeat center center fixed;
  background-color: var(--color-bg-page);

  @media screen and (min-width: 1024px) {
    background-size: initial;
  }
`;

export const Header = styled.div`
  background: #fff;
  width: 345px;
  height: 145px;
  border-radius: 5px;
`;

export const Logo = styled.img`
  width: 180px;
  height: 180px;
  margin: 70px 0;
`;

export const FormWrapper = styled.div`
  width: 235px;
  height: 170px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    width: 235px;
    height: 45px;
    margin-bottom: 18px;
  }

  button {
    width: 240px;
    height: 45px;
    padding: 0;
    border: 0;
    background-color: var(--color-bg-primary);
  }
`;
