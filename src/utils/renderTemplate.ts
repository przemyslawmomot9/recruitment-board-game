import { FIELD_TYPES } from '@/constants';
import { IBoardField, ISpecialFieldsConfig, TBoard } from '@/context/game-context/interfaces';

export function renderTemplate(
  totalFields: number,
  fieldsPerRow: number,
  specialFieldsConfig: ISpecialFieldsConfig,
  fieldTypes: string[] = Object.values(FIELD_TYPES)
): TBoard {
  const template: TBoard = [];
  let isLeftToRight = true;
  let currentFieldIdx = 1;
  let currentFieldTypeIdx = 0;

  while (currentFieldIdx <= totalFields) {
    const row: Array<IBoardField | null> = [];

    for (let i = 0; i < fieldsPerRow; i++) {
      if (currentFieldIdx <= totalFields) {
        row.push({
          idx: currentFieldIdx,
          fieldType: fieldTypes[currentFieldTypeIdx],
          isSpecial: Boolean(specialFieldsConfig[currentFieldIdx]),
        });
        currentFieldIdx++;
        currentFieldTypeIdx = (currentFieldTypeIdx + 1) % fieldTypes.length;
      } else {
        row.push(null);
      }
    }

    if (!isLeftToRight) {
      row.reverse();
    }
    template.unshift(row);

    if (currentFieldIdx <= totalFields) {
      const spacerRow: Array<IBoardField | null> = new Array(fieldsPerRow).fill(null);
      spacerRow[isLeftToRight ? fieldsPerRow - 1 : 0] = {
        idx: currentFieldIdx,
        fieldType: fieldTypes[currentFieldTypeIdx],
        isSpecial: Boolean(specialFieldsConfig[currentFieldIdx]),
      };
      currentFieldIdx++;
      currentFieldTypeIdx = (currentFieldTypeIdx + 1) % fieldTypes.length;
      template.unshift(spacerRow);
    }
    isLeftToRight = !isLeftToRight;
  }

  return template;
}
