export const mockApiRequest = <T>(data: T, timeout: number = 1000): Promise<T> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
};
