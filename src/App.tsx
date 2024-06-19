import { Suspense, lazy, useCallback, useEffect } from 'react';

import Layout from '@/components/layout';
import Spinner from '@/components/spinner';
import { APP_VIEWS, GAME_OVER_FIELD_IDX, GAME_RESULT } from '@/constants';
import { useGameConfig } from '@/hooks/useGameConfig';
import { useGameContext } from '@/hooks/useGameContext';
import { useMenuContext } from '@/hooks/useMenuContext';
import { renderTemplate } from '@/utils/renderTemplate';

const Game = lazy(() => import('@/views/game'));
const Rules = lazy(() => import('@/views/rules'));
const StartGame = lazy(() => import('@/views/start-game'));
const Summary = lazy(() => import('@/views/summary'));

function App() {
  const { setActiveView, activeView } = useMenuContext();
  const { playerConfig, setGameResult, setBoardTemplate, setGameConfig, gameConfig } =
    useGameContext();
  const { isLoading, isError, gameConfig: fetchedGameConfig } = useGameConfig();

  useEffect(() => {
    if (fetchedGameConfig && !gameConfig) {
      const { fieldsNumber, fieldsPerRow, specialFieldsConfig } = fetchedGameConfig;
      const template = renderTemplate(fieldsNumber, fieldsPerRow, specialFieldsConfig);
      setBoardTemplate(template);
      setGameConfig(fetchedGameConfig);
    }
  }, [gameConfig, fetchedGameConfig, setBoardTemplate, setGameConfig]);

  useEffect(() => {
    const { idx } = playerConfig.currentPosition;
    if ((gameConfig && idx >= gameConfig.fieldsNumber) || idx === GAME_OVER_FIELD_IDX) {
      setGameResult(idx === GAME_OVER_FIELD_IDX ? GAME_RESULT.LOSE : GAME_RESULT.WIN);
      setActiveView(APP_VIEWS.SUMMARY);
    }
  }, [playerConfig, gameConfig, setGameConfig, setActiveView, setGameResult]);

  const renderActiveView = useCallback(() => {
    if (isLoading) return <Spinner />;
    if (isError) return <p>Error fetching game config</p>;

    switch (activeView) {
      case APP_VIEWS.START_GAME:
        return <StartGame />;
      case APP_VIEWS.RULES:
        return <Rules />;
      case APP_VIEWS.GAME:
        return <Game />;
      case APP_VIEWS.SUMMARY:
        return <Summary />;
      default:
        return null;
    }
  }, [activeView, isError, isLoading]);

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>{renderActiveView()}</Suspense>
    </Layout>
  );
}

export default App;
