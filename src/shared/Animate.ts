import styles from "./Animate.module.scss";

type Delay = 0 | 0.2 | 0.4 | 0.6 | 0.8 | 1.2 | 1.6;

export const delay = (className: string, seconds: Delay) => {
  const delayClassname = styles[`Delay${seconds.toString().replace(".", "")}s`];
  return [className, delayClassname].join(" ");
};
