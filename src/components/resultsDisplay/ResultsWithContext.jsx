import { useUploadData } from "../../contexts/UploadDataContext";
import ResultsDisplay from "./ResultsDisplay";
import useUpload from "../../hooks/useUpload";

const ResultsWithContext = () => {
  const { data, handleRetry, handleNewFile } = useUploadData();
  const { handleFileChange } = useUpload();

  return (
    <ResultsDisplay
      data={data}
      onRetry={handleRetry}
      handleFileChange={handleFileChange}
      handleNewFile={handleNewFile} // Pasar handleNewFile como prop
    />
  );
};

export default ResultsWithContext;
