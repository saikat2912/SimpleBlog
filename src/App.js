import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from './pages/CreatePost';
import ContactUs from './pages/ContactUs';
import writeBlog from './pages/writeBlog';
import searchBlogger from './pages/searchBlogger';
import { signOut } from "firebase/auth"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavBar from './components/NavBar';
import {auth} from "./firebase-config"
import BlogsPage from './pages/BlogsPage';

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
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavBar isAuth={isAuth} signOutUser={signOutUser}/>
          
        </Container>
      </Navbar>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/createPost" element={<CreatePost isAuth={isAuth}/>}/>
        <Route path="/contactUs" element={<ContactUs isAuth={isAuth}/>}/>
        <Route path="/writeABlog" element={<writeBlog isAuth={isAuth}/>}/>
        <Route path="/searchBlogger" element={<searchBlogger isAuth={isAuth}/>}/>
        <Route path="/blogs" element={<BlogsPage isAuth={isAuth}/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
