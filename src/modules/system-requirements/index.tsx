import React from 'react';
import classNames from 'classnames';

import Divider from '../common/components/divider';
import BoxWithBorder from './components/box-with-border';
import Distributors from '../common/components/distributors';
import Icon from '../common/components/icon';
import styles from './system-requirements.module.css';

import { headlineText } from './constants/section-text.const';
import { distributorList } from '../common/constants/distributors.const';
import { ICON_NAME } from '../common/types/icon.type';
import {
  SystemRequirementsType,
  SYSTEM_REQUIREMENTS_NAMES
} from '../common/types/system-requirements.type';
import {
  RequirementIconCard,
  RequirementListCard,
  RequirementTextCard
} from './components/requirement-card';
import { useApi } from '../../hooks/use-api.hook';
import { mockDataService } from '../common/services/mock.service';

function SystemRequirements() {
  const systemRequirements =
    useApi<SystemRequirementsType>(mockDataService.getSystemRequirements.bind(mockDataService)) ??
    [];

  return (
    <section className={classNames(styles.system_requirements_section)}>
      <div className={classNames('container')}>
        <h2 className={classNames('title', styles.headline)}>{headlineText}</h2>
        <Divider className={classNames(styles.divider)} variant="radiation" />

        <div className={classNames(styles.requirements_wrapper)}>
          {systemRequirements.reduce((sysReqs, { data, requirement }, idx, originalArr) => {
            const lastIteration = originalArr.length - 1 === idx;
            const half = originalArr.length / 2;
            let Card: () => JSX.Element;

            switch (requirement) {
              case SYSTEM_REQUIREMENTS_NAMES.MINIMUM:
                Card = () => <RequirementTextCard requirement={data} appendSemicolumn />;
                break;
              case SYSTEM_REQUIREMENTS_NAMES.RECOMMENDED:
                Card = () => <RequirementTextCard requirement={data} appendSemicolumn />;
                break;
              case SYSTEM_REQUIREMENTS_NAMES.GAMEPLAY:
                const lastItem = data[data.length - 1];
                const restItems = data.slice(0, data.length - 1);

                const IconCard = () => (
                  <div className={classNames(styles.icon_card)}>
                    <p className={classNames(styles.icon_card_text)}>{lastItem.displayText}</p>
                    <Icon
                      className={classNames(styles.icon_card_svg)}
                      name={lastItem.value as ICON_NAME}
                    />
                  </div>
                );

                Card = () => (
                  <RequirementIconCard
                    requirement={restItems}
                    className={classNames(styles.icon_card_wrapper)}
                  >
                    <IconCard />
                  </RequirementIconCard>
                );
                break;
              case SYSTEM_REQUIREMENTS_NAMES.LOCALIZATION:
                Card = () => <RequirementListCard requirement={data} appendSemicolumn />;
                break;
              default:
                Card = () => <></>;
            }

            sysReqs.push(() => (
              <BoxWithBorder
                key={idx}
                title={requirement}
                innerWrapper={classNames({
                  [styles.box_right]: idx >= half,
                  [styles.box_left]: idx < half
                })}
                className={classNames(styles.box)}
              >
                {() => <Card />}
              </BoxWithBorder>
            ));

            if (lastIteration) {
              const half = originalArr.length / 2;
              const part1 = sysReqs.slice(0, half) as Array<() => JSX.Element>;
              const part2 = sysReqs.slice(half) as Array<() => JSX.Element>;

              // makes two column wrappers for flex layout
              sysReqs = [
                <div key={1} className={classNames(styles.column, styles.left)}>
                  {part1.map((El, idx) => (
                    <El key={idx} />
                  ))}
                </div>,
                <div key={2} className={classNames(styles.column, styles.right)}>
                  {part2.map((El, idx) => (
                    <El key={idx} />
                  ))}
                </div>
              ];
            }

            return sysReqs;
          }, [] as any)}
        </div>

        <Distributors items={distributorList} className={classNames(styles.distributors)} />
      </div>
    </section>
  );
}

export default SystemRequirements;
