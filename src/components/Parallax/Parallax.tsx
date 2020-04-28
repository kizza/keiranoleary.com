import React, { useRef, useState } from "react";
import classNames from "classnames";
import styles from "./Parallax.module.scss";
import useScrollPosition from "../../hooks/use-scroll-position";

interface Props {
  className: string;
  enabled?: boolean;
  children: any;
}

export default ({ className, enabled = false, children }: Props) => {
  const contentRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useScrollPosition(
    (current) => {
      if (current.y > 0 && enabled) {
        const ratio = current.y / window.innerHeight;
        setOffset(ratio);
      }
    },
    contentRef,
    300,
    []
  );

  const offsetStyle = {
    top: offset * 200,
  };

  return (
    <div className={classNames(styles.Parallax, className)} style={offsetStyle}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};
