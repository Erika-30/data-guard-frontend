import { useRef, useState } from "react";
import s from "./ResultsDisplay.module.css";
import useSignup from "../../hooks/useSignup";

function ErrorRow({ error, handleRetry, index, handleValidationErrors }) {
  const {
    formData,
    errors: fieldErrors,
    updateField,
    validate,
  } = useSignup(error);

  const handleRetryClick = async () => {
    const isValid = validate(formData);
    if (isValid) {
      await handleRetry(index, formData);
    } else {
      handleValidationErrors(index, formData, fieldErrors);
    }
  };

  return (
    <div key={index} className={s.row}>
      <div className={s.cell}>{error.row}</div>
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

function ResultsDisplay({ data, handleFileChange, handleNewFile }) {
  const { success = [], errors: initialErrors = [] } = data || {};
  const [errors, setErrors] = useState(initialErrors);
  const fileInputRef = useRef();

  const handleValidationErrors = (index, formData, fieldErrors) => {
    setErrors((prevErrors) =>
      prevErrors.map((error, i) =>
        i === index ? { ...error, details: fieldErrors } : error
      )
    );
  };

  const handleRetry = async (index, formData) => {
    const { validate } = useSignup();
    const isValid = validate(formData);

    if (!isValid) {
      setErrors((prevErrors) =>
        prevErrors.map((error, i) => (i === index ? formData : error))
      );
      return;
    }

    try {
      const response = await fetch(
        "https://data-guard-1pqh.onrender.com/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Retry failed");
      }

      const data = await response.json();

      if (data.success) {
        setErrors(errors.filter((_, i) => i !== index));
      } else {
        setErrors(errors.map((error, i) => (i === index ? data.error : error)));
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors((prevErrors) =>
        prevErrors.map((error, i) =>
          i === index ? { ...error, retryError: error.message } : error
        )
      );
    }
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Sistema de Carga de Datos</h1>
        <button
          onClick={() => {
            handleNewFile();
            fileInputRef.current.click();
          }}
          className={s.newFileButton}
        >
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

      <input
        type="file"
        ref={fileInputRef}
        className={s.inputFile}
        onChange={handleFileChange}
        accept=".csv"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default ResultsDisplay;
