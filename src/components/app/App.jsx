import { useState } from "react";
import s from "./App.module.css";
import reactLogo from "../../assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={s.root}>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={`${s.logo} ${s.react}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={s.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={s["read-the-docs"]}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
