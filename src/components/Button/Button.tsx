import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Button.module.scss";

interface Props {
  label: string;
  icon?: IconDefinition;
}

export default ({ label, icon }: Props) => (
  <a href={`#${label}`} className={styles.Button}>
    {label}
    {icon && (
      <FontAwesomeIcon
        className={styles.Icon}
        icon={icon}
        size="lg"
        fixedWidth
      />
    )}
  </a>
);
