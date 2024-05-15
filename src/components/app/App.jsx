import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import s from "./App.module.css";
import Home from "../home/Home";
import LoginForm from "../login/LoginForm";
import { AuthProvider } from "../../contexts/AuthContext";
import UploadForm from "../uploadForm/UploadForm";
import { UploadDataProvider } from "../../contexts/UploadDataContext";
import ResultsWithContext from "../resultsDisplay/ResultsWithContext";
import NotFoundPage from "../notFoundPage/NotFoundPage";

function App() {
  return (
    <AuthProvider>
      <UploadDataProvider>
        <Router>
          <div className={s.wrapper}>
            <main className={s.main}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/upload" element={<UploadForm />} />
                <Route path="/result" element={<ResultsWithContext />} />{" "}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </UploadDataProvider>
    </AuthProvider>
  );
}

export default App;
