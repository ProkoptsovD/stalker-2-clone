import React from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import Icon from '../common/components/icon';
import Divider from '../common/components/divider';
import Tooltip from '../common/components/tooltip';
import Slider from '../common/components/slider';
import EditionTabs from './components/edition-tabs';

import styles from './editions.module.css';

import { ICON_NAME } from '../common/types/icon.type';
import {
  editionsSectionHeadline,
  editionsSectionSubHeadline,
  preorderBonuses
} from './constants/editions.const';

function Editions({ className }: EditionsProps) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className={classNames(styles.editions, className)}>
      <h2 className={classNames('title', styles.title)}>{editionsSectionHeadline}</h2>

      <div className={styles.preorder_bonus}>
        <Icon className={styles.plus_icon} name={ICON_NAME.PLUS} />

        <h3 className={styles.subheadline}>{editionsSectionSubHeadline}</h3>

        <div className={styles.tooltip_wrapper}>
          <Icon className={styles.info_icon} name={ICON_NAME.INFO} />

          <Tooltip
            className={classNames('invisible', styles.tooltip)}
            items={preorderBonuses}
            keyExtractor={(bonus) => bonus}
          />
        </div>
      </div>

      <Divider className={classNames(styles.divider)} variant="radiation" />

      <EditionTabs items={['D.I.G.I.T.A.L.', 'P.H.Y.S.I.C.A.L.']} />

      <Slider
        headerItems={['standard edition', 'deluxe edition', 'ultimate edition']}
        bodyItems={['1', '2', '3']}
        RenderBodyItem={(el) => {
          return <p className={styles.test}>{el}</p>;
        }}
        headerStyle={classNames({ [styles.sticky]: inView, [styles.static]: !inView })}
      />
    </section>
  );
}

export default React.memo(Editions);

export interface EditionsProps {
  className?: string;
}
