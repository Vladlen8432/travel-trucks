import { useForm } from "react-hook-form";
import css from "./BookForm.module.css";

const BookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className={css.containerForm}>
      <h4 className={css.formTitle}>Book your campervan now</h4>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.formGroup}>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={css.input}
            placeholder="Name*"
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
        </div>

        <div className={css.formGroup}>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className={css.input}
            placeholder="Email*"
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
        </div>

        <div className={css.formGroup}>
          <input
            type="text"
            placeholder="Booking date*"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) =>
              e.target.value
                ? (e.target.type = "date")
                : (e.target.type = "text")
            }
            {...register("bookingDate", {
              required: "Booking date is required",
            })}
            className={`${css.input} ${css.dateInput}`}
          />
          {errors.bookingDate && (
            <p className={css.error}>{errors.bookingDate.message}</p>
          )}
        </div>

        <div className={css.formGroup}>
          <textarea
            {...register("comments")}
            className={css.textarea}
            placeholder="Comments"
          />
        </div>

        <button type="submit" className={css.submitButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookForm;
