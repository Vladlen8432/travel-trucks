import { NavLink, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { LocationIcon } from "../Icons";
import { fetchCamperById } from "../../services/api";
import starImg from "../../assets/images/star.png";
import css from "./CamperDetails.module.css";

const CamperDetails = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    fetchCamperById(id)
      .then((data) => setCamper(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!camper) {
    return <p>Camper not found</p>;
  }

  return (
    <div className={css.containerCamperDetails}>
      <h3 className={css.camperDetailsTitle}>{camper.name}</h3>
      <div className={css.containerReviewsLocation}>
        <div className={css.containerReviews}>
          <img className={css.starImg} src={starImg} alt="star" />
          <p className={css.camperDetailsRating}>
            {camper.rating} (
            {Array.isArray(camper.reviews) ? camper.reviews.length : 0} reviews)
          </p>
        </div>

        <div className={css.containerLocation}>
          <LocationIcon className={css.locationIcon} />
          <p className={css.location}>{camper.location}</p>
        </div>
      </div>

      <h3 className={css.price}>${camper.price.toFixed(2)}</h3>

      {camper.gallery && (
        <ul className={css.galleryList}>
          {camper.gallery.map((image, index) => (
            <li key={index} className={css.galleryListItem}>
              <img
                className={css.galleryImg}
                src={image.thumb}
                alt="img-gallery"
              />
            </li>
          ))}
        </ul>
      )}

      <p className={css.camperDescription}>{camper.description}</p>

      <ul className={css.detailsNavList}>
        <li className={css.detailsNavItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${css.detailsNavLink} ${css.active}`
                : css.detailsNavLink
            }
            to={`/catalog/${id}/features`}
          >
            Features
          </NavLink>
        </li>

        <li className={css.detailsNavItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${css.detailsNavLink} ${css.active}`
                : css.detailsNavLink
            }
            to={`/catalog/${id}/reviews`}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <div className={css.underline}></div>
      <Outlet />
    </div>
  );
};

export default CamperDetails;
