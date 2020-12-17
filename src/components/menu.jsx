import React from "react";
import { NavLink } from "react-router-dom";
import s from "./menu.module.css";

export default function Menu() {
  return (
    <div className={s.menu}>
      <div>
        <NavLink to="/level1" activeClassName={s.active}>
          Level 1
        </NavLink>
        <NavLink to="/level2" activeClassName={s.active}>
          Level 2
        </NavLink>
        <NavLink to="/level3" activeClassName={s.active}>
          Level 3
        </NavLink>
      </div>
      <NavLink
        to="/result"
        className={s.menu__result}
        activeClassName={s.active}
      >
        Result
      </NavLink>
    </div>
  );
}
