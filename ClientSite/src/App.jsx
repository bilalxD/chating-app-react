import "./App.css";
import Home from "./pages/home/home";
import SignUp from "./pages/signup/signUp";
import Login from "./pages/login/login";
import { Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast"
// import { useAuthContext } from "./context/authContext";
function App() {
  // const [authUser] =  useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
