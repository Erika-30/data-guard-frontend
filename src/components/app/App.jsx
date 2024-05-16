import { BrowserRouter as Router } from "react-router-dom";
import s from "./App.module.css";
import { AuthProvider } from "../../contexts/AuthContext";
import { UploadDataProvider } from "../../contexts/UploadDataContext";
import { SignupProvider } from "../../contexts/SignupContext";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <AuthProvider>
      <SignupProvider>
        <UploadDataProvider>
          <Router>
            <div className={s.wrapper}>
              <main className={s.main}>
                <AppRoutes />
              </main>
            </div>
          </Router>
        </UploadDataProvider>
      </SignupProvider>
    </AuthProvider>
  );
}

export default App;
