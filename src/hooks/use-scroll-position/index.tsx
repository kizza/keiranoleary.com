import { useRef, useLayoutEffect, MutableRefObject } from "react";

interface Pos {
  x: number;
  y: number;
}

const isBrowser = typeof window !== `undefined`;

type WindowTarget = Window & typeof globalThis;
type RefTarget = MutableRefObject<Element | null>;
type ScrollTarget = WindowTarget | RefTarget;

const isRefTarget = (target: ScrollTarget): target is RefTarget =>
  (target as RefTarget).current !== undefined;

const getWindowScrollPosition = () => ({
  x: window.scrollX,
  y: window.scrollY,
});

const getElementScrollPosition = (element: RefTarget) => {
  if (!element.current) {
    return { x: 0, y: 0 };
  } else {
    const position = element.current.getBoundingClientRect();
    return { x: position.left, y: position.top };
  }
};

const getScrollPosition = (element: ScrollTarget) => {
  if (!isBrowser) return { x: 0, y: 0 };

  return isRefTarget(element)
    ? getElementScrollPosition(element)
    : getWindowScrollPosition();
};

const useScrollPosition = (
  callback: (current: Pos, previous: Pos) => void,
  target: ScrollTarget,
  wait = 0,
  deps: any[] = []
) => {
  const position = useRef(getScrollPosition(target));

  let throttleTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentPosition = getScrollPosition(target);
      callback(currentPosition, position.current);
      position.current = currentPosition;
      throttleTimeout.current = null;
    };

    const onScroll = () => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(handleScroll, wait);
        }
      } else {
        handleScroll();
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  /* }, [callback, element, useWindow, wait, ...deps]); */
};

export default useScrollPosition;
