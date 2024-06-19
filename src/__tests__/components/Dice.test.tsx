import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dice from '@/components/dice';

describe('Dice component', () => {
  it('renders with correct choice', () => {
    const choice = 'A';
    render(<Dice choice={choice} />);
    const diceLabel = screen.getByTestId('dice-label');
    expect(diceLabel).toHaveTextContent(choice);
  });

  it('renders with empty choice', () => {
    const choice = '';
    render(<Dice choice={choice} />);
    const diceLabel = screen.getByTestId('dice-label');
    expect(diceLabel).toBeEmptyDOMElement();
  });
});
