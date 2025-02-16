import { isMocksEnabled, type Response } from '@/shared/api/base';

export const fetchHealthChecker = async (isSuccess: boolean): Response<{ message: string }> => {
  if (!isMocksEnabled) {
  }

  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        isSuccess
          ? resolve({ status: 200, message: 'Hello, World!' })
          : reject('Internal fake error'),
      2000,
    ),
  );
};
