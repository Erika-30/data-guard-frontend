import { Routes, Route } from "react-router-dom";
import App from "./app/App";
import LoginForm from "./login/LoginForm";
import UploadForm from "./uploadForm/UploadForm";
import ResultsDisplay from "./resultsDisplay/ResultsDisplay";
import NotFoundPage from "./notFoundPage/NotFoundPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/upload" element={<UploadForm />} />
      <Route path="/result" element={<ResultsDisplay />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
