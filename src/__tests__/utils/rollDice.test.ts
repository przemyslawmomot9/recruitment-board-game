import { rollDice } from '@/utils';

describe('rollDice function', () => {
  it('should return one of the provided dice possibilities', () => {
    const dicePossibilites = ['1', '2', '3', '4', '5', '6'];
    const result = rollDice(dicePossibilites);
    expect(dicePossibilites).toContain(result);
  });

  it('should return a string', () => {
    const dicePossibilites = ['head', 'tail'];
    const result = rollDice(dicePossibilites);
    expect(typeof result).toBe('string');
  });
});
