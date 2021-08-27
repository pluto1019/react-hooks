import { useEffect, useState } from 'react';

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmltitle = document.querySelector('title');
    htmltitle.innerText = title;
  };
  useEffect(updateTitle, [title]);

  return setTitle;
};
