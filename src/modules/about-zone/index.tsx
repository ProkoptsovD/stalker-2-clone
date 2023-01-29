import Accordion from '../common/components/accordion';
import Divider from '../common/components/divider';

import styles from './about-zone.module.css';
import {
  aboutZoneHeadline,
  aboutZoneParagraphOne,
  aboutZoneParagraphThree,
  aboutZoneParagraphTwo
} from './constants/about-zone.const';

function AboutZone() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="title">{aboutZoneHeadline}</h2>

        <Divider variant="radiation" />

        <Accordion>
          <p className={styles.paragraph}>{aboutZoneParagraphOne}</p>
          <p className={styles.paragraph}>{aboutZoneParagraphTwo}</p>
          <p className={styles.paragraph}>{aboutZoneParagraphThree}</p>
        </Accordion>
      </div>
    </section>
  );
}

export default AboutZone;
