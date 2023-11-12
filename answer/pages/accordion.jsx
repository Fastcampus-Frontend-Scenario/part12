import { Accordion } from "../components/Accordion";
import styles from "../styles/Home.module.css";

const AccordionPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Accordion Page</h1>

      <div className={styles.description}>
        <Accordion
          title="What harsh truths do you prefer to ignore?"
          body="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
        />
        <Accordion
          title="Is free will real or just an illusion?"
          body="In ad velit in ex nostrud dolore cupidatat consectetur ea in
            ut nostrud velit in irure cillum tempor laboris sed
            adipisicing eu esse duis nulla non."
        />
        <Accordion
          title="Are we living in a simulation?"
          body="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
        />
        <Accordion
          title="What harsh truths do you prefer to ignore?"
          body="In ad velit in ex nostrud dolore cupidatat consectetur ea in
            ut nostrud velit in irure cillum tempor laboris sed
            adipisicing eu esse duis nulla non."
        />
        <Accordion
          title="Where are all the aliens?"
          body="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
        />
        <Accordion
          title="How can we overcome the tyranny of the majority?"
          body="In ad velit in ex nostrud dolore cupidatat consectetur ea in
            ut nostrud velit in irure cillum tempor laboris sed
            adipisicing eu esse duis nulla non."
        />
      </div>
    </main>
  );
};

export default AccordionPage;
