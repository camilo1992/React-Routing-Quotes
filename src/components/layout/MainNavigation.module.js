import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Awesome quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              New quote
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-quotes" activeClassName={classes.active}>
              All quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
