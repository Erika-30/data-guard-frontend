import { createContext, useState, useEffect } from "react";
import SignupSuccessModal from "../components/common/modals/signupSuccessModal/SuccessModal";

export const SignupContext = createContext();

export function SignupProvider({ children }) {
  const [signupData, setSignupData] = useState(null);
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Aquí podrías decodificar el token para obtener el usuario
      // y establecer el usuario.
    }
  }, []);

  const signup = async (username, email, age, role, password) => {
    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          age: age,
          role: role,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const data = await response.json();
      setSignupData(data);
      setSignupSuccess(true);
    } catch (error) {
      console.error("Error:", error);
      setSignupError(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setSignupData(null);
    setSignupSuccess(false);
  };

  const resetSignupState = () => {
    setSignupData(null);
    setSignupSuccess(false);
  };

  return (
    <SignupContext.Provider
      value={{ signupData, signupError, signup, logout, resetSignupState }}
    >
      {!signupSuccess && children}
      {signupData && <SignupSuccessModal />}
    </SignupContext.Provider>
  );
}
