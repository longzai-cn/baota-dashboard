import { AxiosError, isAxiosError } from "axios";

export function handleError(error: unknown): void {
  if (isAxiosError(error as AxiosError)) {
    // 处理 Axios 错误
    console.error(
      "Axios error:",
      (error as AxiosError).message,
      (error as AxiosError).response
    );
  } else {
    // 处理其他类型的错误
    console.error("Non-Axios error:", (error as Error).message);
  }
}
