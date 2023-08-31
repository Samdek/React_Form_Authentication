import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Register from "./pages/auth/register/index"
import Login from "./pages/auth/login/index"
import AuthRequired from "./components/AuthRequired"
import Profile from "./pages/dashboard/profile/index"
import Pageerror from "./components/page error/index"
import './App.css';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<AuthRequired />} >
          <Route index element={<Profile />} />
        </Route>
        <Route path="*" element={<Pageerror />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
// // import logo from './logo.svg';
