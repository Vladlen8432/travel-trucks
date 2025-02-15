import { NavLink } from "react-router-dom";
import css from "./Catalog.module.css";

const Catalog = () => {
  return (
    <div className={css.containerCatalog}>
      <h2>Catalog</h2>
      <NavLink to="/catalog/id">Details</NavLink>
    </div>
  );
};

export default Catalog;
