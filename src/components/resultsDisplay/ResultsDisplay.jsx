import s from "./ResultsDisplay.module.css";

function ResultsDisplay({ data, onRetry, onNewFile }) {
  if (!data) {
    return <p>Loading...</p>;
  }

  const { success, errors } = data;

  const handleRetry = (index, field, newValue) => {
    onRetry(index, field, newValue);
  };

  const handleNewFile = () => {
    onNewFile();
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Sistema de Carga de Datos</h1>
      </div>
      <div className={s.summary}>
        <p>
          <span className={s.successCount}>{success.length}</span> registros
          subidos correctamente.
        </p>
        {errors.length > 0 && (
          <p>
            <span className={s.errorCount}>{errors.length}</span> registros
            presentaron errores.
          </p>
        )}
      </div>

      {errors.length > 0 && (
        <div className={s.errorDetails}>
          <h2>Errores Encontrados</h2>
          {errors.map((error, index) => (
            <div key={index} className={s.errorItem}>
              <strong>Fila {error.row}:</strong>
              {Object.entries(error.details).map(([field, message], idx) => (
                <div key={idx} className={s.errorField}>
                  <label>
                    {field}: {message}
                  </label>
                  <input
                    defaultValue={error[field]}
                    onChange={(e) => handleRetry(index, field, e.target.value)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      <button onClick={handleNewFile} className={s.newFileButton}>
        Nuevo Archivo
      </button>
    </div>
  );
}

export default ResultsDisplay;
