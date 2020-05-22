import { MutableRefObject, useEffect, useRef, useState } from "react";
import useScrollPosition from "../use-scroll-position";
import styles from "./style.module.scss";

export interface AnimateProps {
  className: string;
}

type ReturnProps = [MutableRefObject<any>, AnimateProps[], any];

const DISPLAY_AT_RATIO = 0.8;

export default (
  animation: string | string[],
  predicate?: () => boolean
): ReturnProps => {
  const elementRef = useRef<Element | null>(null);

  const animationClasses: string[] = (animation as any).join
    ? (animation as string[])
    : ([animation] as string[]);

  const [animated, setAnimated] = useState<boolean>(false);

  const [animateProps, setAnimateProps] = useState<AnimateProps[]>(
    animationClasses.map(() => ({
      className: styles.Invisible,
    }))
  );

  const reset = () => {
    setAnimated(false);
    setAnimateProps(
      animationClasses.map(() => ({
        className: styles.Invisible,
      }))
    );
  };

  /* const trigger = useCallback( */
  const trigger = (y: number) => {
    const ratio = y / window.innerHeight;
    if (ratio < DISPLAY_AT_RATIO && !animated) {
      setAnimated(true);
      setAnimateProps(
        animationClasses.map(each => ({
          className: `${each} animated`,
        }))
      );
    } else {
      setAnimated(false);
    }
  };
  /* [animated, animationClasses, setAnimated, setAnimateProps] */
  /* ); */

  useScrollPosition(({ y }) => y > 0 && trigger(y), elementRef, 300, [
    elementRef,
  ]);

  useEffect(() => {
    const target = elementRef.current;
    if (target) {
      const position = target.getBoundingClientRect();
      trigger(position.top + 40);
    }
  }, []);
  /* }, [animated, elementRef.current, trigger]); */

  return [elementRef, animateProps, reset];
};
