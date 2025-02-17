import { useState } from "react";
import CampersList from "../CampersList/CampersList";
import Filter from "../Filter/Filter";
import css from "./Catalog.module.css";

const Catalog = () => {
  const [filters, setFilters] = useState({});

  return (
    <div className={css.containerCatalog}>
      <Filter setFilters={setFilters} />
      <CampersList filters={filters} />
    </div>
  );
};

export default Catalog;
