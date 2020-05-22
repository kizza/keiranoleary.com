import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import useAnimationWhenVisible from "../../../hooks/use-animation-when-visible";
import { withImage, Dimensions } from "../../../hooks/use-image";
import { animations, colours, delay } from "../../../shared";
import Section from "../../Section";
import display from "../../sections/Banner.module.scss";
import dividers from "../../sections/Dividers.module.scss";
import styles from "./Designer.module.scss";

interface Props {
  image: string;
  imageDimensions: Dimensions;
}

const Designer = ({ imageDimensions }: Props) => {
  const [
    scrollRef,
    [headerAnimation, textAnimation, iconAnimation],
  ] = useAnimationWhenVisible([
    animations.CustomFadeInDown,
    delay(animations.CustomCircle, 0),
    delay("fadeInLeft", 0),
  ]);

  const backgroundLoaded = () => {
    console.log("Designer section background loaded");
    console.log(headerAnimation);
  };

  return (
    <Section
      refName="designer"
      onBackgroundLoaded={backgroundLoaded}
      alphaColour={[148, 32, 74, 0.7]}
      backgroundColour={colours.pink}
      backgroundImage="images/designer.jpg"
      classNames={[display.Banner, styles.Designer]}
      dividerClassName={dividers.WhiteDivider}
    >
      <div {...iconAnimation}>
        <FontAwesomeIcon
          className={styles.Icon}
          icon={faPaperPlane}
          size="6x"
        />
      </div>

      <h2 ref={scrollRef} {...headerAnimation}>
        As a website designer…
      </h2>
      <p {...textAnimation}>
        You’ll find me surrounded by sketches and post-it notes or with my head
        buried in sketch. I love to digest content towards a clean and effective
        website. To discern just the right typography, layout and style to make
        it's intent an enjoyable experience.
      </p>
    </Section>
  );
};

export default withImage("images/designer.png")(Designer);
