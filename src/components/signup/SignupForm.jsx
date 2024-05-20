// // src/components/signup/SignupForm.jsx
// import s from "./SignupForm.module.css";
// import Button from "../common/button/Button";
// import useSignup from "../../hooks/useSignup";

// function SignupForm() {
//   const {
//     username,
//     setUsername,
//     email,
//     setEmail,
//     age,
//     setAge,
//     role,
//     setRole,
//     password,
//     setPassword,
//     handleSignup,
//   } = useSignup();

//   return (
//     <div className={s.wrapper}>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignup} className={s.form}>
//         <input
//           className={s.input}
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           className={s.input}
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           className={s.input}
//           type="number"
//           placeholder="Age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//         <input
//           className={s.input}
//           type="text"
//           placeholder="Role"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         />
//         <input
//           className={s.input}
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button className={s.button} type="submit">
//           Sign Up
//         </Button>
//       </form>
//       {/* {signupError && <p className={s.error}>{signupError}</p>} */}
//     </div>
//   );
// }

// export default SignupForm;

// import s from "./SignupForm.module.css";
// import Button from "../common/button/Button";
// import useSignup from "../../hooks/useSignup";

// function SignupForm() {
//   const {
//     username,
//     setUsername,
//     email,
//     setEmail,
//     age,
//     setAge,
//     role,
//     setRole,
//     password,
//     setPassword,
//     handleSignup,
//     errors,
//   } = useSignup();

//   return (
//     <div className={s.wrapper}>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignup} className={s.form}>
//         <input
//           className={`${s.input} ${errors.username ? s.errorInput : ""}`}
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         {errors.username && <p className={s.error}>{errors.username}</p>}
//         <input
//           className={`${s.input} ${errors.email ? s.errorInput : ""}`}
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         {errors.email && <p className={s.error}>{errors.email}</p>}
//         <input
//           className={`${s.input} ${errors.age ? s.errorInput : ""}`}
//           type="number"
//           placeholder="Age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//         {errors.age && <p className={s.error}>{errors.age}</p>}
//         <input
//           className={`${s.input} ${errors.role ? s.errorInput : ""}`}
//           type="text"
//           placeholder="Role"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         />
//         {errors.role && <p className={s.error}>{errors.role}</p>}
//         <input
//           className={`${s.input} ${errors.password ? s.errorInput : ""}`}
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {errors.password && <p className={s.error}>{errors.password}</p>}
//         <Button className={s.button} type="submit">
//           Sign Up
//         </Button>
//       </form>
//       {errors.general && <p className={s.error}>{errors.general}</p>}
//     </div>
//   );
// }

// export default SignupForm;

import s from "./SignupForm.module.css";
import Button from "../common/button/Button";
import useSignup from "../../hooks/useSignup";

function SignupForm() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    age,
    setAge,
    role,
    setRole,
    password,
    setPassword,
    handleSignup,
    errors,
  } = useSignup();

  return (
    <div className={s.wrapper}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} className={s.form}>
        <div className={s.formGroup}>
          <input
            className={`${s.input} ${errors.username ? s.errorInput : ""}`}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className={s.error}>{errors.username}</p>}
        </div>
        <div className={s.formGroup}>
          <input
            className={`${s.input} ${errors.email ? s.errorInput : ""}`}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className={s.error}>{errors.email}</p>}
        </div>
        <div className={s.formGroup}>
          <input
            className={`${s.input} ${errors.age ? s.errorInput : ""}`}
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {errors.age && <p className={s.error}>{errors.age}</p>}
        </div>
        <div className={s.formGroup}>
          <input
            className={`${s.input} ${errors.role ? s.errorInput : ""}`}
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          {errors.role && <p className={s.error}>{errors.role}</p>}
        </div>
        <div className={s.formGroup}>
          <input
            className={`${s.input} ${errors.password ? s.errorInput : ""}`}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className={s.error}>{errors.password}</p>}
        </div>
        <Button className={s.button} type="submit">
          Sign Up
        </Button>
      </form>
      {errors.general && <p className={s.error}>{errors.general}</p>}
    </div>
  );
}

export default SignupForm;
