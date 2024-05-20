import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setCurrentUser({ token });
    }
  }, []);

  const login = async (email, password) => {
    try {
      console.log("Logging in...");
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
        setCurrentUser({ token: data.token });
        localStorage.setItem("token", data.token);
        navigate("/upload");
      } else {
        setError(data.message);
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
      throw error;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
    //navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
