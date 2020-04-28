import React from "react";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import useAnimationWhenVisible from "../../../hooks/use-animation-when-visible";
import { useSections } from "../../../hooks/use-sections";
import { SectionName } from "../../../models";
import { delay } from "../../../shared";
import animations from "../../../shared/Animate.module.scss";
import Section from "../../Section";
import themes from "../../sections/Banner.module.scss";
import dividers from "../../sections/Dividers.module.scss";
import styles from "./Welcome.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  const [scrollRef, [fadeInDown]] = useAnimationWhenVisible([
    delay(animations.CustomFadeInDown, 0.6),
  ]);

  const { sections } = useSections();

  const scrollToSection = (section: SectionName) => {
    const sectionRef = sections[section];
    if (sectionRef.current) {
      window.scrollTo(0, sectionRef.current.offsetTop - 89);

      /* window.scrollTo({ */
      /*   left: 0, */
      /*   top: sectionRef.current.offsetTop - 89, */
      /*   behavior: "smooth", */
      /* }); */
    }
  };

  return (
    <Section
      refName="welcome"
      alphaColour={[74, 46, 18, 0.7]}
      backgroundAttachment="fixed"
      backgroundColour="#6d5f54"
      backgroundImage="images/welcome.jpg"
      classNames={[themes.Banner, styles.Welcome]}
      dividerClassName={dividers.PinkDivider}
    >
      <h2 ref={scrollRef} {...fadeInDown}>
        Hi I'm Keiran. I'm a{" "}
        <a
          href="#designer"
          onClick={() => scrollToSection("designer")}
          className={styles.DesignerLink}
        >
          <FontAwesomeIcon
            className={styles.Icon}
            icon={faSuitcase}
            size="1x"
          />
          front-end deisigner
        </a>
        ,{" "}
        <a
          href="#developer"
          onClick={() => scrollToSection("developer")}
          className={styles.DeveloperLink}
        >
          <FontAwesomeIcon className={styles.Icon} icon={faCogs} size="1x" />
          back-end developer
        </a>{" "}
        and{" "}
        <a
          href="#enthusiast"
          onClick={() => scrollToSection("enthusiast")}
          className={styles.EnthusiastLink}
        >
          <FontAwesomeIcon className={styles.Icon} icon={faChild} size="1x" />
          online enthusiast
        </a>
      </h2>
    </Section>
  );
};
