import { ReactNode, useCallback } from 'react';

import { v4 as uuidv4 } from 'uuid';

import BoardField from './BoardField';
import { useGameContext } from '@/hooks/useGameContext';

const Board = () => {
  const { playerConfig, boardTemplate, gameConfig } = useGameContext();

  const renderFields = useCallback((): ReactNode => {
    if (!boardTemplate) return null;

    return boardTemplate.map(row => {
      const boardRow = row.map(field =>
        !field ? (
          <BoardField key={uuidv4()} isEmpty />
        ) : (
          <BoardField
            isEmpty={false}
            key={field.idx}
            shouldRenderPiece={playerConfig.currentPosition.idx === field.idx}
            field={field}
          />
        )
      );

      return boardRow;
    });
  }, [boardTemplate, playerConfig]);

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${gameConfig?.fieldsPerRow}, minmax(0, 1fr))` }}
      className="grid gap-1"
    >
      {renderFields()}
    </div>
  );
};

export default Board;
