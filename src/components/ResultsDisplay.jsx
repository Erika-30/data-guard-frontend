import { useState, useEffect, useContext } from "react";
import s from "./ResultsDisplay.module.css";
import ErrorRow from "./ErrorRow";
import { UploadDataContext } from "../contexts/UploadDataContext";
import PropTypes from "prop-types";

ResultsDisplay.propTypes = {
  data: PropTypes.shape({
    errors: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.string,
        message: PropTypes.string,
      })
    ),
    success: PropTypes.arrayOf(PropTypes.object),
  }),
};

function ResultsDisplay({ data }) {
  const { handleRetry } = useContext(UploadDataContext);
  const [errors, setErrors] = useState(data?.errors || []);
  const [success, setSuccess] = useState(data?.success || []);

  useEffect(() => {
    setErrors(data?.errors || []);
    setSuccess(data?.success || []);
  }, [data]);

  const handleRetryClick = async (index, newData) => {
    try {
      const result = await handleRetry(index, newData);
      if (result.status) {
        const updatedErrors = [...errors];
        updatedErrors.splice(index, 1);
        setErrors(updatedErrors);
        setSuccess((prev) => [...prev, newData]);
      } else {
        const updatedErrors = [...errors];
        updatedErrors[index] = {
          ...newData,
          details: result.errors,
        };
        setErrors(updatedErrors);
      }
    } catch (error) {
      console.error("Retry error:", error);
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
                error={error || {}}
                handleRetry={(newData) => handleRetryClick(index, newData)}
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
