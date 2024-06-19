import Dice from '../dice/Dice';
import { APP_PHRASES } from '@/constants';
import { useDiceRollLogic } from '@/hooks/useDiceRollLogic';

const DiceRoller = () => {
  const { rollResult, handleRollDice } = useDiceRollLogic();

  return (
    <div>
      <div className="mb-2">
        <Dice choice={rollResult} />
      </div>
      <button className="btn-default transition-default" onClick={handleRollDice}>
        {APP_PHRASES.ROLL}
      </button>
    </div>
  );
};

export default DiceRoller;
