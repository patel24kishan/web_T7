import './App.css';
import Loginpage from './Loginpage';
import Userlist from "./ListOfUser";
import UserProfile from "./ProfilePage";
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/userlist" element={<Userlist />} />
      <Route path="/user/:id" element={<UserProfile />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
