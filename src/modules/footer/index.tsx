import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Icon from '../common/components/icon';
import SocialLinks from '../common/components/social-links';
import styles from './footer.module.css';

import { ICON_NAME } from '../common/types/icon.type';
import { socialLinks } from '../common/constants/social-links.const';
import {
  allRightReservedText,
  ownerRightsText,
  subNavigationLinks,
  tradeMarkText
} from './constants/footer.const';

function Footer() {
  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames('container')}>
        <div className={classNames(styles.content_wrapper)}>
          <div className={classNames(styles.inner_wrapper)}>
            <Icon name={ICON_NAME.PEGI_LOGO} className={classNames(styles.icon)} />

            <div className={classNames(styles.ligal_rights)}>
              <p className={classNames(styles.ligal_rights_text)}>
                {ownerRightsText}
                <small className={classNames(styles.copyright)}>{tradeMarkText}</small>
              </p>
              <p>{allRightReservedText}</p>
            </div>
          </div>

          <SocialLinks
            links={socialLinks}
            className={classNames(styles.socials)}
            iconStyles={styles.social_icon}
          />
        </div>

        <ul className={classNames(styles.sub_navigation)}>
          {subNavigationLinks.map(({ displayName, path }, index) => (
            <li key={index} className={classNames(styles.sub_navigation_item)}>
              <Link to={path} className={classNames(styles.navlink)}>
                {displayName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
