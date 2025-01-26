import { isMocksEnabled, type Response } from '@api/base';

export const fetchHealthChecker = async (): Response<{ message: string }> => {
  if (!isMocksEnabled) {
  }

  return new Promise((resolve) =>
    setTimeout(() => resolve({ status: 200, message: 'Hello, World!' }), 2000),
  );
};
