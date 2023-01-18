import { ICON_NAME } from '../../../common/types/icon.type';

import Icon from '../../../common/components/icon';
import styles from './release-date.module.css';

function ReleaseDate() {
  return (
    <div className={styles.date_available}>
      <strong className={styles.date_available_text}>Available</strong>

      <Icon name={ICON_NAME.W_LINE} className={styles.line} />

      <strong className={styles.date_available_year}>
        <time dateTime="2023">2023</time>
      </strong>
    </div>
  );
}

export default ReleaseDate;
