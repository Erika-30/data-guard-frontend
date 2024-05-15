import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  const navigate = useNavigate();
  const { login, error } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login(username, password);
    navigate("/");
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    error,
  };
};

export default useAuth;
