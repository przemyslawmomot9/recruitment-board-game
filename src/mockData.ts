import { IGameConfig } from './context/game-context/interfaces';

export const mockGameConfig: IGameConfig = {
  fieldsNumber: 25,
  fieldsPerRow: 8,
  specialFieldsConfig: {
    13: {
      label: 'Koniec gry!',
      action: 'gameOver',
    },
    24: {
      label: 'Cofasz się o 12 pól!',
      action: 'moveBackward',
      pieceOffset: 12,
    },
    25: {
      label: 'Meta',
      action: 'gameWon',
    },
  },
  gameRules: [
    {
      text: 'Plansza ma 25 pól. Pole 25 jest polem specjalnym i oznacza metę. Pola są połączone w grupy. Każda grupa pól to pola: A, B, C, D (ułożone zawsze w tej samej kolejności). Grupy pól powtarzają się sześć razy (łącznie 24 pola).',
    },
    {
      text: 'Na planszy są pola specjalne:',
      children: [
        {
          text: 'Pole na pozycji 13 oznacza przegraną – koniec gry.',
        },
        {
          text: 'Pole na pozycji 24 oznacza powrót na pole 12.',
        },
      ],
    },
    {
      text: 'Pola na pozycji 25 jest metą i oznacza wygraną.',
    },
    {
      text: 'Gracz rzuca kostką sześciościenną na której ścianki są oznaczone: A, B, C, D, STOP, -1.',
    },
    {
      text: 'Pionek przesuwa się po planszy zgodnie wyrzuconą wartością, gdzie',
      children: [
        {
          text: 'A, B, C lub D oznacza przesunięcie pionka na najbliższe pole z taką wartością.',
        },
        {
          text: 'STOP oznacza że użytkownik czeka kolejkę.',
        },
        {
          text: '-1 oznacza cofniecie o jedno pole.',
        },
      ],
    },
    {
      text: 'Gracz wygrywa jeśli będąc na polach ostatniej grupy wyrzuci kostką taką wartość, której już nie ma przed nim na planszy.',
    },
  ],
};
