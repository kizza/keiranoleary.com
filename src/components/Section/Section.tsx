import classNames from "classnames/bind";
import React, { useLayoutEffect, useRef, useState, useCallback } from "react";
import useImage, { Dimensions } from "../../hooks/use-image";
import { useSectionRegister } from "../../hooks/use-sections";
import DownIcon from "../DownIcon";
import styles from "./Section.module.scss";
import { SectionName } from "../../models";
import Loading from "../Loading";

const cx = classNames.bind(styles);

interface Props {
  alphaColour?: number[];
  classNames: string[];
  refName?: SectionName;
  dividerClassName: string;
  paddingBottom?: number;
  backgroundAttachment?: string;
  backgroundColour?: string;
  backgroundImage?: string;
  downIcon?: boolean;
  children: any;
  onBackgroundLoaded?: () => void;
}

const useBackgroundImage = (
  props: any,
  imageLoaded: boolean,
  sectionDimensions: any,
  imageDimensions: any
) => {
  const { backgroundImage } = props;
  /* const { backgroundColour, backgroundImage } = props; */
  const calculateBackgroundSize = (section: Dimensions, image: Dimensions) => {
    const sectionRatio = section.width / section.height;
    const imageRatio = image.width / image.height;

    return sectionRatio > imageRatio
      ? `${sectionDimensions.width}px auto`
      : `auto ${sectionDimensions.height}px`;
  };

  const backgroundCoverStyle = {}; // backgroundColor: backgroundColour };
  const backgroundImageStyle = () => {
    if (!backgroundImage || !imageLoaded) {
      return backgroundCoverStyle;
    }

    const fadedColour = props.alphaColour
      ? `rgba(${props.alphaColour.join(",")})`
      : "";

    const backgroundSize =
      imageDimensions &&
      calculateBackgroundSize(sectionDimensions, imageDimensions);

    return {
      backgroundImage: `linear-gradient(to bottom, ${fadedColour}, ${fadedColour}), url(${backgroundImage})`,
      backgroundSize: backgroundSize,
      backgroundAttachment: props.backgroundAttachment || "inherit",
    };
  };

  return backgroundImageStyle();
};

const Section = (props: Props) => {
  /* const { backgroundColour } = props; */
  const { backgroundColour, backgroundImage, onBackgroundLoaded } = props;
  /* const backgroundImage = undefined; */

  const sectionRef = useRef<HTMLDivElement | null>(null);
  useSectionRegister(props.refName || "", sectionRef);

  const [sectionDimensions, setSectionDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  const [imageLoaded, imageDimensions] = useImage(
    backgroundImage,
    onBackgroundLoaded
  );

  useLayoutEffect(() => {
    if (sectionRef && sectionRef.current) {
      setSectionDimensions({
        width: sectionRef.current.clientWidth,
        height: sectionRef.current.clientHeight,
      });
    }
  }, []);

  const showContent = !backgroundImage || imageLoaded;
  const className = cx("Section", props.dividerClassName, {
    Loading: !showContent,
  });
  const contentClassNames = cx(...props.classNames, "Content");
  const coverClassNames = cx("Cover", { Animate: showContent });

  const backgroundCoverStyle = { backgroundColor: backgroundColour };
  const backgroundImageStyle = useBackgroundImage(
    props,
    imageLoaded,
    sectionDimensions,
    imageDimensions
  );

  return (
    <div ref={sectionRef} className={className} style={backgroundImageStyle}>
      {backgroundImage && (
        <div className={coverClassNames} style={backgroundCoverStyle}>
          <Loading />
        </div>
      )}
      <div className={contentClassNames}>{props.children}</div>

      {props.downIcon !== false && <DownIcon />}
    </div>
  );
};

export default Section;
