import { faChild } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useAnimationWhenVisible from "../../../hooks/use-animation-when-visible";
import { animations, colours, delay } from "../../../shared";
import Section from "../../Section";
import sections from "../../sections/Banner.module.scss";
import dividers from "../../sections/Dividers.module.scss";
import styles from "./Enthusiast.module.scss";

export default () => {
  const [
    scrollRef,
    [headingAnimation, textAnimation, iconAnimation],
  ] = useAnimationWhenVisible([
    animations.CustomFadeInDown,
    delay(animations.CustomCircle, 0),
    delay("fadeInRight", 0),
  ]);

  return (
    <Section
      refName="enthusiast"
      alphaColour={[34, 129, 188, 0.7]}
      backgroundColour={colours.blue}
      backgroundImage="images/enthusiast.jpg"
      classNames={[sections.Banner, styles.Enthusiast]}
      dividerClassName={dividers.WhiteDivider}
    >
      <div {...iconAnimation}>
        <FontAwesomeIcon className={styles.Icon} icon={faChild} size="6x" />
      </div>

      <h2 ref={scrollRef} {...headingAnimation}>
        As an online enthusiast…
      </h2>
      <p {...textAnimation}>
        You’ll often find me brimming with inspiration after browsing award
        winning website galleries or github project repositories. I simply love
        the potential and eclectic nature of this web of ours.
      </p>
    </Section>
  );
};
