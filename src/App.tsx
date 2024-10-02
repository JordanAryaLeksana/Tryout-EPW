import React from "react"
import { useRoutes } from "react-router-dom"
import Home from "./pages/Home";
import NotFound from "./NotFound";

const App:React.FC = () => {
  const routes = useRoutes([
    {path:'/', element:<Home/>},
    {path:'*', element:<NotFound/>},
  ]);

  return routes
}

export default App
