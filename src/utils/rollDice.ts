export const rollDice = (dicePossibilites: string[]): string => {
  const choices = Object.values(dicePossibilites);
  const idx = Math.floor(Math.random() * choices.length);
  return choices[idx];
};
