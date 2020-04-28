import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { Dimensions } from "./";
import styles from "./Image.module.scss";

interface ImageProps {
  src: string;
  alt: string;
  onLoad?: (d: Dimensions) => void;
}

const image = new Image();

export default ({ src, alt, onLoad }: ImageProps) => {
  const [dimensions, setDimensions] = useState<Dimensions | undefined>();
  const { width, height } = dimensions || {};

  console.log("rendering the image");
  /* let timeout: any; */

  image.onload = () => {
    console.log("image loaded");
    const { width, height } = image;
    /* timeout = setTimeout(() => { */
    onLoad && onLoad({ width, height });
    setDimensions({ width, height });
    /* } , 2000); */
    /* setDimensions({width: 100, height:100}) */
    /* setDimensions({ width, height }); */
    image.onload = () => console.log("second");
  };

  useEffect(() => {
    console.log("Setting the image source here", image.src, width, height);
    image.src = src;

    /* return () => clearTimeout(timeout); */
  }, [image.src === undefined]);

  const loadedImage = () => {
    return <img className={styles.Image} src={src} alt={alt} />;
  };

  return <div>{dimensions === undefined ? <Loading /> : loadedImage()}</div>;
};
