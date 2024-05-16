import { useState } from "react";

const useSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Aquí puedes agregar la lógica para manejar el envío del formulario.
    // Por ejemplo, podrías validar los datos del formulario, enviar una solicitud HTTP a un servidor, etc.

    // Si ocurre un error, puedes usar setError para mostrar un mensaje de error en el formulario.
  };

  return {
    name,
    setName,
    email,
    setEmail,
    age,
    setAge,
    role,
    setRole,
    password,
    setPassword,
    error,
    setError,
    handleSubmit,
  };
};

export default useSignup;
