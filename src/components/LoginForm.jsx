import { useState } from "react";
import s from "./LoginForm.module.css";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";

const LoginForm = () => {
  const { login, errors = {} } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
      setLocalError("");
    } catch (err) {
      setLocalError(err.toString());
    }
  };

  return (
    <div>
      <div className={s.wrapper}>
        <h1>Data Upload and Validation System with Authentication</h1>
        <form className={s.form} onSubmit={handleLogin}>
          <div className={s.formGroup}>
            <input
              className={`${s.input} ${errors.email ? s.errorInput : ""}`}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p className={s.error}>{errors.email}</p>}
          </div>
          <div className={s.formGroup}>
            <input
              className={`${s.input} ${errors.password ? s.errorInput : ""}`}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p className={s.error}>{errors.password}</p>}
          </div>
          <Button variant="outline" type="submit">
            Log in
          </Button>
        </form>
        {localError && <p className={s["error-message"]}>{localError}</p>}
        {errors.general && (
          <p className={s["error-message"]}>{errors.general}</p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
