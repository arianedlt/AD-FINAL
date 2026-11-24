
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Please enter your username and password.");
      return;
    }

    if (
      formData.username === "admin" &&
      formData.password === "12345"
    ) {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          <div className="logo-icon">K</div>
          <h1>KitaWise</h1>
          <p>Smart Business Management</p>
        </div>

        <div className="login-heading">
          <h2>Welcome Back!</h2>
          <p>Sign in to continue to your account.</p>
        </div>

        <form onSubmit={handleLogin}>

          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          {error && (
            <p className="login-error">{error}</p>
          )}

          <button type="submit" className="login-submit">
            Log In
          </button>

        </form>

        <div className="login-footer">
          <p>
            Don't have an account?
            {" "}
            <Link to="/register">Register here</Link>
          </p>
        </div>

      </div>

    </div>
  );
}

export default Login;