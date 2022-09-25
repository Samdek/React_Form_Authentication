// import logo from './logo.svg';
import './App.css';
import Login from "./Login"
import Register from "./Register"
import Pageerror from "./Pageerror"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Pageerror />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
