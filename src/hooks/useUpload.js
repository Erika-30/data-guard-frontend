import { useState } from "react";
import { useUploadData } from "../contexts/UploadDataContext";

const useUpload = () => {
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
        handleUpload(data);
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

  return {
    file,
    uploading,
    error,
    successMsg,
    handleFileChange,
    handleSubmit,
  };
};

export default useUpload;
