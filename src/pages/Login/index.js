import logo_coco_bambu from "../../assets/img/logo-coco-bambu.png";
import { Container, FormWrapper, Header, Logo, Form } from "./styles";

const Login = () => {
  return (
    <Container>
      <Header />
      <Logo src={logo_coco_bambu} />
      <FormWrapper>
        <Form>
          <input placeholder="Nome do usuário" />
          <input placeholder="Senha" />
          <button>Acessar</button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
