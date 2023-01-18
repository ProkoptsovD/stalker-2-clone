import React from 'react';

import { languageList } from '../common/constants/languages.const';
import { ICON_NAME } from '../common/types/icon.type';

import { logoAltText } from './constants/header.const';
import { useSticky } from '../../hooks/use-sticky';
import { navLinkList } from './constants/nav-links.const';
import { useCustomCursor } from '../../hooks/use-custom-cursor';

import Icon from '../common/components/icon';
import LangSwitcher from '../common/components/lang-switcher';
import stalkerLogoImg from '../../assets/images/png/s2-logo.png';
import styles from './header.module.css';
import useMediaQuery from '../../hooks/use-media-query';
import Hamburger from './components/hamburger';
import ReleaseDate from './components/release-date';
import Navbar from './components/navbar';

function Header() {
  const headerRef = React.useRef<HTMLElement | null>(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const { updateScroll } = useSticky('header', styles.scrolled);

  useCustomCursor({ elemRef: headerRef, classWithCursorStyles: 'cursor' });

  React.useEffect(() => {
    function bodyScrollHandler(): void {
      updateScroll(window.scrollY);
    }

    document.addEventListener('scroll', bodyScrollHandler);

    return () => document.removeEventListener('scroll', bodyScrollHandler);
  }, []);

  return (
    <header id="header" ref={headerRef} className={styles.header}>
      <div className={styles.nav_wrapper}>
        <div className={styles.logo_wrapper}>
          <Icon name={ICON_NAME.GSC_LOGO} className={styles.gsc_logo} />
        </div>

        {isDesktop ? (
          <>
            <img className={styles.game_logo} src={stalkerLogoImg} alt={logoAltText} />
            <ReleaseDate />
            <Navbar navLinks={navLinkList} />
          </>
        ) : null}
      </div>

      <LangSwitcher
        languages={languageList}
        onLanguageChange={(lang) => console.log(lang)}
        className={styles.lang_switcher}
      />

      <Hamburger className={styles.hamburger} />
    </header>
  );
}

export default Header;
