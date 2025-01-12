import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./screens/NotFound";
import Loading from "./screens/Loading";
import Login from "./screens/Login";
import Chat from "./screens/Chat";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import ChatList from "./screens/ChatList";
import Marketplace from "./screens/Marketplace";
import Location from "./screens/Location";
import Profile from "./screens/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <div>
            {!isAuthPage && <Navbar />}
            <Routes>
                <Route path="/" element={<Loading />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/chatlist" element={<ChatList />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/location" element={<Location />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {!isAuthPage && <Footer />}
        </div>
    );
};