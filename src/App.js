import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from './pages/CreatePost';
import { signOut } from "firebase/auth"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {auth} from "./firebase-config"

function App() {
  const [isAuth,setIsAuth] =useState(false);


  const signOutUser =() =>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false);
      window.location.pathname="/login"
    })
  }
  return (
    <Router>
      
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createPost">Create Post</Link>
        {!isAuth?<Link to="/login">Login</Link>:<button onClick={signOutUser}>Log Out</button>}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/createPost" element={<CreatePost isAuth={isAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
