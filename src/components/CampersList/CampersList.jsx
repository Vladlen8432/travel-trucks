import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { HeartIcon, LocationIcon } from "../Icons";
import { fetchCampers } from "../../services/api";
import star from "../../assets/images/star.png";
import css from "./CampersList.module.css";

const CampersList = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCampers, setVisibleCampers] = useState(4);

  useEffect(() => {
    fetchCampers()
      .then((data) => {
        if (Array.isArray(data)) {
          setCampers(data);
        } else if (Array.isArray(data?.items)) {
          setCampers(data.items);
        } else {
          console.error("Unexpected API response format:", data);
          setCampers([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching campers:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleLoadMore = () => {
    setVisibleCampers((prevVisibleCampers) => prevVisibleCampers + 4);
  };

  return (
    <div className={css.containerCampers}>
      <ul className={css.campersList}>
        {campers
          .slice(0, visibleCampers)
          .map(
            ({ id, name, price, rating, location, description, gallery }) => (
              <li key={id} className={css.campersListItem}>
                <img
                  className={css.campersImg}
                  src={gallery?.[0]?.thumb || ""}
                  alt={name}
                />

                <div className={css.camperInfo}>
                  <div className={css.containerCamperTitle}>
                    <h3 className={css.camperTitle}>{name}</h3>
                    <div className={css.containerCamperPrice}>
                      <h3 className={css.camperPrice}>${price}</h3>
                      <HeartIcon className={css.favorite} />
                    </div>
                  </div>

                  <div className={css.containerRatingLocation}>
                    <div className={css.ratingContainer}>
                      <img className={css.star} src={star} alt="star" />
                      <p className={css.reviewsText}>{rating} Stars</p>
                    </div>

                    <div className={css.locationContainer}>
                      <LocationIcon className={css.locationIcon} />
                      <p className={css.locationText}>{location}</p>
                    </div>
                  </div>

                  <p className={css.camperDescription}>{description}</p>

                  <ul className={css.featuresList}>
                    {[
                      { label: "Air Conditioning", condition: campers.AC },
                      { label: "Bathroom", condition: campers.bathroom },
                      { label: "Kitchen", condition: campers.kitchen },
                      { label: "TV", condition: campers.TV },
                      { label: "Radio", condition: campers.radio },
                      {
                        label: "Refrigerator",
                        condition: campers.refrigerator,
                      },
                      { label: "Microwave", condition: campers.microwave },
                      { label: "Gas", condition: campers.gas },
                      { label: "Water", condition: campers.water },
                    ]
                      .filter((item) => item.condition === item.condition)
                      .map((item, index) => (
                        <li key={index} className={css.featuresListItem}>
                          {item.label}
                        </li>
                      ))}
                  </ul>

                  <NavLink
                    className={css.camperDetailsLink}
                    to={`/catalog/${id}`}
                  >
                    Show more
                  </NavLink>
                </div>
              </li>
            )
          )}
      </ul>
      {visibleCampers < campers.length && (
        <button
          className={css.loadMoreBtn}
          type="button"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CampersList;
