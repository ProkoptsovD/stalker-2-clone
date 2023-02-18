import React from 'react';
import classNames from 'classnames';

import styles from './tooltip.module.css';

function Tooltip<T>({ items, className, keyExtractor, RenderItem, id = '' }: TooltipProps<T>) {
  const cssClasses = classNames(styles.tooltip_body, className);
  const item = keyExtractor(items[0]);

  const CustomComponent = () =>
    RenderItem ? (
      RenderItem(item)
    ) : (
      <p id={id} role="tooltip" className={classNames(cssClasses, styles.no_list_style)}>
        {item as React.ReactNode}
      </p>
    );

  return items.length > 1 ? (
    <ul id={id} className={cssClasses} role="tooltip">
      {items
        ? items.map((item) => {
            const key = keyExtractor(item);

            if (RenderItem) {
              const Component = () => RenderItem(key);

              return <Component />;
            }

            return <li key={key as string}>{key as React.ReactNode}</li>;
          })
        : null}
    </ul>
  ) : (
    <CustomComponent />
  );
}

export default Tooltip;

export interface TooltipProps<T> {
  items: T[];
  id?: string;
  className?: string;
  keyExtractor: KeyExtractor<T>;
  RenderItem?: RenderItem<T>;
}

export type KeyExtractor<T> = (item: T) => T | T[keyof T];
export type RenderItem<T> = (item: T | T[keyof T]) => JSX.Element;
