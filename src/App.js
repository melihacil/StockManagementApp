import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Basket from "./pages/Basket";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ToolBar from "./components/ToolBar";
import Navbar from "./components/Navbar";
import AdminProductBoard from "./pages/AdminProductBoard";


function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/basket" element={<Basket/>} />
        <Route path="/reports" element={<AdminProductBoard/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
