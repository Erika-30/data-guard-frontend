import { useState } from "react";
import s from "./UploadForm.module.css";
import Button from "../common/button/Button";
import { useUploadData } from "../../contexts/UploadDataContext";

function UploadForm() {
  const { handleUpload } = useUploadData();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError("");
    setSuccessMsg("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setSuccessMsg("File uploaded successfully.");
        setFile(null);
      } else {
        throw new Error(data.message || "Failed to upload file");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

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
