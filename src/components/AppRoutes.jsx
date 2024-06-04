import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import UploadForm from "./UploadForm";
import ResultsDisplay from "./ResultsDisplay";
import NotFoundPage from "./NotFoundPage";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/signup" element={<SignupForm />} />
    <Route
      path="/upload"
      element={
        <PrivateRoute>
          <UploadForm />
        </PrivateRoute>
      }
    />
    <Route
      path="/result"
      element={
        <PrivateRoute>
          <ResultsDisplay />
        </PrivateRoute>
      }
    />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
