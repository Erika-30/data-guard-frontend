import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./LoginForm.module.css";
import Button from "../common/button/Button";

function LoginForm() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Aquí debes implementar la lógica de autenticación.
    // Si el inicio de sesión es exitoso, navega a la página de inicio.
    // Si hay un error, establece el estado de error.
    if (username === "" || password === "") {
      setError("Username and password are required");
    } else {
      navigate("/");
    }
  };

  return (
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
  );
}

export default LoginForm;
