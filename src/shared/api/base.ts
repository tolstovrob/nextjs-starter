export const isMocksEnabled = true;

export interface BaseResponse {
  status: number;
}

export type Response<T> = Promise<BaseResponse & T>;
