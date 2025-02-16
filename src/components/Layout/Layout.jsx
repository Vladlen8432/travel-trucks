import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import mainLogo from "../../assets/images/main-logo.png";
import css from "./Layout.module.css";
import { BurgerMenuIcon, CloseBtnIcon } from "../Icons";

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <div className={css.burgerMenuIcon} onClick={openModal}>
          <BurgerMenuIcon />
        </div>
      </header>
      <main>
        <Outlet />
      </main>

      {isModalOpen && (
        <div className={css.backdrop} onClick={closeModal}>
          <div className={css.modal} onClick={(e) => e.stopPropagation()}>
            <ul className={css.modalList}>
              <li className={css.modalListItem}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${css.modalLink} ${css.active}` : css.modalLink
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className={css.modalListItem}>
                <NavLink
                  to="/catalog"
                  className={({ isActive }) =>
                    isActive ? `${css.modalLink} ${css.active}` : css.modalLink
                  }
                >
                  Catalog
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            className={css.closeBtn}
            type="button"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <CloseBtnIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
