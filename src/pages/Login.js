import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      //to save my loggedin state even after tab close or window close
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="Login-page">
      <p>Sign in with Google to continue</p>
      <button className="Login-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}
