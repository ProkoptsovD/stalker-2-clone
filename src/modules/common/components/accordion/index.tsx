import classNames from 'classnames';
import React, { MutableRefObject } from 'react';
import styles from './accordion.module.css';

function Accordion({
  className = '',
  children,
  onAccordionExtend,
  onAccordionShrink
}: AccordionProps) {
  const accordionRef = React.useRef<HTMLDivElement | null>(null);

  function expandButtonClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;
    const isAccordionExpanded = accordionRef.current?.getAttribute('aria-expanded') === 'true';

    if (accordionRef.current) {
      if (isAccordionExpanded) {
        accordionRef.current.style.maxHeight = '10.5rem';
        accordionRef.current.setAttribute('aria-expanded', 'false');

        if (onAccordionShrink) onAccordionShrink(accordionRef);
      } else {
        const { children } = accordionRef.current;
        const totalHeight = [...children].reduce(
          (total, { clientHeight }) => (total += clientHeight),
          0
        );
        accordionRef.current.style.maxHeight = `${totalHeight}px`;
        accordionRef.current.setAttribute('aria-expanded', 'true');

        if (onAccordionExtend) onAccordionExtend(accordionRef);
      }
    }

    button.classList.toggle(styles.expanded);
  }

  return (
    <div className={styles.wrapper}>
      <div
        ref={accordionRef}
        aria-expanded="false"
        aria-label="accordion"
        aria-labelledby="expandbutton"
        className={classNames(styles.accordion, className)}
      >
        {children}
      </div>
      <button
        id="expandbutton"
        onClick={expandButtonClickHandler}
        className={styles.expand_button}
        type="button"
      />
    </div>
  );
}

export default Accordion;

export interface AccordionProps {
  onAccordionExtend?: (ref: MutableRefObject<HTMLDivElement | null>) => void;
  onAccordionShrink?: (ref: MutableRefObject<HTMLDivElement | null>) => void;
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
}
