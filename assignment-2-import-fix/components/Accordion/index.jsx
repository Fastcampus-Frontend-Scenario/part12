import React, { useState } from "react";
import styles from "./styles.module.css";

export const Accordion = ({ title, body }) => {
  const [active, setActive] = useState(false);

  const toggleIcon = {
    transform: "rotate(90deg)",
  };
  const activeAccordion = {
    display: "block",
  };

  const dropFaq = () => {
    setActive(!active);
  };

  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionItemHeader} onClick={dropFaq}>
        <p className={`${styles.title} ${active ? styles.active : {}}`}>
          <span
            className={styles.accordionItemHeaderIcon}
            style={active ? toggleIcon : {}}>
            &gt;
          </span>
          <span className={styles.accordionItemLHeaderTitle}>{title}</span>
        </p>
      </div>
      <div
        className={styles.accordionItemContent}
        style={active ? activeAccordion : {}}>
        <p>{body}</p>
      </div>
    </div>
  );
};
