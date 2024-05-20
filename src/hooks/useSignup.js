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

const useSignup = (initialValues = {}) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [validationErrors, setValidationErrors] = useState({});

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
  const handleValidationErrors = (index, formData, fieldErrors) => {
    setValidationErrors((prevErrors) =>
      prevErrors.map((error, i) =>
        i === index ? { ...error, details: fieldErrors } : error
      )
    );
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    formData,
    errors,
    updateField,
    validate,
    handleValidationErrors,
    validationErrors,
  };
};

export default useSignup;
