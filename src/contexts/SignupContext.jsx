// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { z } from "zod";

// const UserSchema = z.object({
//   username: z
//     .string()
//     .min(1, "El nombre es requerido")
//     .max(30, "El nombre no puede exceder los 30 caracteres")
//     .regex(/^[a-zA-Z ]*$/, "El nombre solo puede contener letras y espacios"),
//   email: z
//     .string()
//     .email("Debe ser un email válido")
//     .max(50, "El email no puede exceder los 50 caracteres"),
//   age: z
//     .string()
//     .refine((value) => /^\d+$/.test(value), {
//       message: "La edad debe ser un número positivo",
//     })
//     .optional()
//     .nullable(),
//   role: z
//     .string()
//     .refine((value) => /^user$|^admin$/.test(value), {
//       message: "Debe ser 'user' o 'admin'",
//     })
//     .default("user"),
//   password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
// });

// const useSignup = (initialValues = {}) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState(initialValues);
//   const [errors, setErrors] = useState({});

//   const validate = (data) => {
//     const result = UserSchema.safeParse(data);
//     if (!result.success) {
//       const errorObj = {};
//       result.error.errors.forEach((error) => {
//         errorObj[error.path[0]] = error.message;
//       });
//       setErrors(errorObj);
//       return false;
//     }
//     setErrors({});
//     return true;
//   };

//   const handleSignup = async (event) => {
//     if (event) event.preventDefault();
//     if (!validate(formData)) return;

//     try {
//       const response = await fetch("https://data-guard-1pqh.onrender.com/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         navigate("/login");
//       } else {
//         const data = await response.json();
//         setErrors({ general: data.message });
//       }
//     } catch (error) {
//       setErrors({ general: "Error during signup" });
//     }
//   };

//   const updateField = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   return {
//     formData,
//     errors,
//     validate,
//     updateField,
//     handleSignup,
//   };
// };

// export default useSignup;
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
