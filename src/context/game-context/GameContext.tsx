import { createContext, useMemo, useState } from 'react';

import {
  IGameConfig,
  IGameContext,
  IGameContextProvider,
  IPlayerConfig,
  TBoard,
} from './interfaces';
import { GAME_RESULT, INITIAL_PLAYER_CONFIG } from '@/constants';

export const GameContext = createContext<IGameContext | undefined>(undefined);

export const GameContextProvider = ({ children }: IGameContextProvider) => {
  const [gameResult, setGameResult] = useState(GAME_RESULT.PENDING as number);
  const [gameConfig, setGameConfig] = useState<IGameConfig | undefined>(undefined);
  const [playerConfig, setPlayerConfig] = useState<IPlayerConfig>(INITIAL_PLAYER_CONFIG);
  const [boardTemplate, setBoardTemplate] = useState<TBoard>([]);

  const contextValue: IGameContext = useMemo(
    () => ({
      gameConfig,
      setGameConfig,
      playerConfig,
      setPlayerConfig,
      gameResult,
      setGameResult,
      boardTemplate,
      setBoardTemplate,
    }),
    [gameConfig, playerConfig, gameResult, boardTemplate]
  );

  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};
