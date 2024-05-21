import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { UploadDataProvider } from "./contexts/UploadDataContext";
import ErrorBoundary from "./components/errorHandler/ErrorBoundary"; // Importa el ErrorBoundary

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <UploadDataProvider>
        <App />
      </UploadDataProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
