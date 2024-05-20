// // src/components/app/AppRoutes.jsx

// import { Routes, Route } from "react-router-dom";
// import Home from "../home/Home";
// import LoginForm from "../login/LoginForm";
// import SignupForm from "../signup/SignupForm";
// import UploadForm from "../uploadForm/UploadForm";
// import ResultsWithContext from "../resultsDisplay/ResultsWithContext";
// import NotFoundPage from "../notFoundPage/NotFoundPage";
// import PrivateRoute from "./PrivateRoute";

// const AppRoutes = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/login" element={<LoginForm />} />
//     <Route path="/signup" element={<SignupForm />} />
//     <Route
//       path="/upload"
//       element={
//         <PrivateRoute>
//           <UploadForm />
//         </PrivateRoute>
//       }
//     />
//     <Route
//       path="/result"
//       element={
//         <PrivateRoute>
//           <ResultsWithContext />
//         </PrivateRoute>
//       }
//     />
//     <Route path="*" element={<NotFoundPage />} />
//   </Routes>
// );

// export default AppRoutes;

// import { Routes, Route } from "react-router-dom";
// import Home from "../home/Home";
// import LoginForm from "../login/LoginForm";
// import SignupForm from "../signup/SignupForm";
// import UploadForm from "../uploadForm/UploadForm";
// import ResultsWithContext from "../resultsDisplay/ResultsWithContext";
// import NotFoundPage from "../notFoundPage/NotFoundPage";
// import PrivateRoute from "./PrivateRoute";

// const AppRoutes = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/login" element={<LoginForm />} />
//     <Route path="/signup" element={<SignupForm />} />
//     <Route
//       path="/upload"
//       element={
//         <PrivateRoute>
//           <UploadForm />
//         </PrivateRoute>
//       }
//     />
//     <Route
//       path="/result"
//       element={
//         <PrivateRoute>
//           <ResultsWithContext />
//         </PrivateRoute>
//       }
//     />
//     <Route path="*" element={<NotFoundPage />} />
//   </Routes>
// );

// export default AppRoutes;

// src/components/app/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import LoginForm from "../login/LoginForm";
import SignupForm from "../signup/SignupForm";
import UploadForm from "../uploadForm/UploadForm";
import ResultsWithContext from "../resultsDisplay/ResultsWithContext";
import NotFoundPage from "../notFoundPage/NotFoundPage";
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
          <ResultsWithContext />
        </PrivateRoute>
      }
    />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
