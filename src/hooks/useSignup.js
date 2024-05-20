import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const UserSchema = z.object({
  username: z
    .string()
    .min(1, "El nombre es requerido")
    .max(30, "El nombre no puede exceder los 30 caracteres")
    .regex(/^[a-zA-Z ]*$/, "El nombre solo puede contener letras y espacios"),
  email: z
    .string()
    .email("Debe ser un email válido")
    .max(50, "El email no puede exceder los 50 caracteres"),
  age: z
    .string()
    .refine((value) => /^\d+$/.test(value), {
      message: "La edad debe ser un número positivo",
    })
    .optional()
    .nullable(),
  role: z
    .string()
    .refine((value) => /^user$|^admin$/.test(value), {
      message: "Debe ser 'user' o 'admin'",
    })
    .default("user"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});

const useSignup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const result = UserSchema.safeParse({
      username,
      email,
      age,
      role,
      password,
    });
    if (!result.success) {
      const errorObj = {};
      result.error.errors.forEach((error) => {
        errorObj[error.path[0]] = error.message;
      });
      setErrors(errorObj);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, age, role, password }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const data = await response.json();
        setErrors({ general: data.message });
      }
    } catch (error) {
      setErrors({ general: "Error during signup" });
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    age,
    setAge,
    role,
    setRole,
    password,
    setPassword,
    handleSignup,
    errors,
  };
};

export default useSignup;
