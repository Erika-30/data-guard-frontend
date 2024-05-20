import { useNavigate } from "react-router-dom";

import s from "./ResultsDisplay.module.css";

function ResultsDisplay({ data, onRetry }) {
  const { success = [], errors = [] } = data || {};
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Sistema de Carga de Datos</h1>
        <button onClick={() => navigate("/upload")} className={s.newFileButton}>
          Nuevo Archivo
        </button>
      </div>
      <div className={s.summary}>
        <div className={s.successBox}>
          <span>✔ {success.length} records uploaded successfully</span>
        </div>
        <p className={s.errorText}>
          The {errors.length} records listed below encountered errors. Please
          rectify these issues and retry.
        </p>
      </div>

      {errors.length > 0 && (
        <div className={s.errorDetails}>
          <h2>Errores Encontrados</h2>
          <div className={s.table}>
            <div className={s.row}>
              <div className={s.cell}>Row</div>
              <div className={s.cell}>Username</div>
              <div className={s.cell}>Email</div>
              <div className={s.cell}>Age</div>
            </div>
            {errors.map((error, index) => (
              <div key={index} className={s.row}>
                <div className={s.cell}>{error.row}</div>
                {["username", "email", "age"].map((field) => (
                  <div key={field} className={s.cell}>
                    <input
                      className={
                        error.details.find((err) => err.path === field)
                          ? s.errorInput
                          : ""
                      }
                      defaultValue={error[field]}
                      onChange={(e) => onRetry(index, field, e.target.value)}
                    />
                    {error.details.find((err) => err.path === field) && (
                      <span className={s.errorMessage}>
                        {
                          error.details.find((err) => err.path === field)
                            .message
                        }
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultsDisplay;
