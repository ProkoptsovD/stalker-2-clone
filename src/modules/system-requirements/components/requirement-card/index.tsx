import classNames from 'classnames';

import Icon from '../../../common/components/icon';
import styles from './requirement-card.module.css';

import type { Requirement } from '../../../common/types/system-requirements.type';
import { ICON_NAME } from '../../../common/types/icon.type';

export function RequirementTextCard({
  className,
  requirement,
  containerStyle,
  leftSideStyle,
  rightSideStyle,
  listStyle,
  appendSemicolumn,
  LeftSideComponent,
  RightSideComponent
}: RequirementCardProps) {
  return (
    <article className={classNames(className)}>
      <ul className={classNames(styles.list, listStyle)}>
        {requirement.map((req) => {
          const { displayText, value, joinWith } = req;

          const hasJoinSign = Boolean(joinWith);
          const isArray = Array.isArray(value);

          const NameComponent = () =>
            LeftSideComponent ? (
              LeftSideComponent(req)
            ) : (
              <strong className={classNames(styles.requirement_name, leftSideStyle)}>
                {appendSemicolumn ? displayText + ':' : displayText}
              </strong>
            );

          const ValueComponent = ({ text }: { text: string }) =>
            RightSideComponent ? (
              RightSideComponent(req)
            ) : (
              <p className={classNames(styles.requirement_value, rightSideStyle)}>{text}</p>
            );

          console.log('isArray', isArray);
          console.log('hasJoinSign', hasJoinSign);

          return (
            <li key={displayText} className={classNames(styles.requirement, containerStyle)}>
              <NameComponent />

              {isArray && hasJoinSign ? <ValueComponent text={value.join(joinWith)} /> : null}

              {isArray && !hasJoinSign ? (
                <ul>
                  {value.map((val) => (
                    <li key={val}>
                      <ValueComponent text={val} />
                    </li>
                  ))}
                </ul>
              ) : null}

              {!isArray && !hasJoinSign ? <ValueComponent text={value} /> : null}
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export function RequirementIconCard(props: RequirementCardProps) {
  return (
    <RequirementTextCard
      containerStyle={classNames(styles.icon_card_list)}
      LeftSideComponent={(item) => (
        <Icon name={item.value as ICON_NAME} className={classNames(styles.icon_card)} />
      )}
      RightSideComponent={({ displayText }) => (
        <p className={classNames(styles.requirement_value, styles.icon_card_text)}>{displayText}</p>
      )}
      {...props}
    />
  );
}

export function RequirementListCard(props: RequirementCardProps) {
  return (
    <RequirementTextCard
      listStyle={classNames(styles.list_card_ul)}
      containerStyle={classNames(styles.list_card)}
      leftSideStyle={classNames(styles.list_card_left_side)}
      {...props}
    />
  );
}

export type RequirementCardProps = {
  requirement: Requirement[];
  className?: string;
  containerStyle?: string;
  leftSideStyle?: string;
  rightSideStyle?: string;
  listStyle?: string;
  appendSemicolumn?: boolean;
  LeftSideComponent?: (item: Requirement) => JSX.Element;
  RightSideComponent?: (item: Requirement) => JSX.Element;
};
