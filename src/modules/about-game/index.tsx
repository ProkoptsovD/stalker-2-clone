import React from 'react';
import classNames from 'classnames';

import styles from './about-game.module.css';
import dividerImg from '../../assets/images/webp/line-transparent.webp';
import videoTeaser from '../../assets/videos/preview.mp4';

import Divider from '../common/components/divider';
import GameVideoTeaser from './components/game-video-teaser';
import GameFeatures from './components/game-features';
import Carousel from '../common/components/carousel';
import ReviewCard from '../common/components/review-card';
import Modal from '../common/components/modal';
import YouTubeTeaser from './components/youtube-teaser';
import ActivationEmailSent from '../newsletter/components/activation-email-sent/inedex';
import Newsletter, { SubscriptionFormData } from '../newsletter';

import { gameFeatures } from './constants/game-features.const';
import { reviews } from './constants/reviews.const';
import { aboutGameTitle, descriptionText, dividerAlt } from './constants/about-game.const';

function AboutGame() {
  const [isModalWithTeaserOpened, setIsModalWithTeaserOpened] = React.useState<boolean>(false);
  const [isFormSubmited, setIsFormSubmited] = React.useState<boolean>(false);

  const activationEmailRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (isFormSubmited && activationEmailRef.current) {
      activationEmailRef.current.scrollIntoView({ block: 'center' });
    }
  }, [isFormSubmited]);

  function formSubmitHandler(fromData: SubscriptionFormData) {
    setIsFormSubmited(true);
    console.log("No real API-call is processed. It's a fake subscription", fromData);
  }

  return (
    <section className={styles.about_section}>
      <div className="container">
        <h2 className="title">{aboutGameTitle}</h2>

        <Divider className={styles.rad_divider} variant="radiation" />

        <div className={styles.flex}>
          <GameVideoTeaser
            url={videoTeaser}
            onClick={setIsModalWithTeaserOpened.bind(null, true)}
            videoStyles={styles.video_teaser}
          />
          <div className={classNames(styles.flex_inner)}>
            <p className={styles.descr}>{descriptionText}</p>
            <GameFeatures features={gameFeatures} className={classNames(styles.features)} />
          </div>
        </div>

        <img src={dividerImg} className={styles.divider} alt={dividerAlt} />

        <Carousel className={styles.carousel}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Carousel>
      </div>

      {!isFormSubmited ? (
        <Newsletter
          onFormSubmit={formSubmitHandler}
          className={classNames('container', styles.newsletter)}
        />
      ) : (
        <ActivationEmailSent ref={activationEmailRef} />
      )}

      {isModalWithTeaserOpened ? (
        <Modal onClose={setIsModalWithTeaserOpened.bind(null, false)}>
          <div className="container">
            <YouTubeTeaser className={classNames(styles.iframe)} />
          </div>
        </Modal>
      ) : null}
    </section>
  );
}

export default AboutGame;
