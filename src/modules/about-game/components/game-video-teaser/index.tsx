import styles from './game-video-teaser.module.css';

function GameVideoTeaser({ url, descriptionText }: GameVideoTeaserProps) {
  return (
    <figure className={styles.video_wrapper}>
      <div className={styles.video}>
        <img src={url} alt="asas" />
      </div>
      <figcaption className={styles.descr}>{descriptionText}</figcaption>
    </figure>
  );
}

export default GameVideoTeaser;

export type GameVideoTeaserProps = {
  url: string;
  descriptionText: string;
};
