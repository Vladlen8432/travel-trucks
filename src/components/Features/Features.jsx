import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCamperById } from "../../services/api";
import BookForm from "../BookForm/BookForm";

import css from "./Features.module.css";
import {
  ACIcon,
  BathroomIcon,
  GasIcon,
  KitchenIcon,
  MicrowaveIcon,
  RadioIcon,
  RefregiratorIcon,
  TVIcon,
  WaterIcon,
} from "../Icons";

const Features = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    fetchCamperById(id)
      .then((data) => setCamper(data))
      .catch((error) => console.error(error));
  }, [id]);

  const featureIcons = {
    "Air Conditioning": <ACIcon className={css.featureIcon} />,
    Bathroom: <BathroomIcon className={css.featureIcon} />,
    Kitchen: <KitchenIcon className={css.featureIcon} />,
    TV: <TVIcon className={css.featureIcon} />,
    Radio: <RadioIcon className={css.featureIcon} />,
    Refrigerator: <RefregiratorIcon className={css.featureIcon} />,
    Microwave: <MicrowaveIcon className={css.featureIcon} />,
    Gas: <GasIcon className={css.featureIcon} />,
    Water: <WaterIcon className={css.featureIcon} />,
  };

  return (
    <div className={css.container}>
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
                  {featureIcons[item.label]} {item.label}
                </li>
              ))}
          </ul>
        )}

        <h3 className={css.featuresTitle}>Vehicle details</h3>
        <div className={css.line}></div>

        {camper && (
          <ul className={css.vehicleDetailsList}>
            {[
              { label: "Form", value: camper.form },
              { label: "Length", value: camper.length },
              { label: "Width", value: camper.width },
              { label: "Height", value: camper.height },
              { label: "Tank", value: camper.tank },
              { label: "Consumption", value: camper.consumption },
            ].map((detail, index) => (
              <li key={index} className={css.vehicleDetailsItem}>
                <p className={css.detailsItem}>{detail.label}</p>
                <p className={css.detailsItem}>{detail.value}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <BookForm />
    </div>
  );
};

export default Features;

// import { useParams } from "react-router-dom";
// import css from "./Features.module.css";
// import { useEffect, useState } from "react";
// import { fetchCamperById } from "../../services/api";
// import BookForm from "../BookForm/BookForm";

// const Features = () => {
//   const { id } = useParams();
//   const [camper, setCamper] = useState(null);

//   useEffect(() => {
//     fetchCamperById(id)
//       .then((data) => setCamper(data))
//       .catch((error) => console.error(error));
//   }, [id]);

//   return (
//     <div className={css.container}>
//       <div className={css.containerFeatures}>
//         {camper && (
//           <ul className={css.featuresList}>
//             {[
//               { label: "Air Conditioning", condition: camper.AC },
//               { label: "Bathroom", condition: camper.bathroom },
//               { label: "Kitchen", condition: camper.kitchen },
//               { label: "TV", condition: camper.TV },
//               { label: "Radio", condition: camper.radio },
//               { label: "Refrigerator", condition: camper.refrigerator },
//               { label: "Microwave", condition: camper.microwave },
//               { label: "Gas", condition: camper.gas },
//               { label: "Water", condition: camper.water },
//             ]
//               .filter((item) => item.condition === true)
//               .map((item, index) => (
//                 <li key={index} className={css.featuresListItem}>
//                   {item.label}
//                 </li>
//               ))}
//           </ul>
//         )}

//         <h3 className={css.featuresTitle}>Vehicle details</h3>
//         <div className={css.line}></div>

//         {camper && (
//           <ul className={css.vehicleDetailsList}>
//             <li className={css.vehicleDetailsItem}>
//               <p className={css.detailsItem}>Form</p>
//               <p className={css.detailsItem}>{camper.form}</p>
//             </li>

//             <li className={css.vehicleDetailsItem}>
//               <p className={css.detailsItem}>Length</p>
//               <p className={css.detailsItem}>{camper.length}</p>
//             </li>

//             <li className={css.vehicleDetailsItem}>
//               <p className={css.detailsItem}>Width</p>
//               <p className={css.detailsItem}>{camper.width}</p>
//             </li>

//             <li className={css.vehicleDetailsItem}>
//               <p className={css.detailsItem}>Height</p>
//               <p className={css.detailsItem}>{camper.height}</p>
//             </li>

//             <li className={css.vehicleDetailsItem}>
//               <p className={css.detailsItem}>Tank</p>
//               <p className={css.detailsItem}>{camper.tank}</p>
//             </li>

//             <li className={css.vehicleDetailsItem}>
//               <p className={css.detailsItem}>Consumption</p>
//               <p className={css.detailsItem}>{camper.consumption}</p>
//             </li>
//           </ul>
//         )}
//       </div>
//       <BookForm />
//     </div>
//   );
// };

// export default Features;
