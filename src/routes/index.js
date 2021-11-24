import { Switch, Route } from "react-router";
import Login from "../pages/Login";
import Recipes from "../pages/Recipes";

import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/receitas" component={Recipes} />
      </Switch>
    </>
  );
};

export default Routes;
