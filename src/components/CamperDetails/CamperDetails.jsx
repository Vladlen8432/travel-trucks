import { NavLink, Outlet, useParams } from "react-router-dom";
import css from "./CamperDetails.module.css";

const CamperDetails = () => {
  const { id } = useParams();

  return (
    <div className={css.containerCamperDetails}>
      <ul>
        <li>
          <NavLink to={`/catalog/${id}/features`}>Features</NavLink>
        </li>
        <li>
          <NavLink to={`/catalog/${id}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default CamperDetails;
