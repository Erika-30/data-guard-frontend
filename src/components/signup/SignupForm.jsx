// import s from "./SignupForm.module.css";
// import Button from "../common/button/Button";
// import useSignup from "../../hooks/useSignup";

// const FormField = ({ type, placeholder, value, setValue, error }) => (
//   <div className={s.formGroup}>
//     <input
//       className={`${s.input} ${error ? s.errorInput : ""}`}
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//     />
//     {error && <p className={s.error}>{error}</p>}
//   </div>
// );

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
//         <FormField
//           type="text"
//           placeholder="Username"
//           value={username}
//           setValue={setUsername}
//           error={errors.username}
//         />
//         <FormField
//           type="email"
//           placeholder="Email"
//           value={email}
//           setValue={setEmail}
//           error={errors.email}
//         />
//         <FormField
//           type="number"
//           placeholder="Age"
//           value={age}
//           setValue={setAge}
//           error={errors.age}
//         />
//         <FormField
//           type="text"
//           placeholder="Role"
//           value={role}
//           setValue={setRole}
//           error={errors.role}
//         />
//         <FormField
//           type="password"
//           placeholder="Password"
//           value={password}
//           setValue={setPassword}
//           error={errors.password}
//         />
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

const FormField = ({ type, placeholder, value, setValue, error }) => (
  <div className={s.formGroup}>
    <input
      className={`${s.input} ${error ? s.errorInput : ""}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    {error && <p className={s.error}>{error}</p>}
  </div>
);

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
        <FormField
          type="text"
          placeholder="Username"
          value={username}
          setValue={setUsername}
          error={errors.username}
        />
        <FormField
          type="email"
          placeholder="Email"
          value={email}
          setValue={setEmail}
          error={errors.email}
        />
        <FormField
          type="number"
          placeholder="Age"
          value={age}
          setValue={setAge}
          error={errors.age}
        />
        <FormField
          type="text"
          placeholder="Role"
          value={role}
          setValue={setRole}
          error={errors.role}
        />
        <FormField
          type="password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
          error={errors.password}
        />
        <Button className={s.button} type="submit">
          Sign Up
        </Button>
      </form>
      {errors.general && <p className={s.error}>{errors.general}</p>}
    </div>
  );
}

export default SignupForm;
