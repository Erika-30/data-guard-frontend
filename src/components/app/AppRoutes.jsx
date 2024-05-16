import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import LoginForm from "../login/LoginForm";
import SignupForm from "../signup/SignupForm";
import UploadForm from "../uploadForm/UploadForm";
import ResultsWithContext from "../resultsDisplay/ResultsWithContext";
import NotFoundPage from "../notFoundPage/NotFoundPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/signup" element={<SignupForm />} />
    <Route path="/upload" element={<UploadForm />} />
    <Route path="/result" element={<ResultsWithContext />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
