import classNames from 'classnames';

import {
  buyButtonText,
  joinTheBrotherHood,
  joinTheHuntHeadline,
  prevGamesHeadline,
  prevGamesPosters,
  statistics
} from './constants/prev-games.const';
import { dividerAlt } from '../about-game/constants/about-game.const';
import { socialLinks } from '../common/constants/social-links.const';
import { ICON_NAME } from '../common/types/icon.type';

import Divider from '../common/components/divider';
import Button from '../common/components/button';
import SocialLinks from '../common/components/social-links';

import dividerImg from '../../assets/images/webp/line-transparent.webp';
import styles from './prev-games.module.css';

function PrevGames() {
  return (
    <section className={classNames(styles.prev_games_section)}>
      <div className="container">
        <h2 className={classNames('title', styles.headline)}>{prevGamesHeadline}</h2>
        <Divider className={classNames(styles.divider)} variant="radiation" />

        <div className={classNames(styles.wrapper)}>
          <ul className={classNames(styles.flex)}>
            {prevGamesPosters.map(({ src, alt, externalLink }) => (
              <li className={classNames(styles.flex_child)} key={alt}>
                <a
                  href={externalLink}
                  className={classNames(styles.link)}
                  target="_blank"
                  rel="noopener noreferer"
                >
                  <img src={src} alt={alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Button
          content={buyButtonText}
          as="button"
          variant="white"
          className={classNames(styles.buy_button)}
        />

        <img src={dividerImg} className={classNames(styles.divider_alt)} alt={dividerAlt} />

        <h3 className={classNames(styles.sub_headline)}>{joinTheHuntHeadline}</h3>

        <ul className={styles.stats}>
          {statistics.map(({ details, statValue }, index) => (
            <li key={index} className={classNames(styles.stats_item)}>
              <strong className={classNames(styles.with_accent)}>{statValue}</strong>
              <p className={classNames(styles.regular_text)}>{details}</p>
            </li>
          ))}
        </ul>

        <SocialLinks links={socialLinks} withBgImage className={classNames(styles.socials)} />

        <Button
          className={classNames(styles.join_brotherhood)}
          iconName={ICON_NAME.DISCORD}
          content={joinTheBrotherHood}
          as="button"
          variant="primary"
        />
      </div>
    </section>
  );
}

export default PrevGames;
