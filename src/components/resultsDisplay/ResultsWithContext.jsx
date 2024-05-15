import { useUploadData } from "../../contexts/UploadDataContext";
import ResultsDisplay from "./ResultsDisplay";

const ResultsWithContext = () => {
  const { data, handleRetry, handleNewFile } = useUploadData();

  return (
    <ResultsDisplay
      data={data}
      onRetry={handleRetry}
      onNewFile={handleNewFile}
    />
  );
};

export default ResultsWithContext;
