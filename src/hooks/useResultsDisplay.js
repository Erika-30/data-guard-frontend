import { useUploadData } from "../contexts/UploadDataContext";
import ResultsDisplay from "../components/resultsDisplay/ResultsDisplay";

const useResultsDisplay = () => {
  const { data, handleRetry, handleNewFile } = useUploadData();
  return (
    <ResultsDisplay
      data={data}
      onRetry={handleRetry}
      onNewFile={handleNewFile}
    />
  );
};

export default useResultsDisplay;
