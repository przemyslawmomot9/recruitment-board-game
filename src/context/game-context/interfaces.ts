import { PropsWithChildren } from 'react';

export interface IPlayerStats {
  [key: string]: number;
}

export interface IPlayerConfig {
  currentPosition: {
    fieldType: string;
    idx: number;
  };
  stats: IPlayerStats;
}

export type TSpecialFieldAction = 'moveForward' | 'moveBackward' | 'gameOver' | 'gameWon';

export interface ISpecialField {
  label: string;
  action: TSpecialFieldAction;
  pieceOffset?: number;
}

export interface ISpecialFieldsConfig {
  [key: string]: ISpecialField;
}

export interface IGameRule {
  text: string;
  children?: IGameRule[];
}

export interface IGameConfig {
  fieldsNumber: number;
  fieldsPerRow: number;
  specialFieldsConfig: ISpecialFieldsConfig;
  gameRules: IGameRule[];
}

export interface IBoardField {
  fieldType: string;
  idx: number;
  isSpecial: boolean;
}

export type TBoard = Array<Array<IBoardField | null>>;

export interface IGameContext {
  gameConfig: IGameConfig | undefined;
  setGameConfig: React.Dispatch<React.SetStateAction<IGameConfig | undefined>>;
  playerConfig: IPlayerConfig;
  setPlayerConfig: React.Dispatch<React.SetStateAction<IPlayerConfig>>;
  gameResult: number;
  setGameResult: React.Dispatch<React.SetStateAction<number>>;
  boardTemplate: TBoard;
  setBoardTemplate: React.Dispatch<React.SetStateAction<TBoard>>;
}

export interface IGameContextProvider extends PropsWithChildren {}
