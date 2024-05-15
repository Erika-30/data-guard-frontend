import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import s from "./App.module.css";
import Home from "../home/Home";
import LoginForm from "../login/LoginForm";
import { AuthProvider } from "../../contexts/AuthContext";
import UploadForm from "../uploadForm/UploadForm";

function App() {
  return (
    <Router>
      <div className={s.wrapper}>
        <main className={s.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <AuthProvider>
                  <LoginForm />
                </AuthProvider>
              }
            />
            <Route path="/upload" element={<UploadForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
