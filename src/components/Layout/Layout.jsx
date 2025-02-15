import { NavLink, Outlet } from "react-router-dom";
import mainLogo from "../../assets/images/main-logo.png";
import css from "./Layout.module.css";
import { BurgerMenuIcon } from "../Icons";

const Layout = () => {
  return (
    <div className={css.containerLayout}>
      <header className={css.header}>
        <NavLink className={css.mainLogo} to="/">
          <img className={css.mainLogoImg} src={mainLogo} alt="Main logo" />
        </NavLink>

        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <NavLink className={css.navLink} to="/">
                Home
              </NavLink>
            </li>
            <li className={css.navItem}>
              <NavLink className={css.navLink} to="/catalog">
                Catalog
              </NavLink>
            </li>
          </ul>
          <BurgerMenuIcon className={css.burgerMenuIcon} />
        </nav>
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
