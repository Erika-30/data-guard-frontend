import { useState } from "react";
import s from "./ErrorRow.module.css";
import PropTypes from "prop-types";

const ErrorRow = ({ error, handleRetry, index }) => {
  const [username, setUsername] = useState(error.username || "");
  const [email, setEmail] = useState(error.email || "");
  const [age, setAge] = useState(error.age || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRetry({
      username,
      email,
      age,
      role: "user",
      password: "password",
    });
  };

  return (
    <div className={s.row}>
      <div className={s.cell}>{index + 1}</div>
      <div className={s.cell}>
        <input
          className={
            error.details.some((d) => d.path === "username") ? s.errorInput : ""
          }
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error.details.some((d) => d.path === "username") && (
          <p className={s.errorMessage}>
            {error.details.find((d) => d.path === "username").message}
          </p>
        )}
      </div>
      <div className={s.cell}>
        <input
          className={
            error.details.some((d) => d.path === "email") ? s.errorInput : ""
          }
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.details.some((d) => d.path === "email") && (
          <p className={s.errorMessage}>
            {error.details.find((d) => d.path === "email").message}
          </p>
        )}
      </div>
      <div className={s.cell}>
        <input
          className={
            error.details.some((d) => d.path === "age") ? s.errorInput : ""
          }
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {error.details.some((d) => d.path === "age") && (
          <p className={s.errorMessage}>
            {error.details.find((d) => d.path === "age").message}
          </p>
        )}
      </div>
      <div className={s.cell}>
        <button onClick={handleSubmit} className={s.retryButton}>
          Retry
        </button>
      </div>
    </div>
  );
};

ErrorRow.propTypes = {
  error: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.string,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        message: PropTypes.string,
      })
    ),
  }),
  handleRetry: PropTypes.func,
  index: PropTypes.number,
};

export default ErrorRow;
