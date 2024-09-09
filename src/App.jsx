import NotFound from "./screens/NotFound";
import Loading from "./screens/Loading";
import Login from "./screens/Login";
import Chat from "./screens/Chat";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import ChatList from "./screens/ChatList";
import Marketplace from "./screens/Marketplace";
import Location from "./screens/Location";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    { path: "*", element: <NotFound/>, },
    { path: "/", element: <Loading/>, },
    { path: "/home", element: <Home/>, },
    { path: "/chat", element: <Chat/>, },
    { path: "/login", element: <Login/>, },
    { path: "/signup", element: <Signup/>, },
    { path: "/chatlist", element: <ChatList/>, },
    { path: "/marketplace", element: <Marketplace/>, },
    { path: "/location", element: <Location/>, },
    
  ]);

  return <RouterProvider router={router} />
}