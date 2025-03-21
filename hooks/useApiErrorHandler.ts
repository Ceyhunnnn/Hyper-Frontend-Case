import { IApiErrorResponse } from "@/types/ApiError.type";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const useApiErrorHandler = (
  error: unknown
): IApiErrorResponse | null => {
  if (error && typeof error === "object" && "data" in error) {
    const fetchError = error as FetchBaseQueryError;
    return fetchError.data as IApiErrorResponse;
  }
  return null;
};
