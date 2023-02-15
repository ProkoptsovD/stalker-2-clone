import React from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import Icon from '../common/components/icon';
import Divider from '../common/components/divider';
import Tooltip from '../common/components/tooltip';
import Slider from '../common/components/slider';
import EditionTabs from './components/edition-tabs';
import EditionCard from '../common/components/edition-card';

import editionList from '../../__mocks__/editions.mock';
import useHasTouchScreen from '../../hooks/use-has-touch-screen';

import styles from './editions.module.css';

import { ICON_NAME } from '../common/types/icon.type';
import {
  editionsSectionHeadline,
  editionsSectionSubHeadline,
  editionsTypes,
  editionVaraints,
  preorderBonuses
} from './constants/editions.const';

function Editions({ className }: EditionsProps) {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const { ref, inView } = useInView({ threshold: 0.3 });
  const hasTouchScreen = useHasTouchScreen();

  const isDigitalVisible = activeTab === 0;

  return (
    <section id="editions" ref={ref} className={classNames(styles.editions, className)}>
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

      <EditionTabs items={editionsTypes} defaultActiveTab={0} onTabChange={setActiveTab} />

      {hasTouchScreen ? (
        <>
          <Slider
            headerItems={editionVaraints}
            headerStyle={classNames({
              [styles.sticky]: inView,
              [styles.static]: !inView,
              [styles.hidden]: !isDigitalVisible
            })}
          >
            {editionList.digital.map((edition, index) => (
              <EditionCard key={index} {...edition} />
            ))}
          </Slider>
          <Slider
            headerItems={editionVaraints}
            headerStyle={classNames({
              [styles.sticky]: inView,
              [styles.static]: !inView,
              [styles.hidden]: isDigitalVisible
            })}
          >
            {editionList.physical.map((edition, index) => (
              <EditionCard key={index} backFlipStyles={styles.physical_backflip} {...edition} />
            ))}
          </Slider>
        </>
      ) : (
        <>
          <div
            className={classNames({
              container: true,
              [styles.editions_wrapper]: true,
              [styles.hidden]: !isDigitalVisible
            })}
          >
            {editionList.digital.map((edition, index) => (
              <EditionCard key={index} {...edition} />
            ))}
          </div>
          <div
            className={classNames({
              container: true,
              [styles.editions_wrapper]: true,
              [styles.hidden]: isDigitalVisible
            })}
          >
            {editionList.physical.map((edition, index) => (
              <EditionCard key={index} backFlipStyles={styles.physical_backflip} {...edition} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default React.memo(Editions);

export interface EditionsProps {
  className?: string;
}
