import { useEffect, useState } from "react";

export interface Dimensions {
  width: number;
  height: number;
}

export default (src: string | undefined): [boolean, Dimensions | undefined] => {
  const [imageDimensions, setImageDimensions] = useState<
    Dimensions | undefined
  >();
  const [image] = useState<HTMLImageElement>(new Image());
  const loaded = !!imageDimensions;

  useEffect(() => {
    const loadImage = (src: string) => {
      image.src = src;
    };

    const listenForImageLoad = (image: any) => {
      image.onload = () => {
        /* setTimeout( */
        /*   () => */
        setImageDimensions({ width: image.width, height: image.height });
        /* 1000 */
        /* ); */
        image.onload = null;
      };
    };

    if (src) {
      listenForImageLoad(image);
      loadImage(src);
    }
  }, [src, image]);

  return [loaded, imageDimensions];
};
