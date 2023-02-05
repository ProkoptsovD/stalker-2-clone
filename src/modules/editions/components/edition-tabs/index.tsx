import React from 'react';
import classNames from 'classnames';

import Icon from '../../../common/components/icon';
import styles from './edition-tabs.module.css';

import { ICON_NAME } from '../../../common/types/icon.type';

function EditionTabs<T>({
  className,
  items,
  onTabChange,
  Component,
  ...restProps
}: EditionTabsProps<T>) {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const shouldHideRightArrow = items.length - 1 === activeTab;
  const shouldHideLeftArrow = 0 === activeTab;

  React.useEffect(() => {
    if (onTabChange) onTabChange(activeTab);
  }, [activeTab]);

  function clickHandler(index: number) {
    setActiveTab(index);
  }

  console.log(activeTab);

  return (
    <ul className={classNames(styles.tablist, className)} {...restProps}>
      <li
        className={classNames({
          [styles.button_placeholder]: true,
          [styles.hidden]: shouldHideLeftArrow
        })}
      >
        <button
          type="button"
          className={classNames(styles.button, styles.prev)}
          onClick={clickHandler.bind(null, 0)}
        >
          <Icon name={ICON_NAME.CHEVRON_LEFT} />
        </button>
      </li>

      {items.map((item, index) => {
        const Element = () =>
          Component ? (
            Component(item)
          ) : (
            <button
              type="button"
              className={classNames({
                [styles.button]: true,
                [styles.active]: index === activeTab
              })}
            >
              {item as React.ReactNode}
            </button>
          );

        return (
          <li
            key={index}
            onClick={clickHandler.bind(null, index)}
            className={classNames({ [styles.tab]: true, [styles.active]: index === activeTab })}
          >
            <Element />
          </li>
        );
      })}

      <li
        className={classNames({
          [styles.button_placeholder]: true,
          [styles.hidden]: shouldHideRightArrow
        })}
      >
        <button
          type="button"
          className={classNames(styles.button, styles.next)}
          onClick={clickHandler.bind(null, items.length - 1)}
        >
          <Icon name={ICON_NAME.CHEVRON_RIGHT} />
        </button>
      </li>
    </ul>
  );
}

export default EditionTabs;

export type EditionTabsProps<T> = {
  items: T[];
  Component?: (item: T) => JSX.Element;
  onTabChange?: (tabIndex: number) => void;
} & React.HTMLAttributes<HTMLUListElement>;
