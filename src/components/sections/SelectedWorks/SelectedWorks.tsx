import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import animations from "../../../shared/Animate.module.scss";
import useAnimationWhenVisible from "../../../hooks/use-animation-when-visible";
import Section from "../../Section";
import display from "../../sections/Banner.module.scss";
import dividers from "../../sections/Dividers.module.scss";
import styles from "./SelectedWorks.module.scss";
import classNames from "classnames";

export default () => {
  const [
    scrollRef,
    [fadeInDown, fadeInUp, fadeInLeft],
  ] = useAnimationWhenVisible([
    animations.CustomFadeInDown,
    animations.CustomFadeInUp,
    /* "fadeInLeft", */
    `${animations.CustomFadeInUp} delay-2`,
  ]);

  return (
    <Section
      alphaColour={[0, 0, 0, 0.5]}
      backgroundColour="#422613"
      backgroundImage="images/wood.jpg"
      classNames={[display.Banner, styles.SelectedWorks]}
      dividerClassName={classNames(dividers.WhiteDivider, dividers.WideDivider)}
    >
      <div {...fadeInLeft}>
        <FontAwesomeIcon className={styles.Icon} icon={faSuitcase} size="6x" />
      </div>

      <h2 ref={scrollRef} {...fadeInDown}>
        Some selected works
      </h2>
      <p {...fadeInUp}>Check out some of my recent projects below</p>
    </Section>
  );
};
