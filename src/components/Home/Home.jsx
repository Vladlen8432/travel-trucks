import { NavLink } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.containerHome}>
      <h1 className={css.mainTitle}>Campers of your dreams</h1>
      <p className={css.mainDescription}>
        You can find everything you want in our catalog
      </p>
      <NavLink className={css.mainButtonLink} to="/catalog">
        View Now
      </NavLink>
    </div>
  );
};

export default Home;
