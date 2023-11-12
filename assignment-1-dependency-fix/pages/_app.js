import "../styles/globals.css";
import "../styles/accordion.css";
import "../styles/carousel.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/accordion" className={styles.link}>
            Accordion Page
          </Link>
          <Link href="/form" className={styles.link}>
            Form Page
          </Link>
          <Link href="/carousel" className={styles.link}>
            Carousel Page
          </Link>
        </nav>
      </header>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <p>
          Created by{" "}
          <Link target="_blank" href="https://blog.timonwa.com">
            Timonwa
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}

export default MyApp;
