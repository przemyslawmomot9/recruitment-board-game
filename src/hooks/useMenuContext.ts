import { useContext } from 'react';

import { MenuContext } from '@/context/menu-context/MenuContext';

export const useMenuContext = () => {
  const ctx = useContext(MenuContext);

  if (!ctx) {
    throw Error('Overlooked wrapping with MenuContextProvider!');
  }

  return ctx;
};
