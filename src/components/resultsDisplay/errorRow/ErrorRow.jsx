import { useState } from "react";
import useRetry from "../../../hooks/useRetry";
import s from "./ErrorRow.module.css";

function ErrorRow({ error, handleRetry, index }) {
  const [formData, setFormData] = useState(error);
  const [fieldErrors, setFieldErrors] = useState({});
  const { validate, retryUser, errors: retryErrors } = useRetry();

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleRetryClick = async () => {
    if (validate(formData)) {
      try {
        await retryUser(formData);
        handleRetry(index);
      } catch (error) {
        setFieldErrors({ general: error.message });
      }
    } else {
      setFieldErrors(retryErrors);
    }
  };

  return (
    <div className={s.row}>
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

export default ErrorRow;
