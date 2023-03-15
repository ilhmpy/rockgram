import { useRoutes } from "react-router-dom";
import { Navigation } from "./components";
import { Sign, Profile } from "./pages";

function App() {
  const routing = useRoutes([
    { path: "/", element: <Sign /> },
    { 
      path: "/profile", 
      element: (
        <Navigation>
          <Profile />
        </Navigation>
      ) 
    }
  ]);

  return routing;
}

export default App;
