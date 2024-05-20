import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();

    setErrors({}); // Clear previous errors

    try {
      const response = await fetch(
        "https://data-guard-1pqh.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/upload");
      } else {
        setErrors({ general: data.message });
      }
    } catch (error) {
      setErrors({ general: error.message });
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    errors,
  };
};

export default useAuth;
