import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../providers/Auth";

const PrivateRoute = ({ ...rest }) => {
  const { token } = useAuth();

  return token ? <Route {...rest} /> : <Redirect to="/" />;
};

export default PrivateRoute;
