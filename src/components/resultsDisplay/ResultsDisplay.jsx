import { useState } from "react";
import s from "./ResultsDisplay.module.css";
import useRetry from "../../hooks/useRetry";
import ErrorRow from "./errorRow";

function ResultsDisplay({ data }) {
  const [errors, setErrors] = useState(data.errors || []);
  const { successCount } = useRetry;

  const handleRetry = (index) => {
    setErrors((prevErrors) => prevErrors.filter((_, i) => i !== index));
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Sistema de Carga de Datos</h1>
        <button
          onClick={() => window.location.reload()}
          className={s.newFileButton}
        >
          Nuevo Archivo
        </button>
      </div>
      <div className={s.summary}>
        <div className={s.successBox}>
          <span>✔ {successCount} records uploaded successfully</span>
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
            <div className={`${s.row} ${s.headerRow}`}>
              <div className={s.cell}>Row</div>
              <div className={s.cell}>Username</div>
              <div className={s.cell}>Email</div>
              <div className={s.cell}>Age</div>
              <div className={s.cell}></div>
            </div>
            {errors.map((error, index) => (
              <ErrorRow
                key={index}
                error={error || {}}
                handleRetry={handleRetry}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultsDisplay;
