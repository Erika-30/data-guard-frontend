import { Routes, Route } from "react-router-dom";
import App from "./app/App";
import LoginForm from "./login/LoginForm";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/resultDisplay" element={<Upload />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
