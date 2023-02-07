import classNames from 'classnames';

import Divider from '../common/components/divider';
import BoxWithBorder from './components/box-with-border';
import Distributors from '../common/components/distributors';
import styles from './system-requirements.module.css';

import { headlineText } from './constants/section-text.const';
import { distributorList } from '../common/constants/distributors.const';
import { systemRequirements } from '../../__mocks__/system-requirements.mock';
import { SYSTEM_REQUIREMENTS_NAMES } from '../common/types/system-requirements.type';
import {
  RequirementIconCard,
  RequirementListCard,
  RequirementTextCard
} from './components/requirement-card';

function SystemRequirements() {
  return (
    <section className={classNames(styles.system_requirements_section)}>
      <div className={classNames('container', styles.container)}>
        <h2 className={classNames('title', styles.headline)}>{headlineText}</h2>
        <Divider className={classNames(styles.divider)} variant="radiation" />

        <div className={classNames(styles.requirements_wrapper)}>
          {systemRequirements.map(({ requirement, data }, idx) => {
            return (
              <BoxWithBorder key={idx} title={requirement}>
                {() => (
                  <>
                    {requirement === SYSTEM_REQUIREMENTS_NAMES.MINIMUM && (
                      <RequirementTextCard requirement={data} appendSemicolumn />
                    )}

                    {requirement === SYSTEM_REQUIREMENTS_NAMES.RECOMMENDED && (
                      <RequirementTextCard requirement={data} appendSemicolumn />
                    )}

                    {requirement === SYSTEM_REQUIREMENTS_NAMES.GAMEPLAY && (
                      <RequirementIconCard requirement={data} />
                    )}

                    {requirement === SYSTEM_REQUIREMENTS_NAMES.LOCALIZATION && (
                      <RequirementListCard requirement={data} appendSemicolumn />
                    )}
                  </>
                )}
              </BoxWithBorder>
            );
          })}
        </div>

        <Distributors items={distributorList} />
      </div>
    </section>
  );
}

export default SystemRequirements;
