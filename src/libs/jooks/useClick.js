import { useEffect, useRef } from 'react';

export const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    const currentEle = element.current;

    if (currentEle) {
      currentEle.addEventListener('click', onClick);
    }
    return () => {
      if (currentEle) {
        currentEle.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);

  return typeof onClick === 'function' ? element : undefined;
};
