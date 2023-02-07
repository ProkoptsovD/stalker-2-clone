import classNames from 'classnames';

import Icon from '../icon';

import useMediaQuery from '../../../../hooks/use-media-query';
import styles from './social-links.module.css';

import type { SocialLink } from '../../types/social-links.type';

function SocialLinks({ className, links, withBgImage = false, iconStyles }: SocialLinksProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div
      className={classNames({
        [styles.wrapper]: true,
        [styles.bg]: withBgImage,
        [className as string]: !!className
      })}
    >
      <ul className={classNames(styles.list)}>
        {links.map(({ mainIcon, alternativeIcon, url }, index) => (
          <li key={index}>
            <a
              href={url}
              className={classNames(styles.link)}
              target="_blank"
              rel="noopener noreferer"
            >
              <Icon
                name={isDesktop && withBgImage ? mainIcon : alternativeIcon}
                className={classNames(styles.icon, iconStyles)}
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
  withBgImage?: boolean;
  iconStyles?: string;
};
