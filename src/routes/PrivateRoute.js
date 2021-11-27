import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../providers/Auth";

const PrivateRoute = ({ ...rest }) => {
  const { token, setToken } = useAuth();

  console.log("localstore", window.localStorage.getItem("auth"));

  const checkLocalStorage = () => {
    if (window.localStorage.getItem("auth")) {
      setToken(window.localStorage.getItem("auth"));
    }
  };

  useEffect(() => {
    checkLocalStorage();
  }, []);

  console.log("token private", token);

  return token ? <Route {...rest} /> : <Redirect to="/" />;
};

export default PrivateRoute;
