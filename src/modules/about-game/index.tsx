import { aboutGameTitle, descriptionText, dividerAlt } from './constants/about-game.const';

import styles from './about-game.module.css';
import dividerImg from '../../assets/images/webp/line-transparent.webp';

import Divider from '../common/components/divider';
import img from '../../assets/images/webp/hero.webp';
import GameVideoTeaser from './components/game-video-teaser';
import GameFeatures from './components/game-features';
import Carousel from '../common/components/carousel';
import ReviewCard from '../common/components/ review-card';

import { gameFeatures } from './constants/game-features.const';
import { reviews } from './constants/reviews.const';

function AboutGame() {
  return (
    <section className={styles.about_section}>
      <div className="container">
        <h2 className="title">{aboutGameTitle}</h2>

        <Divider />

        <GameVideoTeaser url={img} descriptionText={descriptionText} />
        <GameFeatures features={gameFeatures} />

        <img src={dividerImg} className={styles.divider} alt={dividerAlt} />

        <Carousel>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default AboutGame;
