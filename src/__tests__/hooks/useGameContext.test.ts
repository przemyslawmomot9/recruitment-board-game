import { renderHook } from '@testing-library/react';

import { useGameContext } from '@/hooks';

describe('useMenuContext hook', () => {
  it('should throw an error if not wrapped in provider', () => {
    expect(() => {
      renderHook(() => useGameContext());
    }).toThrow('Overlooked wrapping with GameContextProvider!');
  });
});
