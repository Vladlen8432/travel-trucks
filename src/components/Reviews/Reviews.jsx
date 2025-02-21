import PropTypes from "prop-types";

import { fetchCamperById } from "../../services/api";
import { StarIcon } from "../Icons";
import css from "./Reviews.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookForm from "../BookForm/BookForm";

const Reviews = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    fetchCamperById(id)
      .then((data) => setCamper(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!camper) {
    return <p>Loading...</p>;
  }

  return (
    <div className={css.container}>
      <div className={css.containerReviews}>
        <ul className={css.reviewsList}>
          {Array.isArray(camper.reviews) && camper.reviews.length > 0 ? (
            camper.reviews.map(
              ({ reviewer_name, reviewer_rating, comment }, index) => (
                <li key={index} className={css.reviewsItem}>
                  <div className={css.containerUser}>
                    <div className={css.firstLetter}>
                      {reviewer_name.charAt(0)}
                    </div>

                    <div className={css.userInfo}>
                      <p className={css.userName}>{reviewer_name}</p>

                      <ul className={css.userRatingList}>
                        <li className={css.userRatingItem}>
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={
                                i < reviewer_rating
                                  ? `${css.starIcon} ${css.starIconYellow}`
                                  : css.starIcon
                              }
                            />
                          ))}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className={css.userReview}>{comment}</p>
                </li>
              )
            )
          ) : (
            <p>No reviews available</p>
          )}
        </ul>
      </div>
      <BookForm/>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer_name: PropTypes.string.isRequired,
      reviewer_rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Reviews;
