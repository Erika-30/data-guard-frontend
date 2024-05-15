import s from "./ResultsDisplay.module.css";

function ResultsDisplay() {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Sistema de Carga de Datos</h1>
      </div>
      <div className={s.summary}>
        <p>
          <span className={s.successCount}></span> registros subidos
          correctamente.
        </p>

        <p>
          <span className={s.errorCount}></span> registros presentaron errores.
        </p>
      </div>
      <div className={s.errorDetails}>
        <h2>Errores Encontrados</h2>
        () => (
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
