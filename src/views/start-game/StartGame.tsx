import { APP_PHRASES, APP_VIEWS } from '@/constants';
import { useMenuContext } from '@/hooks/useMenuContext';

const StartGame = () => {
  const { setActiveView } = useMenuContext();

  return (
    <div className="h-screen w-screen bg-[#EDC7B7] flex items-center justify-center">
      <div className="w-[500px]">
        <h1 className="text-[72px] text-center mb-10">{APP_PHRASES.TITLE}</h1>
        <div className="flex flex-col gap-3 ">
          <button
            onClick={() => setActiveView(APP_VIEWS.GAME)}
            className="btn-default transition-default"
          >
            {APP_PHRASES.START_GAME}
          </button>
          <button
            onClick={() => setActiveView(APP_VIEWS.RULES)}
            className="btn-default transition-default"
          >
            {APP_PHRASES.RULES}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
