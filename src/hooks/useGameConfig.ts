import { useEffect, useState } from 'react';

import { IGameConfig } from '@/context/game-context/interfaces';
import { mockGameConfig } from '@/mockData';
import { mockApiRequest } from '@/utils/mockApiRequest';

export const useGameConfig = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [gameConfig, setGameConfig] = useState<IGameConfig | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    mockApiRequest<IGameConfig>(mockGameConfig)
      .then(response => setGameConfig(response))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    isError,
    gameConfig,
  };
};
