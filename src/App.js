import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";
import UserHome from "./components/userHome/UserHome";
import CreatePost from "./components/createPost/CreatePost";

function App() {

  const [loggedIn,updateLogin] = useState(false)
  const [userProp,updateUser] = useState({})

  const  updateToLogedIn = () => {
    updateLogin(pre => true)
  }

  return (
    <Router>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={loggedIn?<UserHome userProp/>:<Home />} />
          <Route path="/login" element={<Login onLoginSuccess={updateToLogedIn}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
