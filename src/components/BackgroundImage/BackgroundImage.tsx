import React from "react";
import styles from "./BackgroundImage.module.scss";

interface Props {
  src?: string;
}

export default ({ src }: Props) => {
  return (
    <div className={styles.BackgroundImage}>
      <img className={styles.Background} src={src} />
    </div>
  );
};
