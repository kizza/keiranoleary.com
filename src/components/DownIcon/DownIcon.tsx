import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import useScrollPosition from "../../hooks/use-scroll-position";
import styles from "./DownIcon.module.scss";

export default () => {
  const iconRef = useRef<HTMLDivElement | null>(null);
  const [opacity, setOpacity] = useState<number>(100);

  const minThreshold = 340;
  const maxThreshold = 400;

  const updateOpacity = (y: number) => {
    if (y < minThreshold) {
      setOpacity(0);
    } else if (y > maxThreshold) {
      setOpacity(100);
    } else {
      setOpacity((y - minThreshold) / (maxThreshold - minThreshold));
    }
  };

  useScrollPosition(
    (current) => {
      updateOpacity(current.y);
    },
    iconRef,
    300,
    []
  );

  return (
    <div ref={iconRef} className={styles.DownIcon} style={{ opacity }}>
      <FontAwesomeIcon icon={faChevronDown} size="lg" />
    </div>
  );
};
