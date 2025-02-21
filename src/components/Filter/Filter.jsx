// import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import css from "./Filter.module.css";
import {
  KitchenIcon,
  ACIcon,
  TransmissionIcon,
  TVIcon,
  BathroomIcon,
  VanIcon,
  FullyIntegratedIcon,
  AlcoveIcon,
  LocationIcon,
} from "../Icons";

const Filter = ({ setFilters }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFilters(data);
  };

  return (
    <div className={css.containerFilter}>
      <form className={css.filterForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.label} htmlFor="location">
          Location
        </label>
        <br />
        <div className={css.inputLocationWrapper}>
          <LocationIcon className={css.locationIcon} />
          <input
            className={css.inputLocation}
            type="text"
            id="location"
            {...register("location")}
            placeholder="City"
          />
        </div>
        <label className={css.label}>Filters</label>
        <h4 className={css.filterTitle}>Vehicle equipment</h4>
        <div className={css.filterLine}></div>
        <div className={css.filterCheckContainer}>
          <input type="checkbox" id="ac" {...register("equipment.ac")} />
          <label className={css.labelCheck} htmlFor="ac">
            <div className={css.wrapper}>
              <ACIcon />
              AC
            </div>
          </label>
          <input
            type="checkbox"
            id="automatic"
            {...register("equipment.automatic")}
          />
          <label className={css.labelCheck} htmlFor="automatic">
            <div className={css.wrapper}>
              <TransmissionIcon />
              Automatic
            </div>
          </label>
          <input
            type="checkbox"
            id="kitchen"
            {...register("equipment.kitchen")}
          />
          <label className={css.labelCheck} htmlFor="kitchen">
            <div className={css.wrapper}>
              <KitchenIcon />
              Kitchen
            </div>
          </label>
          <input type="checkbox" id="tv" {...register("equipment.tv")} />
          <label className={css.labelCheck} htmlFor="tv">
            <div className={css.wrapper}>
              <TVIcon />
              TV
            </div>
          </label>
          <input
            type="checkbox"
            id="bathroom"
            {...register("equipment.bathroom")}
          />
          <label className={css.labelCheck} htmlFor="bathroom">
            <div className={css.wrapper}>
              <BathroomIcon />
              Bathroom
            </div>
          </label>
        </div>
        <h4 className={css.filterTitle}>Vehicle type</h4>
        <div className={css.filterLine}></div>
        <div className={css.filterCheckContainer}>
          <input type="checkbox" id="van" {...register("type.van")} />
          <label className={css.labelCheck} htmlFor="van">
            <div className={css.wrapper}>
              <VanIcon />
              Van
            </div>
          </label>
          <input
            type="checkbox"
            id="fullyIntegrated"
            {...register("type.fullyIntegrated")}
          />
          <label className={css.labelCheck} htmlFor="fullyIntegrated">
            <div className={css.wrapper}>
              <FullyIntegratedIcon />
              Fully Integrated
            </div>
          </label>
          <input type="checkbox" id="alcove" {...register("type.alcove")} />
          <label className={css.labelCheck} htmlFor="alcove">
            <div className={css.wrapper}>
              <AlcoveIcon />
              Alcove
            </div>
          </label>
        </div>
        <button className={css.filterButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

Filter.propTypes = {
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.func.isRequired,
};

export default Filter;
