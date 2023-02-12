import classNames from 'classnames';

import styles from './game-video-teaser.module.css';

function GameVideoTeaser({ url, className, videoStyles, onClick }: GameVideoTeaserProps) {
  function clickHandler() {
    if (onClick) onClick();
  }

  return (
    <figure className={classNames(styles.video_wrapper, className)}>
      <div className={classNames(styles.video, videoStyles)}>
        <video onClick={clickHandler} src={url} muted autoPlay playsInline />
      </div>
    </figure>
  );
}

export default GameVideoTeaser;

export type GameVideoTeaserProps = {
  url: string;
  onClick?: () => void;
  className?: string;
  videoStyles?: string;
};
