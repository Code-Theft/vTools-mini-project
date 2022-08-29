import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={async () => {
            const isAdmin = await logInWithEmailAndPassword(email, password);
            if (isAdmin) {
              console.log("user admin : logining to admin dashboard");
              navigate("/dashboard");
            }
            else {
              console.log("user not admin : logining to user dashboard");
              navigate("/exedash");
            }
          }}
          style={{
            backgroundColor: "#00bcd4",
            display: "block",

            margin: "0 20px ",

          }}>

          Login
        </button >



      </div>
    </div >
  );
}

export default Login;
