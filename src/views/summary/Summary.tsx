import { useMemo } from 'react';

import SummaryTable from './SummaryTable';
import {
  APP_PHRASES,
  APP_VIEWS,
  GAME_RESULT,
  INITIAL_PLAYER_CONFIG,
  SUMMARY_TABLE_HEADERS,
} from '@/constants';
import { useGameContext } from '@/hooks/useGameContext';
import { useMenuContext } from '@/hooks/useMenuContext';

const Summary = () => {
  const { setActiveView } = useMenuContext();
  const { setPlayerConfig, gameResult, playerConfig } = useGameContext();
  const { stats } = playerConfig;
  const rollsSum = useMemo(() => Object.values(stats).reduce((acc, val) => acc + val, 0), [stats]);
  const gameWon = gameResult === GAME_RESULT.WIN;

  const playAgainHandler = (): void => {
    setPlayerConfig(INITIAL_PLAYER_CONFIG);
    setActiveView(APP_VIEWS.GAME);
  };

  return (
    <div className="w-[400px]">
      <h2 className="text-[52px] text-center" style={{ color: gameWon ? 'green' : 'red' }}>
        {gameWon ? APP_PHRASES.WIN : APP_PHRASES.LOSE}!
      </h2>
      <SummaryTable
        title={APP_PHRASES.STATISTICS}
        headers={SUMMARY_TABLE_HEADERS}
        data={Object.entries(stats)}
        summaryData={{
          label: APP_PHRASES.ROLL_SUM,
          count: rollsSum,
        }}
      />
      <button className="btn-default transition-default mt-3" onClick={playAgainHandler}>
        {APP_PHRASES.PLAY_AGAIN}
      </button>
    </div>
  );
};

export default Summary;
