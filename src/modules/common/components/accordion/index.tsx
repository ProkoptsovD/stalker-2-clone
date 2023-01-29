import React from 'react';
import styles from './accordion.module.css';

function Accordion({ className = '', children, onAccordionExtend }: AccordionProps) {
  const accordionRef = React.useRef<HTMLDivElement | null>(null);

  function expandButtonClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;
    const isAccordionExpanded = accordionRef.current?.getAttribute('aria-expanded') === 'true';

    if (accordionRef.current) {
      if (isAccordionExpanded) {
        accordionRef.current.style.maxHeight = '10.5rem';
        accordionRef.current.setAttribute('aria-expanded', 'false');
      } else {
        const { children } = accordionRef.current;
        const totalHeight = [...children].reduce(
          (total, { clientHeight }) => (total += clientHeight),
          0
        );
        accordionRef.current.style.maxHeight = `${totalHeight}px`;
        accordionRef.current.setAttribute('aria-expanded', 'true');
      }
    }

    button.classList.toggle(styles.expanded);

    if (onAccordionExtend) onAccordionExtend();
  }

  return (
    <div className={styles.wrapper}>
      <div
        ref={accordionRef}
        aria-expanded="false"
        aria-label="accordion"
        aria-labelledby="expandbutton"
        className={[styles.accordion, className].join(' ')}
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
  onAccordionExtend?: () => void;
  children: React.ReactNode;
  className?: string;
}
