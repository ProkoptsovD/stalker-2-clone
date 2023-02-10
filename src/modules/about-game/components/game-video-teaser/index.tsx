import styles from './game-video-teaser.module.css';

function GameVideoTeaser({ url, descriptionText, onClick }: GameVideoTeaserProps) {
  function clickHandler() {
    if (onClick) onClick();
  }

  return (
    <figure className={styles.video_wrapper}>
      <div className={styles.video}>
        <video onClick={clickHandler} src={url} muted autoPlay playsInline />
      </div>
      <figcaption className={styles.descr}>{descriptionText}</figcaption>
    </figure>
  );
}

export default GameVideoTeaser;

export type GameVideoTeaserProps = {
  url: string;
  descriptionText: string;
  onClick?: () => void;
};
