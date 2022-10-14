// import logo from './logo.svg';
import './App.css';
import Login from "./pages/auth/login/index"
import Profile from "./pages/dashboard/profile/index"
import Register from "./pages/auth/register/index"
import Pageerror from "./components/page error/index"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Pageerror />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
