import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUploadData from "../hooks/useUploadData"; // Importa desde el archivo correcto
import { useAuth } from "../contexts/AuthContext";

const useUpload = () => {
  const { currentUser } = useAuth();
  const { handleUpload } = useUploadData();
  const navigate = useNavigate();
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
      console.log("Uploading file...");
      const response = await fetch(
        "https://data-guard-1pqh.onrender.com/user/upload",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
          body: formData,
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("File uploaded successfully:", data);
        setSuccessMsg("File uploaded successfully.");
        handleUpload(data.data);
        setFile(null);
        navigate("/result");
      } else {
        throw new Error(data.message || "Failed to upload file");
      }
    } catch (err) {
      console.error("Upload error:", err);
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
