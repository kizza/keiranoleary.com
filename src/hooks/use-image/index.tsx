import React, { useEffect, useState, useCallback } from "react";

export interface Dimensions {
  width: number;
  height: number;
}

export const withImage = (src: string) => (Component: any) => (props: any) => {
  const [_, imageDimensions] = useImage(src);
  return <Component {...props} image={src} imageDimensions={imageDimensions} />;
};

export const useImage = (
  src: string | undefined,
  callback?: () => void
): [boolean, Dimensions | undefined] => {
  const [imageDimensions, setImageDimensions] = useState<
    Dimensions | undefined
  >();
  const [image] = useState<HTMLImageElement>(new Image());
  const loaded = !!imageDimensions;

  const backgroundLoadedCallback = useCallback(() => {
    callback && callback();
  }, [loaded]);

  useEffect(() => {
    const loadImage = (src: string) => {
      image.src = src;
    };

    const listenForImageLoad = (image: any) => {
      image.onload = () => {
        setImageDimensions({ width: image.width, height: image.height });
        backgroundLoadedCallback();
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

export default useImage;
