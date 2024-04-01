import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Basket from "./pages/Basket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToolBar from "./components/ToolBar";
import Navbar from "./components/Navbar";

function App() {
  const url = window.location.href;
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/basket" element={<Basket/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
