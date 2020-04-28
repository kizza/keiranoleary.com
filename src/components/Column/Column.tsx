import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import styles from "./Column.module.scss";

interface Props {
  title?: string;
  icon?: IconDefinition;
  className?: string;
  children: any;
}

export default ({ title, icon, className, children }: Props) => {
  return (
    <div className={classNames(className, styles.Column)}>
      {icon && <FontAwesomeIcon icon={icon} size="lg" fixedWidth />}
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};
