import { Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <div className="main-container position-relative container-fluid vh-100 bg-dark-blue">
            <Navbar />
            <div className="text-white">this is random content</div>

            <Routes></Routes>
        </div>
    );
}

export default App;
