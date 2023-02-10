import React from 'react';

import styles from './about-game.module.css';
import dividerImg from '../../assets/images/webp/line-transparent.webp';
import videoTeaser from '../../assets/videos/preview.mp4';

import Divider from '../common/components/divider';
import GameVideoTeaser from './components/game-video-teaser';
import GameFeatures from './components/game-features';
import Carousel from '../common/components/carousel';
import ReviewCard from '../common/components/review-card';
import Modal from '../common/components/modal';
import Newsletter, { SubscriptionFormData } from '../newsletter';

import { gameFeatures } from './constants/game-features.const';
import { reviews } from './constants/reviews.const';
import { aboutGameTitle, descriptionText, dividerAlt } from './constants/about-game.const';
import YouTubeTeaser from './components/youtube-teaser';
import classNames from 'classnames';

function AboutGame() {
  const [isModalWithTeaserOpened, setIsModalWithTeaserOpened] = React.useState<boolean>(false);
  function formSubmitHandler(fromData: SubscriptionFormData) {}

  return (
    <section className={styles.about_section}>
      <div className="container">
        <h2 className="title">{aboutGameTitle}</h2>

        <Divider variant="radiation" />

        <GameVideoTeaser
          url={videoTeaser}
          descriptionText={descriptionText}
          onClick={() => setIsModalWithTeaserOpened(true)}
        />
        <GameFeatures features={gameFeatures} />

        <img src={dividerImg} className={styles.divider} alt={dividerAlt} />

        <Carousel className={styles.carousel}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Carousel>
      </div>

      <Newsletter onFormSubmit={formSubmitHandler} className="container" />

      {isModalWithTeaserOpened ? (
        <Modal onClose={setIsModalWithTeaserOpened.bind(null, false)}>
          <YouTubeTeaser className={classNames(styles.iframe)} />
        </Modal>
      ) : null}
    </section>
  );
}

export default AboutGame;
