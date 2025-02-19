import { useParams } from "react-router-dom";
import css from "./Features.module.css";
import { useEffect, useState } from "react";
import { fetchCamperById } from "../../services/api";

const Features = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    fetchCamperById(id)
      .then((data) => setCamper(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className={css.containerFeatures}>
      {camper && (
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
      )}

      <h3 className={css.featuresTitle}>Vehicle details</h3>
      <div className={css.line}></div>

      {camper && (
        <ul className={css.vehicleDetailsList}>
          <li className={css.vehicleDetailsItem}>
            <p className={css.detailsItem}>Form</p>
            <p className={css.detailsItem}>{camper.form}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p className={css.detailsItem}>Length</p>
            <p className={css.detailsItem}>{camper.length}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p className={css.detailsItem}>Width</p>
            <p className={css.detailsItem}>{camper.width}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p className={css.detailsItem}>Height</p>
            <p className={css.detailsItem}>{camper.height}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p className={css.detailsItem}>Tank</p>
            <p className={css.detailsItem}>{camper.tank}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p className={css.detailsItem}>Consumption</p>
            <p className={css.detailsItem}>{camper.consumption}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Features;

// import { useParams } from "react-router-dom";
// import css from "./Features.module.css";

// const Features = () => {

//   return (
//     <div className={css.containerFeatures}>
//       <ul className={css.featuresList}>
//         <li className={css.featuresListItem}>Automatic</li>
//       </ul>

//       <h3 className={css.featuresTitle}>Vehicle details</h3>
//       <div className={css.line}></div>

//       <ul className={css.vehicleDetailsList}>
//         <li className={css.vehicleDetailsItem}>
//           <p className={css.detailsItem}>Details name</p>
//           <p className={css.detailsItem}>Details value</p>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Features;
