import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import type { NavbarProps } from '../../types/navbar.type';
import styles from './navbar.module.css';

function Navbar({ navLinks, Component, onClick }: NavbarProps) {
  const location = useLocation();

  const [activeLinkName, setActiveLinkName] = React.useState<string>(location.hash || '/');

  function navLinkClickHandler(path: string) {
    setActiveLinkName(path);

    if (onClick) onClick();
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.link_list}>
        {navLinks.map(({ path, title }, index) => {
          if (Component) {
            const JsxElem = () => Component({ path, title }, index);

            return (
              <li key={title} onClick={navLinkClickHandler.bind(null, path)}>
                <JsxElem />
              </li>
            );
          }

          const isActive = activeLinkName === path;
          const cssClass = isActive ? styles.active + ' ' + styles.link : styles.link;

          return (
            <li key={title}>
              <NavLink
                to={path}
                className={cssClass}
                onClick={navLinkClickHandler.bind(null, path)}
              >
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
