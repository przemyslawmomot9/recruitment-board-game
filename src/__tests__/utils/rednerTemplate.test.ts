import { ISpecialFieldsConfig } from '@/context/game-context/interfaces';
import { renderTemplate } from '@/utils';

describe('renderTemplate function', () => {
  it('should handle special fields configuration', () => {
    const totalFields = 8;
    const fieldsPerRow = 4;
    const specialFieldsConfig: ISpecialFieldsConfig = {
      2: {
        label: 'Game Over',
        action: 'gameOver',
      },
      4: {
        label: 'Move backwards by 12 positions!',
        action: 'moveBackward',
        pieceOffset: 12,
      },
      6: {
        label: 'Finish',
        action: 'gameWon',
      },
    };

    const result = renderTemplate(totalFields, fieldsPerRow, specialFieldsConfig);
    const flattedTemplate = result.flat();

    expect(flattedTemplate.find(x => x?.idx == 2)?.isSpecial).toBe(true);
    expect(flattedTemplate.find(x => x?.idx == 4)?.isSpecial).toBe(true);
    expect(flattedTemplate.find(x => x?.idx == 6)?.isSpecial).toBe(true);
  });

  it('should render correct number of fields', () => {
    const totalFields = 8;
    const fieldsPerRow = 4;
    const specialFieldsConfig: ISpecialFieldsConfig = {};

    const result = renderTemplate(totalFields, fieldsPerRow, specialFieldsConfig);

    expect(result.flat().filter(Boolean).length).toBe(totalFields);
  });
});
