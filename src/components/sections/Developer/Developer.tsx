import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useAnimationWhenVisible from "../../../hooks/use-animation-when-visible";
import { animations, colours, delay } from "../../../shared";
import Section from "../../Section";
import sections from "../../sections/Banner.module.scss";
import dividers from "../../sections/Dividers.module.scss";
import styles from "./Developer.module.scss";

export default () => {
  const [
    scrollRef,
    [headerAnimation, textAnimation, iconAnimation],
  ] = useAnimationWhenVisible([
    animations.CustomFadeInDown,
    delay(animations.CustomCircle, 0),
    delay("fadeInRight", 0),
  ]);

  return (
    <Section
      refName="developer"
      alphaColour={[0, 0, 0, 0.7]}
      backgroundColour={colours.steel}
      backgroundImage="images/developer.jpg"
      classNames={[sections.Banner, styles.Developer]}
      dividerClassName={dividers.GreyDivider}
    >
      <div {...iconAnimation}>
        <FontAwesomeIcon className={styles.Icon} icon={faCogs} size="6x" />
      </div>

      <h2 ref={scrollRef} {...headerAnimation}>
        As a developer…
      </h2>
      <p {...textAnimation}>
        <span className={styles.green}>I love to build</span>{" "}
        <span className={styles.beige}>custom web applications</span> and{" "}
        <span className={styles.pink}>plugins</span>, work with databases,
        payment gateways and third party apis. You’ll find me poring over
        documentation, sifting through server logs and coding into the night.
      </p>
    </Section>
  );
};
