import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import axios from "axios";
import { UserContextProvider } from "./context/userConext.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Map from "./components/MapComponent/MapComponent.jsx";
import MapComponnent from "./components/MapComponent/MapComponent.jsx";
import {useState} from "react";
import Modal from "./components/Modall/Modal.jsx";
import Saved from "./components/Saved/Saved.jsx";
import Info from "./components/Info.jsx";

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true;

function App() {
    const [modalActive, setModalActive] = useState(false)
    const [modalId, setModalId] = useState(0)
    const [modalName, setModalName] = useState('')

    return (
        <UserContextProvider>
            <Navbar />
            <Modal active={modalActive} setActive={setModalActive} pathId={modalId} pathName={modalName}/>
            <Routes>
                <Route path="/" element={<Info />} />
                <Route path="/map"  element={<MapComponnent modal={modalActive} setModal={setModalActive} setPathId={setModalId} setPathName={setModalName} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/saved" element={<Saved />} />
            </Routes>
        </UserContextProvider>
  )
}

export default App
