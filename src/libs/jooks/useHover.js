import { useEffect, useRef } from 'react';

export const useHover = (onHover) => {
  const element = useRef();

  useEffect(() => {
    const currentEle = element.current;

    if (currentEle) {
      currentEle.addEventListener('mouseenter', onHover);
    }

    return () => {
      if (currentEle) {
        currentEle.removeEventListener('mouseenter', onHover);
      }
    };
  }, [onHover]);

  return typeof onHover !== 'function' ? element : undefined;
};
