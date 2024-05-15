import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./LoginForm.module.css";
import Button from "../common/button/Button";
import { AuthContext } from "../../contexts/AuthContext";

function LoginForm() {
  let navigate = useNavigate();
  const { login, error } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login(username, password);
    navigate("/");
  };

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
