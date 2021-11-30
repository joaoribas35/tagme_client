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
  display: flex;
  align-items: center;
  background: #fff;
  width: 345px;
  height: 145px;
  border-radius: 5px;

  p {
    font-style: italic;
    font-size: 1rem;
    width: 60%;
    margin: 0 20px;
  }
`;

export const NewOrders = styled.div`
  width: 40%;
  color: var(--color-bg-primary);
  text-align: center;
  border-right: 1px solid lightgray;
  margin: 10px;

  h1 {
    font-size: 5rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    width: 100%;
    text-align: center;
    margin: 0;
    font-style: normal;
  }
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
    padding-left: 15px;
    font-style: italic;
  }

  button {
    width: 240px;
    height: 45px;
    padding: 0;
    border: 0;
    background-color: var(--color-bg-primary);
  }
`;
