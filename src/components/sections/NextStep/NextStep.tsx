import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import animations from "../../../shared/Animate.module.scss";
import useAnimationWhenVisible from "../../../hooks/use-animation-when-visible";
import Section from "../../Section";
import display from "../../sections/Banner.module.scss";
import dividers from "../../sections/Dividers.module.scss";
import styles from "./NextStep.module.scss";

export default () => {
  const [
    scrollRef,
    [fadeInDown, fadeInUp, iconAnimation],
  ] = useAnimationWhenVisible([
    animations.CustomFadeInDown,
    animations.CustomFadeInUp,
    `${animations.CustomFadeInUp} delay-2`,
  ]);

  return (
    <Section
      classNames={[display.Banner, styles.NextStep]}
      dividerClassName={dividers.NoDivider}
    >
      <h2 ref={scrollRef} {...fadeInDown}>
        Where to from here?
      </h2>
      <p {...fadeInUp}>
        Feel free to <a href="mailto:hello@keiranoleary.com">get in touch</a>,
        or check out <a href="http://github.com/kizza">my github account</a> (to
        see some of the things i've been playing with, such as the{" "}
        <a href="https://github.com/kizza/keiranoleary.com">
          sourcecode for this website
        </a>{" "}
        perhaps)
      </p>

      <div {...iconAnimation}>
        <FontAwesomeIcon
          onClick={() => window.open("https://www.github.com/kizza")}
          className={styles.Icon}
          icon={faGithub}
          size="6x"
        />
      </div>
    </Section>
  );
};
