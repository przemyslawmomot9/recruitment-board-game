import { renderHook, waitFor } from '@testing-library/react';

import { useGameConfig } from '@/hooks';
import { mockGameConfig } from '@/mockData';
import { mockApiRequest } from '@/utils/mockApiRequest';

jest.mock('@/utils/mockApiRequest');
describe('useGameConfig', () => {
  it('should fetch game config successfully', async () => {
    (mockApiRequest as jest.Mock).mockResolvedValue(mockGameConfig);
    const { result } = renderHook(() => useGameConfig());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.gameConfig).toBeUndefined();

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.gameConfig).toEqual(mockGameConfig);
  });
});
