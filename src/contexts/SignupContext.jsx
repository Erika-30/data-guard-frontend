// src/contexts/SignupContext.jsx
import { createContext, useState, useContext } from "react";

const SignupContext = createContext();

export const useSignup = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState(null);
  const [signupError, setSignupError] = useState("");

  const signup = async (username, password, email, firstname, lastname) => {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email,
          firstname,
          lastname,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSignupData(data);
        setSignupError("");
      } else {
        const error = await response.json();
        setSignupError(error.message);
      }
    } catch (err) {
      setSignupError(err.message || "Network error");
    }
  };

  return (
    <SignupContext.Provider value={{ signupData, signupError, signup }}>
      {children}
    </SignupContext.Provider>
  );
};
