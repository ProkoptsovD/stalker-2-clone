import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './mobile-humburger-menu.module.css';

import type { NavbarLink } from '../../../header/types/navbar.type';

function MobileHumburgerMenu({ className, navLinks }: MobileHumburgerMenuProps) {
  const activeStyle = {
    opacity: '1'
  };

  return (
    <div className={classNames(styles.humburger_menu, className)}>
      <ul className={classNames(styles.link_list)}>
        {navLinks.map(({ path, title }) => (
          <li key={title} className={classNames(styles.link_list_item)}>
            <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileHumburgerMenu;

export type MobileHumburgerMenuProps = {
  className?: string;
  navLinks: NavbarLink[];
};
