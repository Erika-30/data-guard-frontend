import s from "./UploadForm.module.css";
import Button from "./Button";
import useUpload from "../hooks/useUpload";

function UploadForm() {
  const { uploading, error, successMsg, handleFileChange, handleSubmit } =
    useUpload();

  return (
    <div className={s.wrapper}>
      <h2>Selecciona un archivo de carga!</h2>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="file"
          className={s.inputFile}
          onChange={handleFileChange}
          disabled={uploading}
          accept=".csv"
        />
        <Button type="submit" className={s.button} disabled={uploading}>
          {uploading ? "Uploading..." : "Upload File"}
        </Button>
      </form>
      {error && <p className={s.error}>{error}</p>}
      {successMsg && <p className={s.success}>{successMsg}</p>}
    </div>
  );
}

export default UploadForm;
