import styles from "../styles/Home.module.css";
import formStyles from "../styles/form.module.css";
import Link from "next/link";

const FormPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Form Page</h1>

      <div className={styles.description}>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit"
         */}
        <form onSubmit={(e) => handleSubmit(e)} className={formStyles.form}>
          <input
            className={formStyles.input}
            placeholder="Name"
            type="text"
            required
          />
          <input
            className={formStyles.input}
            placeholder="Email"
            type="email"
            required
          />

          <input className={formStyles.button} type="submit" />
        </form>
      </div>
    </main>
  );
};

export default FormPage;
