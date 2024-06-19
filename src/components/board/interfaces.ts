import { IBoardField } from '@/context/game-context/interfaces';

export interface IBoardFieldProps {
  isEmpty: boolean;
  shouldRenderPiece?: boolean;
  field?: IBoardField;
}
