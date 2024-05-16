// src/components/signup/SignupForm.jsx
import { useState } from "react";
import { useSignup } from "../../contexts/SignupContext";
import s from "./SignupForm.module.css";
import Button from "../common/button/Button";

function SignupForm() {
  const { signup, signupError } = useSignup();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    await signup(username, password, email, firstname, lastname);
  };

  return (
    <div className={s.wrapper}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} className={s.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <Button type="submit">Sign Up</Button>
      </form>
      {signupError && <p className={s.error}>{signupError}</p>}
    </div>
  );
}

export default SignupForm;
