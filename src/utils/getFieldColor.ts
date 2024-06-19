import { COLORS, FIELD_COLORS } from '@/constants';
import { IBoardField } from '@/context/game-context/interfaces';

export const getFieldColor = (field: IBoardField | undefined): string => {
  if (!field) return '';
  if (field.isSpecial) return COLORS.BLACK;
  return FIELD_COLORS[field.fieldType as keyof typeof FIELD_COLORS] || '';
};
