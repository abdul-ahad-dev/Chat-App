import NotFound from "./screens/NotFound";
import Loading from "./screens/Loading";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    { path: "*", element: <NotFound/>, },
    { path: "/", element: <Loading/>, },
    { path: "/home", element: <Home/>, },
    { path: "/login", element: <Login/>, },
    { path: "/signup", element: <Signup/>, },
  ]);

  return <RouterProvider router={router} />
}