import { APP_PHRASES, APP_VIEWS } from '@/constants';
import { useGameContext } from '@/hooks';
import { useMenuContext } from '@/hooks/useMenuContext';

const Rules = () => {
  const { gameConfig } = useGameContext();
  const { setActiveView } = useMenuContext();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[72px] text-center mb-10 border-b-4 border-black">
        {APP_PHRASES.GAME_RULES}
      </h1>
      <div className="flex flex-col gap-3 w-1/2">
        <ul className="list-disc">
          {gameConfig?.gameRules.map((item, index) => (
            <li key={index}>
              {item.text}
              {item.children && (
                <ul className="list-disc ml-6">
                  {item.children.map((subitem, subindex) => (
                    <li key={subindex}>{subitem.text}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button
          className="btn-default transition-default"
          onClick={() => setActiveView(APP_VIEWS.START_GAME)}
        >
          {APP_PHRASES.BACK}
        </button>
      </div>
    </div>
  );
};

export default Rules;
