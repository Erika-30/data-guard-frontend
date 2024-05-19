import { BrowserRouter as Router } from "react-router-dom";
import s from "./App.module.css";
import { AuthProvider } from "../../contexts/AuthContext";
import { UploadDataProvider } from "../../contexts/UploadDataContext";
import { SignupProvider } from "../../contexts/SignupContext";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router>
      <AuthProvider>
        <SignupProvider>
          <UploadDataProvider>
            <div className={s.wrapper}>
              <main className={s.main}>
                <AppRoutes />
              </main>
            </div>
          </UploadDataProvider>
        </SignupProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
