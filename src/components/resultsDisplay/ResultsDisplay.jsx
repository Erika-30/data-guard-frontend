import { useNavigate } from "react-router-dom";
import s from "./ResultsDisplay.module.css";
import useSignup from "../../hooks/useSignup";

function ErrorRow({ error, handleRetry, index }) {
  const {
    formData,
    errors: fieldErrors,
    updateField,
    validate,
  } = useSignup(error);

  const handleRetryClick = async () => {
    if (validate(formData)) {
      await handleRetry(index, formData);
    }
  };

  return (
    <div key={index} className={s.row}>
      <div className={s.cell}>{index + 1}</div>
      {["username", "email", "age"].map((field) => (
        <div key={field} className={s.cell}>
          <input
            className={fieldErrors[field] ? s.errorInput : ""}
            defaultValue={formData[field]}
            onChange={(e) => updateField(field, e.target.value)}
          />
          {fieldErrors[field] && (
            <span className={s.errorMessage}>{fieldErrors[field]}</span>
          )}
        </div>
      ))}
      <div className={s.cell}>
        <button className={s.retryButton} onClick={handleRetryClick}>
          Retry
        </button>
      </div>
    </div>
  );
}

function ResultsDisplay({ data, handleRetry }) {
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
                error={error}
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
