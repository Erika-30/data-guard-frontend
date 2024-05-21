import React, { useState } from "react";
import s from "./ResultsDisplay.module.css";
import useSignup from "../../hooks/useSignup";

function ErrorRow({ error, handleRetry, index }) {
  const [formData, setFormData] = useState(error);
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = (data) => {
    const errors = {};
    if (!data.username) errors.username = "Username is required";
    if (!data.email) errors.email = "Email is required";
    if (!data.age) errors.age = "Age is required";
    return errors;
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleRetryClick = async () => {
    const errors = validate(formData);
    if (Object.keys(errors).length === 0) {
      await handleRetry(index, formData);
    } else {
      setFieldErrors(errors);
    }
  };

  return (
    <div key={index} className={s.row}>
      <div className={s.cell}>{error?.row || index + 1}</div>
      {["username", "email", "age"].map((field) => (
        <div key={field} className={s.cell}>
          <input
            className={fieldErrors[field] ? s.errorInput : ""}
            value={formData[field] || ""}
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

function ResultsDisplay({ data, onRetry }) {
  const [errors, setErrors] = useState(data.errors || []);

  const handleRetry = async (index, formData) => {
    const updatedErrors = [...errors];
    try {
      await onRetry(index, formData);
      updatedErrors.splice(index, 1);
      setErrors(updatedErrors);
    } catch (e) {
      updatedErrors[index] = { ...updatedErrors[index], ...formData };
      setErrors(updatedErrors);
    }
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
          <span>✔ {data.success.length} records uploaded successfully</span>
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
