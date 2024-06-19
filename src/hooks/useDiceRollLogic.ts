import { useState } from 'react';

import { useGameContext } from './useGameContext';
import { DICE_POSSIBILITIES, END_GAME_FIELD, FIELD_TYPES } from '@/constants';
import { IPlayerConfig } from '@/context/game-context/interfaces';
import { rollDice } from '@/utils/rollDice';

export const useDiceRollLogic = () => {
  const [rollResult, setRollResult] = useState('');
  const { setPlayerConfig, gameConfig, boardTemplate } = useGameContext();

  const getPlayerOffset = (playerConfig: IPlayerConfig, rollChoice: string): number => {
    if (rollChoice === DICE_POSSIBILITIES.STOP) return 0;
    if (rollChoice === DICE_POSSIBILITIES.MINUS_1) {
      if (playerConfig.currentPosition.idx === 1) return 0;
      return -1;
    }
    const fields = Object.values(FIELD_TYPES);
    if (rollChoice === playerConfig.currentPosition.fieldType) return fields.length;
    const currentField = playerConfig.currentPosition.fieldType;
    const currentIdx = fields.indexOf(currentField as keyof typeof FIELD_TYPES);
    const newFieldIdx = fields.indexOf(rollChoice as keyof typeof FIELD_TYPES);
    if (newFieldIdx > currentIdx) {
      return newFieldIdx - currentIdx;
    } else {
      return fields.length - (currentIdx - newFieldIdx);
    }
  };

  const handleSpecialFields = (fieldIdx: number): number => {
    const specialField = gameConfig?.specialFieldsConfig[fieldIdx];
    if (!specialField) return fieldIdx;
    const { action, pieceOffset } = specialField;

    switch (action) {
      case 'gameOver':
        return -1;
      case 'gameWon':
        return fieldIdx;
      case 'moveForward':
        return fieldIdx + (pieceOffset || 0);
      case 'moveBackward':
        return fieldIdx - (pieceOffset || 0);
      default:
        return fieldIdx;
    }
  };

  const handleRollDice = (): void => {
    const newChoice = rollDice(Object.values(DICE_POSSIBILITIES));
    setRollResult(newChoice);
    setPlayerConfig(prevConfig => {
      const newBaseIdx = prevConfig.currentPosition.idx + getPlayerOffset(prevConfig, newChoice);
      const finalIdx = handleSpecialFields(newBaseIdx);
      const searchIdx = finalIdx === -1 ? newBaseIdx : finalIdx;

      // if newFieldType is equal to END_GAME_FIELD, it means that newIndex is greater than board field counts
      // which is equal to won a game.
      const newFieldType =
        boardTemplate.flat().find(field => field?.idx === searchIdx)?.fieldType || END_GAME_FIELD;
      return {
        ...prevConfig,
        currentPosition: { fieldType: newFieldType, idx: finalIdx },
        stats: { ...prevConfig.stats, [newFieldType]: (prevConfig.stats[newFieldType] || 0) + 1 },
      };
    });
  };

  return { handleRollDice, rollResult };
};
