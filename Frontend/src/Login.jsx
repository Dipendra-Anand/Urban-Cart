import React, { useState } from "react";
import "./Login.css";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const Navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email, Password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful!");
        localStorage.setItem("user", JSON.stringify(data.user)); 
        Navigate("/home");
      } else {
        alert(data.message || "Login Failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="signup-link">
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
