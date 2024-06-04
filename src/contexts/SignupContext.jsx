import { createContext, useState, useEffect } from "react";
import SuccessModal from "../components/SuccessModal";

export const SignupContext = createContext();

export function SignupProvider({ children }) {
  const [signupData, setSignupData] = useState(null);
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // obetencion del usuario
    }
  }, []);

  const signup = async (username, email, age, role, password) => {
    try {
      const response = await fetch(
        "https://data-guard-1pqh.onrender.com/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            age,
            role,
            password,
          }),
        }
      );

      if (!response.ok) {
        console.log(response); //
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
      {signupData && <SuccessModal />}
    </SignupContext.Provider>
  );
}
