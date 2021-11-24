import { Route, Redirect } from "react-router-dom";
// import { useAuth } from "../providers/Auth";

const PrivateRoute = ({ ...rest }) => {
  //   const { user } = useAuth();
  //   return user && user.token ? (
  //     <Route {...rest} />
  //   ) : (
  //     <Redirect to="/" />
  //   );
};

export default PrivateRoute;
