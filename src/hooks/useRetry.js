import { useState } from "react";
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

const useRetry = () => {
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const result = UserSchema.safeParse(data);
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

  const retryUser = async (data) => {
    try {
      const response = await fetch(
        "https://data-guard-1pqh.onrender.com/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        setErrors({});
      } else {
        const backendErrors = responseData.errors.reduce((acc, error) => {
          acc[error.field] = error.message;
          return acc;
        }, {});
        setErrors(backendErrors);
      }
    } catch (error) {
      setErrors((prev) => ({ ...prev, general: error.message }));
    }
  };

  return { validate, retryUser, errors };
};

export default useRetry;
