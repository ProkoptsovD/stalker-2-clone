import classNames from 'classnames';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { CLIENT_ROUTER_KEYS } from '../../../common/constants/app-keys.const';
import type { NavbarProps } from '../../types/navbar.type';

import styles from './navbar.module.css';

function Navbar({ navLinks, listStyles, activeLinkStyles, Component, onClick }: NavbarProps) {
  const location = useLocation();

  const [activeLinkName, setActiveLinkName] = React.useState<string>(
    location.pathname || CLIENT_ROUTER_KEYS.HOME
  );

  function navLinkClickHandler(path: string) {
    setActiveLinkName(path);

    if (onClick) onClick();
  }

  return (
    <nav className={styles.navbar}>
      <ul className={classNames(styles.link_list, listStyles)}>
        {navLinks.map(({ path, title }, index) => {
          if (Component) {
            const JsxElem = () => Component({ path, title }, index);

            return (
              <li key={title} onClick={navLinkClickHandler.bind(null, path)}>
                <JsxElem />
              </li>
            );
          }

          const isActive = path === activeLinkName;
          const cssClass = isActive
            ? (activeLinkStyles ?? styles.active) + ' ' + styles.link
            : styles.link;

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
