import { reviewerAlt } from '../../constants/review-card.const';
import { Review } from '../../types/review-card.type';

import styles from './review-card.module.css';

function ReviewCard({ img, quote, author, className = '' }: ReviewCardProps) {
  return (
    <div className={`${styles.card} ${className}`}>
      <img src={img} className={styles.image} alt={author + ' ' + reviewerAlt} />
      <q className={styles.quote}>{quote}</q>
      <small className={styles.author}>{` ${author}`}</small>
    </div>
  );
}

export default ReviewCard;

export type ReviewCardProps = Review & {
  className?: string;
};
