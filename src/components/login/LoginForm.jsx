import s from "./LoginForm.module.css";
import Button from "../common/button/Button";
import useAuth from "../../hooks/useAuth";

function LoginForm() {
  const { username, setUsername, password, setPassword, handleLogin, error } =
    useAuth();

  return (
    <div>
      <div className={s.wrapper}>
        <h1>Data Upload and Validation System with Authentication</h1>
        <div className={s.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outline" onClick={handleLogin}>
            Log in
          </Button>
        </div>
        {error && <p className={s["error-message"]}>{error}</p>}
      </div>
    </div>
  );
}

export default LoginForm;

// import s from "./ResultsDisplay.module.css";

// const mockData = {
//   success: [
//     { row: 1, name: "John Doe", email: "john@example.com", age: 30 },
//     { row: 2, name: "Jane Doe", email: "jane@example.com", age: 25 },
//   ],
//   errors: [
//     {
//       row: 3,
//       details: {
//         email: "Invalid email format",
//       },
//     },
//     {
//       row: 4,
//       details: {
//         name: "Name cannot be empty",
//       },
//     },
//   ],
// };

// function ResultsDisplay({ data = mockData, onRetry, onNewFile }) {
//   const { success, errors } = data;

//   const handleRetry = (index, field, newValue) => {
//     onRetry(index, field, newValue);
//   };

//   const handleNewFile = () => {
//     onNewFile();
//   };

//   return (
//     <div className={s.container}>
//       <div className={s.summary}>
//         <p>
//           <span className={s.successCount}>{success.length}</span> registros
//           subidos correctamente.
//         </p>
//         {errors.length > 0 && (
//           <p>
//             <span className={s.errorCount}>{errors.length}</span> registros
//             presentaron errores.
//           </p>
//         )}
//       </div>

//       {errors.length > 0 && (
//         <div className={s.errorDetails}>
//           <h2>Errores Encontrados</h2>
//           {errors.map((error, index) => (
//             <div key={index} className={s.errorItem}>
//               <strong>Fila {error.row}:</strong>
//               {Object.entries(error.details).map(([field, message], idx) => (
//                 <div key={idx} className={s.errorField}>
//                   <label>
//                     {field}: {message}
//                   </label>
//                   <input
//                     defaultValue={error[field]}
//                     onChange={(e) => handleRetry(index, field, e.target.value)}
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}

//       <button onClick={handleNewFile} className={s.newFileButton}>
//         Nuevo Archivo
//       </button>
//     </div>
//   );
// }

// export default ResultsDisplay;
