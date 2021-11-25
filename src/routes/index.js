import { Switch, Route } from "react-router";
import Login from "../pages/Login";
import Recipes from "../pages/Recipes";
import Recipe from "../pages/Recipe";

// import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/receitas" component={Recipes} />
        <Route exact path="/receita" component={Recipe} />
      </Switch>
    </>
  );
};

export default Routes;