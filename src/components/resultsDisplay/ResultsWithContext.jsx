import React from "react";
import ResultsDisplay from "./ResultsDisplay";
import useUploadData from "../../hooks/useUploadData";

const ResultsWithContext = () => {
  const { data, handleRetry, handleNewFile } = useUploadData();

  return (
    <ResultsDisplay
      data={data}
      onRetry={handleRetry}
      handleNewFile={handleNewFile}
    />
  );
};

export default ResultsWithContext;
