import { mockApiRequest } from '@/utils';

describe('mockApiRequest function', () => {
  it('should resolve with provided data after delay', async () => {
    const testData = { message: 'Hello, World!' };
    const result = await mockApiRequest(testData);
    expect(result).toEqual(testData);
  });

  it('should handle different types of data', async () => {
    const testData = [1, 2, 3];
    const result = await mockApiRequest(testData);
    expect(result).toEqual(testData);
  });

  it('should resolve with undefined if no data provided', async () => {
    const result = await mockApiRequest(undefined);
    expect(result).toBeUndefined();
  });
});
