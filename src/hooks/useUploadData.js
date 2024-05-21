import { useContext } from "react";
import { UploadDataContext } from "../contexts/UploadDataContext";

const useUploadData = () => {
  const context = useContext(UploadDataContext);
  if (context === undefined) {
    throw new Error("useUploadData must be used within an UploadDataProvider");
  }
  return context;
};

export default useUploadData;
