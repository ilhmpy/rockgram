import { useRoutes } from "react-router-dom";
import { Sign, Profile } from "./pages";

function App() {
  const routing = useRoutes([
    { path: "/", element: <Sign /> },
    { path: "/profile", element: <Profile /> }
  ]);

  return routing;
}

export default App;
