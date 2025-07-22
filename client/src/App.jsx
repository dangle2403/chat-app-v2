import "./index.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./contest/AuthContext";

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <Homepage /> : <Navigate to="/login" />}/>
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/profile" element={authUser ?<Profile /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
