import { useRoutes } from "react-router-dom";
import { Sign } from "./pages";

function App() {
  const routing = useRoutes([
    { path: "/", element: <Sign /> }
  ]);

  return routing;
}

export default App;
