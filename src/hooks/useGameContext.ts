import { useContext } from 'react';

import { GameContext } from '@/context/game-context/GameContext';

export const useGameContext = () => {
  const ctx = useContext(GameContext);

  if (!ctx) {
    throw Error('Overlooked wrapping with GameContextProvider!');
  }

  return ctx;
};
