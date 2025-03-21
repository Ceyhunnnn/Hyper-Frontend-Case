import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import { AxiosRequestConfig, AxiosError } from "axios";

const baseUrl: string | undefined = process.env.API_BASE_URL;

const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return {
        data: result.data,
      };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: {
          status: err.response?.status || 500,
          data: err.response?.data || {
            message: "Bilinmeyen bir hata oluştu.",
          },
        },
      };
    }
  };
export default axiosBaseQuery;
