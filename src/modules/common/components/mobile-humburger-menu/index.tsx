import classNames from 'classnames';

import styles from './mobile-humburger-menu.module.css';
import useHasTouchScreen from '../../../../hooks/use-has-touch-screen';

import Navbar from '../../../header/components/navbar';
import type { NavbarLink } from '../../../header/types/navbar.type';

function MobileHumburgerMenu({ className, navLinks, onClick }: MobileHumburgerMenuProps) {
  const hasToushScreen = useHasTouchScreen();

  function linkClickHandler() {
    if (onClick) onClick();
  }

  return (
    <div className={classNames(styles.humburger_menu, className)}>
      <Navbar
        navLinks={navLinks}
        listStyles={styles.link_list}
        activeLinkStyles={classNames({ [styles.active]: true, [styles.desktop]: !hasToushScreen })}
        onClick={linkClickHandler}
      />
    </div>
  );
}

export default MobileHumburgerMenu;

export type MobileHumburgerMenuProps = {
  className?: string;
  navLinks: NavbarLink[];
  onClick?: () => void;
};
