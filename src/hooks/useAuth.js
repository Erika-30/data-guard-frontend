// src/hooks/useAuth.js

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const useAuth = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3000/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }), // Asegúrate de enviar email y password
//       });

//       if (response.ok) {
//         const data = await response.json();

//         // Aquí deberías manejar la respuesta del servidor, por ejemplo, guardar el token de autenticación
//         localStorage.setItem("token", data.token);
//         // Aquí podrías decodificar el token para obtener el usuario
//         // y establecer el usuario.
//         navigate("/upload");
//       } else {
//         const data0 = await response.json();
//         console.error(data0);
//         setError(data0.message);
//         navigate("/login");
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleLogin,
//     error,
//   };
// };

// export default useAuth;

// import { useContext, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";

// const useAuth = () => {
//   const { login } = useContext(AuthContext);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       await login(username, password);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return {
//     username,
//     setUsername,
//     password,
//     setPassword,
//     handleLogin,
//     error,
//   };
// };

// export default useAuth;

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
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Asegúrate de enviar email y password
      });

      const data = await response.json();

      if (response.ok) {
        // Aquí deberías manejar la respuesta del servidor, por ejemplo, guardar el token de autenticación
        localStorage.setItem("token", data.token);
        // Aquí podrías decodificar el token para obtener el usuario
        // y establecer el usuario.
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
