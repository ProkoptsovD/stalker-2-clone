import React from 'react';

export function useCustomCursor<E extends HTMLElement>({
  elemRef,
  classWithCursorStyles
}: UseCustomCursor<E>): void {
  React.useEffect(() => {
    if (elemRef?.current) {
      elemRef.current.classList.add(classWithCursorStyles);
    }
  }, [elemRef, classWithCursorStyles]);
}

export type UseCustomCursor<E extends HTMLElement> = {
  classWithCursorStyles: string;
  elemRef: React.MutableRefObject<E | null>;
};
