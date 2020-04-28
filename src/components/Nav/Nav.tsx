import React from "react";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const cx = classNames.bind(styles);

interface Props {
  className: string;
}

export default ({ className }: Props) => (
  <ul className={cx(styles.Nav, className)}>
    <li>{navLink("Home", "/")}</li>
    <li>{navLink("Showcase", "/showcase")}</li>
    <li>{navLink("Contact", "/contact")}</li>
  </ul>
);

const navLink = (label: string, to: string) => (
  <NavLink to={to} activeClassName={styles.Active} exact>
    {label}
  </NavLink>
);
