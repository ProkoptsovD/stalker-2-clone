import React from 'react';

export function useSticky<T extends HTMLElement | null>(
  elemRef: React.MutableRefObject<T>,
  className: string
) {
  const prevScrollPos = React.useRef<number>(window.pageYOffset);

  const updateScroll = (currentScrollPos: number): void => {
    if (!elemRef.current) return;

    if (prevScrollPos.current >= currentScrollPos) {
      elemRef.current.classList.remove(className);
    } else {
      elemRef.current.classList.add(className);
    }
  };

  return {
    updateScroll
  };
}
