import React from "react";
import s from "./LoginForm.module.css";
import Button from "../common/button/Button";
import useAuth from "../../hooks/useAuth";

function LoginForm() {
  const { username, setUsername, password, setPassword, handleLogin, error } =
    useAuth();

  return (
    <div>
      <div className={s.wrapper}>
        <h1>Data Upload and Validation System with Authentication</h1>
        <div className={s.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outline" onClick={handleLogin}>
            Log in
          </Button>
        </div>
        {error && <p className={s["error-message"]}>{error}</p>}
      </div>
    </div>
  );
}

export default LoginForm;
