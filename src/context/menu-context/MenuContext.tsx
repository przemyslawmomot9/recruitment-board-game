import { createContext, useMemo, useState } from 'react';

import { IMenuContext, IMenuContextProvider } from './interfaces';
import { APP_VIEWS } from '@/constants';

export const MenuContext = createContext<IMenuContext | undefined>(undefined);

export const MenuContextProvider = ({ children }: IMenuContextProvider) => {
  const [activeView, setActiveView] = useState<number>(APP_VIEWS.START_GAME);

  const contextValue = useMemo(
    () => ({
      activeView,
      setActiveView,
    }),
    [activeView]
  );

  return <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>;
};
