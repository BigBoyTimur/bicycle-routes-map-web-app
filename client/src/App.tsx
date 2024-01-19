import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import Home from "./components/Home.tsx";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";
import axios from "axios";
import { UserContextProvider } from "../context/userConext.tsx";
import Dashboard from "./components/Dashboard.tsx";

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true;

function App() {

    return (
        <UserContextProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </UserContextProvider>
  )
}

export default App
