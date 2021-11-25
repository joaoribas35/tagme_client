import { TimerProvider } from "./Timer";
import { RecipesProvider } from "./Recipes";

const Providers = ({ children }) => {
  return (
    <TimerProvider>
      <RecipesProvider>{children}</RecipesProvider>
    </TimerProvider>
  );
};

export default Providers;
