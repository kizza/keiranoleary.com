import classNames from "classnames";
import React, { useRef, useState } from "react";
import Logo from "../Logo";
import Nav from "../Nav";
import styles from "./Header.module.scss";

/* const cx = classNames.bind(styles); */

type HeaderState = "full" | "slim";

interface Props {
  highlight: string;
}

export default ({ highlight }: Props) => {
  const headerRef = useRef(null);
  const [headerState] = useState<HeaderState>("full");

  /* useScrollPosition( */
  /*   (current) => setHeaderState(current.y > 0 ? "slim" : "full"), */
  /*   window, */
  /*   100 */
  /* ); */

  const headerClassNames = classNames(styles.Header, {
    [styles.Slim]: headerState === "slim",
  });

  const colourHeader = highlight && headerState === "slim";

  const headerStyles = {
    ...(colourHeader && { background: highlight }),
  };

  const navClassNames = classNames(styles.Nav, {});
  console.log("HEADER HS", highlight);

  return (
    <header ref={headerRef} className={headerClassNames} style={headerStyles}>
      {/* <img */}
      {/*   src={logo} */}
      {/*   alt="Keiran O'Leary" */}
      {/*   className={`${styles.Logo} flipInX animated`} */}
      {/* /> */}
      <Logo className={`${styles.Logo} flipInX animated`} />
      <Nav className={navClassNames} />
    </header>
  );
};
