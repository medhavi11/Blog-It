import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Navbar from "./pages/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
function App() {
  //state to tell if user is authenticated or not
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <Navbar isAuth={isAuth} signUserOut={signUserOut} />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        {/* passed it as props to login component */}
        <Route path="/Login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
