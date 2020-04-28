import classNames from "classnames";
import React from "react";
import useAnimationWhenVisible from "../../hooks/use-animation-when-visible";
import { animations, delay } from "../../shared";
import Section from "../Section";
import display from "../sections/Banner.module.scss";
import dividers from "../sections/Dividers.module.scss";
import styles from "./ShowcaseItem.module.scss";

interface Props {
  title: string;
  description: string;
  alphaColour: number[];
  showcaseClass?: string;
  backgroundColour: string;
  backgroundImage: string;
  thumbnail: string;
}

export default ({
  title,
  alphaColour,
  showcaseClass = "CUSTOM",
  description,
  thumbnail,
  backgroundImage,
}: Props) => {
  const [
    scrollRef,
    [headerAnimation, textAnimation, iconAnimation],
    reset,
  ] = useAnimationWhenVisible([
    delay(animations.CustomFadeInDown, 0.4),
    delay(animations.CustomFadeInRight, 0.6),
    delay(animations.CustomCircleUp, 0),
  ]);

  const thumbnailClassnames = {
    ...iconAnimation,
    className: classNames(iconAnimation.className, styles.Thumbnail),
  };

  return (
    <Section
      alphaColour={alphaColour}
      backgroundColour={`rgb(${alphaColour.slice(0, 3).join(",")}`}
      backgroundImage={backgroundImage}
      classNames={[display.Banner, styles.ShowcaseItem, showcaseClass]}
      dividerClassName={classNames(dividers.WhiteDivider, dividers.WideDivider)}
      downIcon={false}
    >
      <h2 ref={scrollRef} {...headerAnimation}>
        {title}
      </h2>
      <p {...textAnimation}>{description}</p>
      <div
        {...thumbnailClassnames}
        onClick={() => {
          console.log("CLICKED");
          reset(false);
        }}
      >
        <img src={thumbnail} alt="Thumbnail" />
      </div>
      {/* <Button label="Check it out" icon={faAngleRight} {...fadeInLeft} /> */}
    </Section>
  );
};
