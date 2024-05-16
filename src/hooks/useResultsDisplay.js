// import { useUploadData } from "../contexts/UploadDataContext";
// import ResultsDisplay from "../resultsDisplay/ResultsDisplay";

// const useResultsDisplay = () => {
//   const { data, handleRetry, handleNewFile } = useUploadData();
//   return (
//     <ResultsDisplay
//       data={data}
//       onRetry={handleRetry}
//       onNewFile={handleNewFile}
//     />
//   );
// };

// export default useResultsDisplay;

// src/hooks/useResultsDisplay.js

import { useUploadData } from "../contexts/UploadDataContext";
import ResultsDisplay from "../components/resultsDisplay/ResultsDisplay"; // Asegúrate de que la ruta sea correcta

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
