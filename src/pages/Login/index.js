import logo_coco_bambu from "../../assets/img/logo-coco-bambu.png";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useState } from "react";
import { useHistory } from "react-router";
import { loginUser } from "../../services/server";
import { useAuth } from "../../providers/Auth";
import { toast } from "react-toastify";
import { Container, FormWrapper, Header, Logo, Form } from "./styles";

const Login = () => {
  const history = useHistory();
  const { setToken } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await loginUser({ username, password });

      window.localStorage.setItem("auth", JSON.stringify(response.data));
      setToken(response.data);
      toast.success("Seja bem vindo!");

      history.push("/receitas");
      setLoading(false);
    } catch (err) {
      if (err.response.status === 400) {
        toast.error(err.response.data.error);
      }
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Header />
        <Logo src={logo_coco_bambu} />
        <FormWrapper>
          <Form onSubmit={handleForm}>
            <input
              placeholder="Nome do usuário"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Acessar</button>
          </Form>
        </FormWrapper>
      </Container>
      {loading && <LoadingSpinner />}
    </>
  );
};

export default Login;
