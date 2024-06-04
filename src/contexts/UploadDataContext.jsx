import { createContext, useState } from "react";

export const UploadDataContext = createContext();

export const UploadDataProvider = ({ children }) => {
  const [data, setData] = useState({ success: [], errors: [] });

  const handleUpload = (uploadedData) => {
    setData(uploadedData || { success: [], errors: [] });
  };

  const handleRetry = async (index, newData) => {
    try {
      const response = await fetch(
        "https://data-guard-1pqh.onrender.com/user/retry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newData),
        }
      );
      const result = await response.json();

      if (response.ok) {
        setData((prevData) => {
          const newErrors = [...prevData.errors];
          newErrors.splice(index, 1);
          const newSuccess = [...prevData.success, newData];
          return { success: newSuccess, errors: newErrors };
        });
      } else {
        return result;
      }
    } catch (error) {
      console.error("Retry error:", error);
      throw error;
    }
  };

  const handleNewFile = () => {
    setData({ success: [], errors: [] });
  };

  return (
    <UploadDataContext.Provider
      value={{ data, handleUpload, handleRetry, handleNewFile }}
    >
      {children}
    </UploadDataContext.Provider>
  );
};

export default UploadDataProvider;
