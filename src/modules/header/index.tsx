import React from 'react';
import classNames from 'classnames';
import { useTransition, animated } from '@react-spring/web';
import { useLocation } from 'react-router-dom';

import { languageList } from '../common/constants/languages.const';
import { ICON_NAME } from '../common/types/icon.type';
import { CLIENT_ROUTER_KEYS } from '../common/constants/app-keys.const';

import { logoAltText, preorderButton } from './constants/header.const';
import { useSticky } from '../../hooks/use-sticky';
import { navLinkList } from './constants/nav-links.const';

import Icon from '../common/components/icon';
import LangSwitcher from '../common/components/lang-switcher';
import stalkerLogoImg from '../../assets/images/png/s2-logo.png';
import styles from './header.module.css';
import useMediaQuery from '../../hooks/use-media-query';
import Hamburger from './components/hamburger';
import ReleaseDate from './components/release-date';
import Navbar from './components/navbar';
import MobileHumburgerMenu from '../common/components/mobile-humburger-menu';
import Button from '../common/components/button';

function Header() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState<boolean>(false);
  const headerRef = React.useRef<HTMLDivElement | null>(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const location = useLocation();
  const includePreorderButton = location.pathname === CLIENT_ROUTER_KEYS.HOME;

  const mobileMenuTransition = useTransition(isMobileMenuOpened, {
    from: {
      transform: 'translateX(-100%)'
    },
    enter: {
      transform: 'translateX(0%)'
    },
    leave: {
      transform: 'translateX(-100%)'
    }
  });

  const { updateScroll } = useSticky(headerRef, styles.scrolled);

  React.useEffect(() => {
    function bodyScrollHandler(): void {
      updateScroll(window.scrollY);
    }

    document.addEventListener('scroll', bodyScrollHandler);

    return () => document.removeEventListener('scroll', bodyScrollHandler);
  }, []);

  return (
    <header>
      <div ref={headerRef} className={classNames(styles.header)}>
        <div className={classNames('container', styles.container)}>
          <div className={classNames(styles.nav_wrapper)}>
            <div className={classNames(styles.logo_wrapper)}>
              <Icon name={ICON_NAME.GSC_LOGO} className={classNames(styles.gsc_logo)} />
            </div>

            {isDesktop ? (
              <>
                <img
                  className={classNames(styles.game_logo)}
                  src={stalkerLogoImg}
                  alt={logoAltText}
                />
                <ReleaseDate />
                <Navbar navLinks={navLinkList} />
              </>
            ) : null}
          </div>

          {!isDesktop ? (
            <>
              <LangSwitcher
                languages={languageList}
                onLanguageChange={(lang) => console.log(lang)}
                className={classNames(styles.lang_switcher)}
              />

              <Hamburger
                className={classNames(styles.hamburger)}
                onClick={setIsMobileMenuOpened.bind(null, !isMobileMenuOpened)}
              />
            </>
          ) : (
            <>
              <LangSwitcher
                languages={languageList}
                onLanguageChange={(lang) => console.log(lang)}
                className={classNames({
                  [styles.lang_switcher]: true,
                  [styles.align_center]: !includePreorderButton
                })}
              />
              {includePreorderButton ? (
                <Button
                  className={styles.preorder}
                  variant="primary"
                  as="button"
                  content={preorderButton}
                />
              ) : null}
            </>
          )}
        </div>
      </div>

      {mobileMenuTransition(
        ({ transform }, isMobileMenuOpened) =>
          isMobileMenuOpened && (
            <animated.div className={classNames(styles.menu)} style={{ transform }}>
              <MobileHumburgerMenu navLinks={navLinkList} />
            </animated.div>
          )
      )}
    </header>
  );
}

export default Header;
