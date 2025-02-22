import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { HeartIcon, LocationIcon } from "../Icons";
import { fetchCampers } from "../../services/api";
import star from "../../assets/images/star.png";
import css from "./CampersList.module.css";

const CampersList = ({ filters }) => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCampers, setVisibleCampers] = useState(4);
  const [favorites, setFavorites] = useState([]);

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

  const filterCampers = (campers, filters) => {
    return campers.filter((camper) => {
      if (
        filters.location &&
        !camper.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      if (filters.equipment) {
        const { ac, automatic, kitchen, tv, bathroom } = filters.equipment;
        if (
          (ac && !camper.AC) ||
          (automatic && !camper.automatic) ||
          (kitchen && !camper.kitchen) ||
          (tv && !camper.TV) ||
          (bathroom && !camper.bathroom)
        ) {
          return false;
        }
      }

      if (filters.type) {
        const { van, fullyIntegrated, alcove } = filters.type;
        if (
          (van && !camper.van) ||
          (fullyIntegrated && !camper.fullyIntegrated) ||
          (alcove && !camper.alcove)
        ) {
          return false;
        }
      }

      return true;
    });
  };

  const filteredCampers = filterCampers(campers, filters);

  const handleFavoriteToggle = (camperId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(camperId)) {
        return prevFavorites.filter((id) => id !== camperId);
      } else {
        return [...prevFavorites, camperId];
      }
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleLoadMore = () => {
    setVisibleCampers((prevVisibleCampers) => prevVisibleCampers + 4);
  };

  return (
    <div className={css.containerCampers}>
      <ul className={css.campersList}>
        {filteredCampers.slice(0, visibleCampers).map((camper) => (
          <li key={camper.id} className={css.campersListItem}>
            <img
              className={css.campersImg}
              src={camper.gallery?.[0]?.thumb || ""}
              alt={camper.name}
            />
            <div className={css.camperInfo}>
              <div className={css.containerCamperTitle}>
                <h3 className={css.camperTitle}>{camper.name}</h3>
                <div className={css.containerCamperPrice}>
                  <h3 className={css.camperPrice}>
                    ${camper.price.toFixed(2)}
                  </h3>
                  <button
                    className={css.favoriteBtn}
                    type="button"
                    onClick={() => handleFavoriteToggle(camper.id)}
                  >
                    <HeartIcon
                      className={`${css.favorite} ${
                        favorites.includes(camper.id) ? css.favoriteActive : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className={css.containerRatingLocation}>
                <div className={css.ratingContainer}>
                  <img className={css.star} src={star} alt="star" />
                  <p className={css.reviewsText}>
                    {camper.rating} (
                    {Array.isArray(camper.reviews) ? camper.reviews.length : 0}{" "}
                    review)s
                  </p>
                </div>

                <div className={css.locationContainer}>
                  <LocationIcon className={css.locationIcon} />
                  <p className={css.locationText}>{camper.location}</p>
                </div>
              </div>

              <p className={css.camperDescription}>{camper.description}</p>

              <ul className={css.featuresList}>
                {[
                  { label: "Air Conditioning", condition: camper.AC },
                  { label: "Bathroom", condition: camper.bathroom },
                  { label: "Kitchen", condition: camper.kitchen },
                  { label: "TV", condition: camper.TV },
                  { label: "Radio", condition: camper.radio },
                  { label: "Refrigerator", condition: camper.refrigerator },
                  { label: "Microwave", condition: camper.microwave },
                  { label: "Gas", condition: camper.gas },
                  { label: "Water", condition: camper.water },
                ]
                  .filter((item) => item.condition === true)
                  .map((item, index) => (
                    <li key={index} className={css.featuresListItem}>
                      {item.label}
                    </li>
                  ))}
              </ul>

              <NavLink
                className={css.camperDetailsLink}
                to={`/catalog/${camper.id}`}
              >
                Show more
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
      {visibleCampers < filteredCampers.length && (
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

CampersList.propTypes = {
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.func.isRequired,
};

export default CampersList;
