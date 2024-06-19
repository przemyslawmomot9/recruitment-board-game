import Board from '@/components/board';
import DiceRoller from '@/components/dice-roller';
import { APP_PHRASES, APP_VIEWS, INITIAL_PLAYER_CONFIG } from '@/constants';
import { useGameContext } from '@/hooks/useGameContext';
import { useMenuContext } from '@/hooks/useMenuContext';

const Game = () => {
  const { setPlayerConfig } = useGameContext();
  const { setActiveView } = useMenuContext();

  const endGameHandler = (): void => {
    setPlayerConfig(INITIAL_PLAYER_CONFIG);
    setActiveView(APP_VIEWS.START_GAME);
  };

  return (
    <div>
      <div className="flex items-center gap-10 mb-5">
        <Board />
        <DiceRoller />
      </div>
      <div className="absolute top-10 left-2">
        <button onClick={endGameHandler} className="btn-default transition-default px-2">
          {APP_PHRASES.END_GAME}
        </button>
      </div>
    </div>
  );
};

export default Game;
