import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Basket from "./pages/Basket";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/basket" element={<Basket/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
