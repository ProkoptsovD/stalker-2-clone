import { ICON_NAME } from '../../../common/types/icon.type';

import Icon from '../../../common/components/icon';
import styles from './release-date.module.css';
import { availableDate, availableText } from '../../../common/constants/release-date.const';

function ReleaseDate() {
  return (
    <div className={styles.date_available}>
      <strong className={styles.date_available_text}>{availableText}</strong>

      <Icon name={ICON_NAME.W_LINE} className={styles.line} />

      <strong className={styles.date_available_year}>
        <time dateTime={availableDate}>{availableDate}</time>
      </strong>
    </div>
  );
}

export default ReleaseDate;
