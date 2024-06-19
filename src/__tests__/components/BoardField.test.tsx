import { render, screen } from '@testing-library/react';

import BoardField from '@/components/board/BoardField';
import { IBoardFieldProps } from '@/components/board/interfaces';
import { IGameContext } from '@/context/game-context/interfaces';
import * as hooks from '@/hooks/useGameContext';
import { mockGameConfig } from '@/mockData';
import { getFieldColor } from '@/utils/getFieldColor';
import '@testing-library/jest-dom';

jest.mock('@/utils/getFieldColor');
const mockGetFieldColor = getFieldColor as jest.MockedFunction<typeof getFieldColor>;

describe('BoardField component', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useGameContext').mockReturnValue({
      gameConfig: mockGameConfig,
    } as IGameContext);
  });

  it('renders empty div when isEmpty is true', () => {
    const props: IBoardFieldProps = {
      isEmpty: true,
      shouldRenderPiece: false,
    };

    const { container } = render(<BoardField {...props} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('renders empty div when field is null', () => {
    const props: IBoardFieldProps = {
      isEmpty: false,
      shouldRenderPiece: false,
    };

    const { container } = render(<BoardField {...props} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('renders with field data and piece', () => {
    const props = {
      isEmpty: false,
      shouldRenderPiece: true,
      field: {
        idx: 1,
        isSpecial: false,
        fieldType: 'A',
      },
    };

    mockGetFieldColor.mockReturnValue('black');

    render(<BoardField {...props} />);

    const piece = screen.getByTestId('piece');
    const fieldIdx = screen.getByText(props.field.idx.toString());

    expect(piece).toBeInTheDocument();
    expect(fieldIdx).toBeInTheDocument();
  });
});
