import styles from "../styles/Home.module.css";
import formStyles from "../styles/form.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(data.name + ", " + data.email);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Form Page</h1>

      <div className={styles.description}>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit"
         */}
        <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className={formStyles.input}
            {...register("name", { required: true })}
            placeholder="Name"
          />
          {errors.name && (
            <span className={formStyles.error}>This field is required</span>
          )}

          {/* include validation with required or other standard HTML validation rules */}
          <input
            className={formStyles.input}
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span className={formStyles.error}>This field is required</span>
          )}

          <input className={formStyles.button} type="submit" />
        </form>
      </div>
    </main>
  );
};

export default FormPage;
