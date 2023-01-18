import React from 'react';

export function useSticky(selector: string, className: string) {
  const prevScrollPos = React.useRef<number>(window.pageYOffset);

  const updateScroll = (currentScrollPos: number): void => {
    const elemRef = document.querySelector(selector);

    if (!elemRef) return;

    if (prevScrollPos.current > currentScrollPos) {
      elemRef.classList.remove(className);
    } else {
      elemRef.classList.add(className);
    }

    prevScrollPos.current = currentScrollPos;
  };

  return {
    updateScroll
  };
}
