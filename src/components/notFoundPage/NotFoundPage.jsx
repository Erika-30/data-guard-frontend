import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <h1>Error</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        Click here to go back to the <Link to="/">homepage</Link>.
      </p>
    </div>
  );
};

export default NotFoundPage;
