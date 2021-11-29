import { Switch, Route } from "react-router";
import Login from "../pages/Login";
import Recipes from "../pages/Recipes";
import Recipe from "../pages/Recipe";
import Orders from "../pages/Orders";

import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/receitas" component={Recipes} />
        <PrivateRoute exact path="/receitas/:id" component={Recipe} />
        <PrivateRoute exact path="/pedidos" component={Orders} />
      </Switch>
    </>
  );
};

export default Routes;
