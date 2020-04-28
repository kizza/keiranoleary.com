import React, { Children, cloneElement } from "react";
import styles from "./Columns.module.scss";
import useAnimationWhenVisible from "../../hooks/use-animation-when-visible";
import animations from "../../shared/Animate.module.scss";

interface Props {
  children: any;
}

/* const zip = <T1, T2>(a: T1[], b: T2[]) => */
/*   a.map((each, i) => [each, b[i]]) as [T1, T2][]; */

export default ({ children }: Props) => {
  const [scrollRef, animateProps] = useAnimationWhenVisible(
    children.map((_child: any) => animations.CustomFadeInRight)
    /* children.map((_child: any) => "flipInX") */
  );

  /* const staggeredAnimateProps = animateProps.map((each, i) => ({ */
  /*   className: `${each.className} delay-${i}`, */
  /* })); */

  const staggeredAnimateClassNames = animateProps.map(
    (each, i) => `${each.className} delay-${i}`
  );

  return (
    <div ref={scrollRef} className={styles.Columns}>
      {Children.map(children, (child, i) =>
        cloneElement(child, { className: staggeredAnimateClassNames[i] })
      )}
    </div>
  );
};
