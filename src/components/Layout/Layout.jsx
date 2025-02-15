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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${css.navLink} ${css.active}` : css.navLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className={css.navItem}>
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  isActive ? `${css.navLink} ${css.active}` : css.navLink
                }
              >
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
        <BurgerMenuIcon className={css.burgerMenuIcon} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
