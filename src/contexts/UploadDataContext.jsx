// import { createContext, useState, useContext } from "react";

// const UploadDataContext = createContext();

// export const useUploadData = () => useContext(UploadDataContext);

// export const UploadDataProvider = ({ children }) => {
//   const [data, setData] = useState({ success: [], errors: [] });

//   const handleUpload = (uploadedData) => {
//     setData(uploadedData || { success: [], errors: [] });
//   };

//   const handleRetry = (index, field) => {
//     const newData = {
//       ...data,
//       errors: data.errors.filter((error, idx) => idx !== index),
//     };
//     setData(newData);
//   };

//   const handleNewFile = () => {
//     setData({ success: [], errors: [] });
//   };

//   return (
//     <UploadDataContext.Provider
//       value={{ data, handleUpload, handleRetry, handleNewFile }}
//     >
//       {children}
//     </UploadDataContext.Provider>
//   );
// };

import React, { createContext, useState, useContext } from "react";

const UploadDataContext = createContext();

export const useUploadData = () => useContext(UploadDataContext);

export const UploadDataProvider = ({ children }) => {
  const [data, setData] = useState({ success: [], errors: [] });

  const handleUpload = (uploadedData) => {
    setData(uploadedData || { success: [], errors: [] });
  };

  const handleRetry = (index, field, newValue) => {
    const newErrors = data.errors.map((error, idx) => {
      if (idx === index) {
        return {
          ...error,
          [field]: newValue,
        };
      }
      return error;
    });
    setData({ ...data, errors: newErrors });
    // Optionally, send the updated data to the backend
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
