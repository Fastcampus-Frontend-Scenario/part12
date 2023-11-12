import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Optimizing build performance in Next.js</h1>

      <div className={styles.description}>
        <p>
          This demo is the code example for the article written by{" "}
          <Link target="_blank" href="https://blog.timonwa.com">
            Timonwa
          </Link>{" "}
          on{" "}
          <Link target="_blank" rel="noopener noreferrer" href="#">
            Optimizing build performance in Next.js
          </Link>{" "}
          for{" "}
          <Link target="_blank" rel="noopener noreferrer" href="#">
            LogRocket
          </Link>
          . This demonstration shows how optimizing your Next.js app can improve
          your build performance. You can access{" "}
          <Link
            target="_blank"
            href="https://github.com/Timonwa/optimising-nextjs-performance">
            the repo on GitHub
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
