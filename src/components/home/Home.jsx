import { useNavigate } from "react-router-dom";
import s from "./Home.module.css";
import Button from "../common/button/Button";

function Home() {
  let navigate = useNavigate();

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>
        {" "}
        Data Upload and Validation System with Authentication
      </h1>
      <p className={s.name}>By Judith Huisa</p>
      <div className={s.buttons}>
        <Button variant="outline" onClick={() => navigate("/login")}>
          Go to log in
        </Button>
      </div>
    </div>
  );
}

export default Home;
