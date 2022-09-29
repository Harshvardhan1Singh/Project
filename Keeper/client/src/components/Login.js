import React, { useState } from "react";
import axios from "axios";

export default function Login({ setIsLogin }) {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErr("");
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/register", {
        username: user.name,
        email: user.email,
        password: user.password,
      });
      setUser({ name: "", email: "", password: "" });
      setErr(res.data.msg);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/login", {
        email: user.email,
        password: user.password,
      });
      setUser({ name: "", email: "", password: "" });
      localStorage.setItem("tokenStore", res.data.token);
      setIsLogin(true);
    } catch (err) {
      err.response.data.msg && setErr(err.response.data.msg);
    }
  };

  const [onLogin, setOnLogin] = useState(false);
  const styleForRegisterComponent = {
    visibility: onLogin ? "visible" : "hidden",
  };

  const styleForLoginComponent = {
    visibility: onLogin ? "hidden" : "visible",
  };

  return (
    <section className="login-page" style={styleForLoginComponent}>
      <div className="login create-note">
        <h2>
          <u>Welcome to Keeper!</u>
        </h2>
        <h2>Login</h2>
        <form onSubmit={loginSubmit}>
          <input
            type="email"
            name="email"
            id="login-email"
            placeholder="Your Email"
            required
            value={user.email}
            onChange={onChangeInput}
          />

          <input
            type="password"
            name="password"
            id="login-password"
            placeholder="Your Password"
            required
            value={user.password}
            autoComplete="true"
            onChange={onChangeInput}
          />

          <button type="submit">Login</button>
          <p>
            <span onClick={() => setOnLogin(true)}> Create Account</span>
          </p>
          <h3>{err}</h3>
        </form>
      </div>
      <div className="register create-note" style={styleForRegisterComponent}>
        <h2>
          <u>Welcome to Keeper!</u>
        </h2>
        <h2>Create Account</h2>
        <form onSubmit={registerSubmit}>
          <input
            type="text"
            name="name"
            id="register-name"
            placeholder="Enter Your Name"
            required
            value={user.name}
            onChange={onChangeInput}
          />

          <input
            type="email"
            name="email"
            id="register-email"
            placeholder="Enter Your Email"
            required
            value={user.email}
            onChange={onChangeInput}
          />

          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="Enter Your Password"
            required
            value={user.password}
            autoComplete="true"
            onChange={onChangeInput}
          />

          <button type="submit">Register</button>
          <p>
            <span onClick={() => setOnLogin(false)}>
              {" "}
              Already have an account? Login
            </span>
          </p>
          <h3>{err}</h3>
        </form>
      </div>
    </section>
  );
}
