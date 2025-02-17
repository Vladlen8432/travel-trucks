import CampersList from "../CampersList/CampersList";
import Filter from "../Filter/Filter";
import css from "./Catalog.module.css";

const Catalog = () => {
  return (
    <div className={css.containerCatalog}>
      <Filter />
      <CampersList />
    </div>
  );
};

export default Catalog;
