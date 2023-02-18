import React from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import useMediaQuery from '../../../../hooks/use-media-query';
import styles from './edition-page.module.css';

import { editionPageLayoutTitle } from '../../constants/layout.const';
import { CLIENT_ROUTER_KEYS } from '../../constants/app-keys.const';
import { updateCustomCssProperty } from '../../../../utils/update-custom-css-property';

function EditionPageLayout({ children, className }: EditionPageLayoutProps) {
  const isMobileScreen = useMediaQuery('(max-width: 639px)');
  const location = useLocation();
  const isEditionPage = [CLIENT_ROUTER_KEYS.DIGITAL, CLIENT_ROUTER_KEYS.PHYSICAL].some(
    (path) => path === location.pathname
  );

  React.useEffect(() => {
    if (isMobileScreen && isEditionPage) {
      const updateHeaderHeight = updateCustomCssProperty(document.documentElement);

      updateHeaderHeight('--height-delta', '0rem');
    }
  }, []);

  return (
    <section className={classNames(styles.edition_page, className)}>
      <h1 className="hidden">{editionPageLayoutTitle}</h1>
      <div className={classNames('container', styles.container)}>{children}</div>
    </section>
  );
}

export default EditionPageLayout;

export type EditionPageLayoutProps = {
  children: React.ReactNode;
  className?: string;
};
