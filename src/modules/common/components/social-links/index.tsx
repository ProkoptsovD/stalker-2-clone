import classNames from 'classnames';

import Icon from '../icon';

import useMediaQuery from '../../../../hooks/use-media-query';
import styles from './social-links.module.css';

import type { SocialLink } from '../../types/social-links.type';

function SocialLinks({ className, links }: SocialLinksProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className={classNames(styles.wrapper)}>
      <ul className={classNames(styles.list, className)}>
        {links.map(({ mainIcon, alternativeIcon, url }, index) => (
          <li key={index}>
            <a
              href={url}
              className={classNames(styles.link)}
              target="_blank"
              rel="noopener noreferer"
            >
              <Icon
                name={isDesktop ? mainIcon : alternativeIcon}
                className={classNames(styles.icon)}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;

export type SocialLinksProps = {
  className?: string;
  links: SocialLink[];
};
