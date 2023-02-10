import classNames from 'classnames';
import styles from './youtube.module.css';

function YouTubeTeaser({ className }: YouTubeTeaserProps) {
  return (
    <iframe
      className={classNames(styles.iframe, className)}
      src="https://www.youtube.com/embed/ZNLaKOlXVvw"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

export default YouTubeTeaser;

export type YouTubeTeaserProps = {
  className?: string;
};
