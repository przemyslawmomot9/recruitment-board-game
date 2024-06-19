export const END_GAME_FIELD = 'Y';

export const SUMMARY_TABLE_HEADERS = ['Typ pola', 'Ilość rzutów'];

export const GAME_OVER_FIELD_IDX = -1;

export const FIELD_TYPES = Object.freeze({
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
});

export const COLORS = Object.freeze({
  GREEN: 'green',
  BLUE: 'blue',
  ORANGE: 'orange',
  RED: 'red',
  BLACK: 'black',
});

export const FIELD_COLORS = Object.freeze({
  [FIELD_TYPES.A]: COLORS.GREEN,
  [FIELD_TYPES.B]: COLORS.BLUE,
  [FIELD_TYPES.C]: COLORS.ORANGE,
  [FIELD_TYPES.D]: COLORS.RED,
});

export const DICE_POSSIBILITIES = Object.freeze({
  ...FIELD_TYPES,
  STOP: 'Stop',
  MINUS_1: '-1',
});

export const APP_VIEWS = Object.freeze({
  START_GAME: 1,
  RULES: 2,
  GAME: 3,
  SUMMARY: 4,
});

export const INITIAL_PLAYER_CONFIG = Object.freeze({
  currentPosition: {
    fieldType: FIELD_TYPES.A,
    idx: 1,
  },
  stats: {},
});

export const APP_PHRASES = Object.freeze({
  RULES: 'Zasady',
  START_GAME: 'Rozpocznij grę',
  BACK: 'Powrót',
  END_GAME: 'Zakończ grę',
  ROLL: 'Rzuć',
  WIN: 'Wygrana',
  LOSE: 'Przegrana',
  REST: 'Pozostałe',
  PLAY_AGAIN: 'Zagraj ponownie',
  STATISTICS: 'Statystyki',
  ROLL_SUM: 'Suma rzutów',
  TITLE: 'Rzut i Marsz!',
  GAME_RULES: 'Zasady gry',
});

export const GAME_RESULT = Object.freeze({
  LOSE: 0,
  WIN: 1,
  PENDING: 2,
});
